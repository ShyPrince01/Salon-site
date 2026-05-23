import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';

const Cart = ({ isOpen, onClose, cartItems = [], updateQuantity, removeItem }) => {
  const totalAmount = (cartItems ?? []).reduce(
    (acc, item) => acc + (item.price * (item.quantity || 1)), 
    0
  );

  const handleWhatsAppOrder = () => {
    const businessNumber = "2349061521414"; 
    if (cartItems.length === 0) return;

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    let message = `🛒 *New Order from LUJO BEAUTY Website*%0A%0A`;
    message += `I would like to order *${totalItems} items*:%0A`;
    message += `---------------------------%0A`;

    cartItems.forEach((item) => {
      message += `• ${item.name} (x${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}%0A`;
    });

    message += `---------------------------%0A`;
    message += `*TOTAL: ₦${totalAmount.toLocaleString()}*`;

    window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-[#FAF9F6] shadow-2xl z-[70] flex flex-col"
          >
            {/* HEADER - Fixed */}
            <div className="p-6 bg-white border-b border-gray-100 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} className="text-[#E8B49E]" />
                <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-800">Your Selection</h2>
                <span className="bg-[#E8B49E] text-white text-[10px] px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X size={24} />
              </button>
            </div>

            {/* SCROLLABLE CONTENT - This is where the magic happens */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 py-4 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-40">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="uppercase tracking-widest text-sm font-medium">Empty Cart</p>
                </div>
              ) : (
                <div className="px-6 space-y-6">
                  {cartItems.map((item) => (
                    <motion.div layout key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-24 bg-white rounded-sm overflow-hidden border border-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-bold text-zinc-900 uppercase text-[12px] tracking-wider">{item.name}</h3>
                            <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-400 transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-[#E8B49E] font-semibold">₦{item.price.toLocaleString()}</p>
                        </div>
                        
                        <div className="flex items-center gap-4 bg-white border border-gray-200 w-fit rounded-sm px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-zinc-400 hover:text-zinc-900"><Minus size={14} /></button>
                          <span className="text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-zinc-400 hover:text-zinc-900"><Plus size={14} /></button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER - Fixed at bottom */}
            <div className="p-8 bg-white border-t border-gray-100 shrink-0">
              <div className="flex justify-between items-center mb-6">
                <span className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                <span className="text-xl font-bold text-zinc-900">₦{totalAmount.toLocaleString()}</span>
              </div>
              <button 
                onClick={handleWhatsAppOrder}
                disabled={cartItems.length === 0}
                className="w-full bg-[#E8B49E] disabled:bg-gray-300 text-white py-5 rounded-sm uppercase tracking-[0.2em] text-xs font-black shadow-lg hover:bg-[#d8a38d] transition-all"
              >
                Send Order to WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
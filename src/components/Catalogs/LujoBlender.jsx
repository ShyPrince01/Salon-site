import React, { useRef } from "react";
import { motion } from "framer-motion";

const LujoBlender =  ({ onAddToCart }) => {
  const scrollRef = useRef(null);
  
  const scroll = (d) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = d === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const productImages = ["/lb-1.png", "/lb-2.png", "/lb-3.png", "/lb-4.png"];

  return (

    <section className="py-32 bg-white">
      <div className="container mx-auto px-[5%] lg:px-[10%]">
        
        {}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-black border-b border-black/10 pb-4 inline-block uppercase tracking-wider">
            07. Tools
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group"> 
            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#f3ded6]/40 rounded-t-full h-[500px] shadow-inner" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((img, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center h-full">
                  <motion.img 
                    whileHover={{ scale: 1.05 }} 
                    src={img} 
                    className="w-full h-full object-cover rounded-t-full drop-shadow-2xl" 
                  />
                </div>
              ))}
            </div>

            <button onClick={() => scroll("left")} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10">←</button>
            <button onClick={() => scroll("right")} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10">→</button>
          </div>

          <div className="space-y-8 lg:pl-10">
            <div>
              <h3 className="text-6xl font-serif text-black mb-2 leading-tight">Lujo Blender</h3>
              <p className="text-2xl text-gray-800 font-medium tracking-tight">NGN 3,000.00</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Super soft texture for a flawless, professional finish. The ultimate tool for your beauty routine.
            </p>

            <div className="pt-6">  
              <button onClick={() => onAddToCart({ 
                  id: "lujo-blender", 
                  name: "Lujo Blender",
                  price: 3000,
                  image: "/lb-1.png"
                })} className="w-full lg:w-auto bg-black text-white px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] transition-all shadow-xl transform active:scale-95">
                Add to Cart
              </button>
              
              <div className="mt-7 flex items-center gap-4 text-gray-400">
                <div className="h-[1px] w-10 bg-gray-300"></div>
                <p className="text-[10px] uppercase tracking-widest whitespace-nowrap">Seamless Application</p>
                
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default LujoBlender;
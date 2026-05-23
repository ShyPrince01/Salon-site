import React, { useRef } from "react";
import { motion } from "framer-motion";

const PerfectVeil =  ({ onAddToCart }) => {
  const scrollRef = useRef(null);
  const scroll = (d) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = d === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };


  const productImages = ["/pvp-1.png", "/pvp-2.png", "/pvp-3.png"];

  return (
    <section className="py-32 bg-[#f3ded6]">
      <div className="container mx-auto px-[5%] lg:px-[10%]">
        
        <div className="mb-20 text-right">
          <h2 className="text-4xl font-serif text-black border-b border-black/10 pb-4 inline-block uppercase tracking-wider">
            08. Face
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* THE PRODUCT DETAILS - Left Side */}
          <div className="order-2 lg:order-1 space-y-8 lg:pr-10">
            <div>
              <h3 className="text-6xl font-serif text-black mb-2 leading-tight">
                Perfect Veil <br /> Pressed Powder
              </h3>
              <p className="text-2xl text-gray-800 font-medium tracking-tight">NGN 8,000.00</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Experience the coverage of perfect veil powder, super easy to blend. 
              Perfect soft matte powder! Secret to flawless, poreless looking skin.
            </p>

            <div className="pt-3">
              <button onClick={() => onAddToCart({ 
                  id: "perfect-veil",
                  name: "Perfect Veil",
                  price: 8000,
                  image: "/pvp-1.png",
               })}    className="w-full lg:w-auto bg-black text-white px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] hover:text-black transition-all shadow-xl transform active:scale-95">
                Add to Cart
              </button>
  <div className="mt-7 flex items-center gap-4 text-gray-400">
    <p className="text-[10px] uppercase tracking-widest whitespace-nowrap">
      Swipe to explore shades
    </p>
          <div className="h-[1px] w-10 bg-gray-200"></div>
  </div>
            </div>
          </div>

          <div className="relative group order-1 lg:order-2"> 
            <div 
              ref={scrollRef} 
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#fdf8f6]/50 rounded-t-full h-[500px] shadow-inner" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((img, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center h-full">
                  <motion.img 
                    whileHover={{ scale: 1.05 }} 
                    src={img} 
                    alt={`Perfect Veil Shade ${idx + 1}`}
                    className="w-full h-full object-cover rounded-t-full drop-shadow-2xl" 
                  />
                </div>
              ))}
            </div>

            <button onClick={() => scroll("left")} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10">←</button>
            <button onClick={() => scroll("right")} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10">→</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PerfectVeil;
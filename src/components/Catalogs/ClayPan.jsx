import React, { useRef } from "react";
import { motion } from "framer-motion";


const ClayPan = ({ onAddToCart }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const productImages = [ 
    "/clay-pan-1.png", 
    "/clay-pan-2.png", 
    "/clay-pan-3.png", 
  ];

  return (
    <section className="py-32 bg-[#fdf8f6]">
      <div className="container mx-auto px-[5%] lg:px-[10%]">
        
        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif text-black border-b border-black/10 pb-4 inline-block uppercase tracking-wider">
            01. Clay Pan
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* THE PRODUCT CAROUSEL WRAPPER */}
          <div className="relative group"> 
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#f3ded6] rounded-t-full h-[500px] shadow-inner"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((img, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center h-full">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={img} 
                    alt={`Clay Pan Shade ${idx + 1}`} 
                    className="w-full h-full object-cover rounded-t-full drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all shadow-md z-10 hover:bg-white"
            >
              ←
            </button>
            <button 
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all shadow-md z-10 hover:bg-white"
            >
              →
            </button>
          </div>

          {/* THE PRODUCT DETAILS */}
          <div className="space-y-8 lg:pl-10">
            <div>
              <h3 className="text-6xl font-serif text-black mb-2">Clay Pan</h3>
              <p className="text-2xl text-gray-800 font-medium tracking-tight">NGN 30,000.00</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Lightweight texture, matte finish that hydrates and reduces shine. 
              Long wearing. Made to last. Designed for an uncompromising, 
              flawless look all day.
            </p>

            <div className="pt-6">
              <button 
                onClick={() => onAddToCart({ 
                  id: "clay-pan", 
                  name: "Clay Pan", 
                  price: 30000, 
                  image: "/clay-pan-1.png" 
                })} 
                className="w-full lg:w-auto bg-black text-white px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] transition-all transform active:scale-95 shadow-xl"
              >
                Add to Cart
              </button>
            </div>
              
            <div className="flex items-center gap-4 text-gray-400">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <p className="text-[10px] uppercase tracking-widest">
                Swipe to explore shades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClayPan;
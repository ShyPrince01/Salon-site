import React, { useRef } from "react";
import { motion } from "framer-motion";

const WeightlessHealthMix =  ({ onAddToCart }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // As requested: whm-1, whm-2, etc.
  const productImages = [ 
    "/whm-1.png", 
    "/whm-2.png", 
    "/whm-3.png", 
  ];

  return (
    <section className="py-32 bg-[#f3ded6]"> {/* Peach Background */}
      <div className="container mx-auto px-[5%] lg:px-[10%]">
        
        {/* Section Heading - Aligned Right for variety */}
        <div className="mb-20 text-right">
          <h2 className="text-4xl font-serif text-black border-b border-black/10 pb-4 inline-block uppercase tracking-wider">
            02. Health Mix
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* THE PRODUCT DETAILS - Moved to the Left (Order 1 on Desktop) */}
          <div className="order-2 lg:order-1 space-y-8 lg:pr-10">
            <div>
              <h3 className="text-6xl font-serif text-black mb-2 leading-tight">
                Weightless <br /> Health Mix
              </h3>
              <p className="text-2xl text-gray-800 font-medium tracking-tight">NGN 25,000.00</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Infused with vitamins and botanical extracts. This isn't just coverage; 
              it's a treatment. Breathable, glow-enhancing, and built for the 
              woman on the move.
            </p>

            <div className="pt-6 space-y-6">
              <button onClick={() => onAddToCart({ 
                  id: "weightless-health-mix",
                  name: "Weightless Health Mix",
                  price: 25000,
                  image: "/whm-1.png",
               })}   className="w-full lg:w-auto bg-black text-white px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] transition-all shadow-xl">
                Add to Cart
              </button>
              
              <div className="flex items-center gap-4 text-gray-500/60">
                <p className="text-[10px] uppercase tracking-widest">
                  Discover the Glow
                </p>
                <div className="h-[1px] w-10 bg-gray-400/30"></div>
              </div>
            </div>
          </div>

          {/* THE PRODUCT CAROUSEL - Moved to the Right (Order 2 on Desktop) */}
          <div className="relative group order-1 lg:order-2"> 
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#fdf8f6] rounded-t-full h-[500px] shadow-2xl"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((img, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center h-full">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={img} 
                    alt={`WHM Shade ${idx + 1}`} 
                    className="w-full h-full object-cover rounded-t-full"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10"
            >
              ←
            </button>
            <button 
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hidden lg:block opacity-0 group-hover:opacity-100 transition-all z-10"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeightlessHealthMix;
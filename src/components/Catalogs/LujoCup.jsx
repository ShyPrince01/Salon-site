import React, { useRef } from "react";
import { motion } from "framer-motion";

const LujoCup = ({ onAddToCart }) => {
  const scrollRef = useRef(null);
  const scroll = (d) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = d === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const productImages = ["/lc-1.png", "/lc-2.png"];

  return (
    <section className="py-32 bg-[#f3ded6]">
      <div className="container mx-auto px-[5%] lg:px-[10%]">
        <div className="mb-20 text-right">
          <h2 className="text-4xl font-serif text-black border-b border-black/10 pb-4 inline-block uppercase tracking-wider">
            06. Lifestyle
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8 lg:pr-10">
            <div>
              <h3 className="text-6xl font-serif text-black mb-2">Lujo Cup</h3>
              <p className="text-2xl text-gray-800 font-medium tracking-tight">NGN 20,000.00</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg font-light">
              Retain your hot or cold drinks for 24 hours. Stylish, durable, and built for the modern lifestyle.
            </p>
            <button onClick={() => onAddToCart({ 
                  id: "lujo-cup",
                  name: "Lujo Cup",
                  price: 20000,
                  image: "/lc-1.png",
               })}className="w-full lg:w-auto bg-black text-white px-16 py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] hover:text-black transition-all shadow-xl">
              Add To Cart
            </button>
           
            <div className="flex items-center gap-4 text-gray-400">
           <p className="text-[10px] uppercase tracking-widest">Elevate your routine</p>
            <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
          </div>
          <div className="relative group order-1 lg:order-2"> 
            <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-[#fdf8f6]/50 rounded-t-full h-[500px] shadow-inner" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {productImages.map((img, idx) => (
                <div key={idx} className="min-w-full snap-center flex justify-center h-full">
                  <motion.img whileHover={{ scale: 1.05 }} src={img} className="w-full h-full object-cover rounded-t-full drop-shadow-2xl" />
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
export default LujoCup;
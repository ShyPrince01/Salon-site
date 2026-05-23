import React, { useEffect } from "react";
import { motion } from "framer-motion"; 
import ClayPan from "../components/Catalogs/ClayPan";
import WeightlessHealthMix from "../components/Catalogs/WeightlessHealthMix";
import LujoToteBag from "../components/Catalogs/LujoToteBag"; 
import RadiantFoundation from "../components/Catalogs/RadiantFoundation";
import DesertSand from "../components/Catalogs/DesertSand";
import LujoCup from "../components/Catalogs/LujoCup";
import PerfectVeil from "../components/Catalogs/PerfectVeil";
import LujoBlender from "../components/Catalogs/LujoBlender";

const Catalog = ({ onAddToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/Catbg.png')" }} 
    > 
     
    <section className="pt-44 pb-24 px-[5%] lg:px-[10%] bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase text-black font-bold block mb-6"
          >
            The Lujo Collection
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-8xl font-serif text-black leading-tight"
          >
            Artistry in <br /> 
            <span className="italic text-[#fccab8]">Every Shade.</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg text-black/80 max-w-xl leading-relaxed font-light"
          >
            Highly-curated range of complexion essentials designed for the 
            modern woman who refuses to compromise on quality.
          </motion.p>
        </div>
      </section>

      <div className="relative">
        <ClayPan onAddToCart={onAddToCart} />
        <WeightlessHealthMix onAddToCart={onAddToCart} />
        <LujoToteBag onAddToCart={onAddToCart} />
        <RadiantFoundation onAddToCart={onAddToCart} />
        <DesertSand onAddToCart={onAddToCart} />
        <LujoCup onAddToCart={onAddToCart} />
        <LujoBlender onAddToCart={onAddToCart} />
        <PerfectVeil onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default Catalog;
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import leave from "../assets/leaves-icons.png";
import rabbit from "../assets/ic_round-cruelty-free.png";
import perfume from "../assets/icon-park_foundation-makeup.png";
import tubes from "../assets/game-icons_test-tubes.png";
import globe from "../assets/Vector.png";
import love from "../assets/Vector (1).png";
import { Link } from "react-router-dom";

const AboutUs = ({ onAddToCart }) => {
  const philosophies = [
    {
      name: "Beauty Cosmetic",
      description: "All cosmetic formulas are organic. The majority of all ingredients are natural.",
      image: leave,
    },
    {
      name: "Cruelty-Free",
      description: "Even nowadays some cosmetic products are tested on animals. That is not the case for us.",
      image: rabbit,
    },
    {
      name: "Professional products",
      description: "All products we use are professional and have proven efficiency. No compromises.",
      image: perfume,
    },
    {
      name: "Non-Toxic Formula",
      description: "Don’t worry, all our nails polishes another products are non-toxic. We do care about you and our specialists.",
      image: tubes,
    },
    {
      name: "Personalized Experience",
      description: "You aren't just a client; you are our favorite guest. Come and experience a level of service that defines the new standard of beauty.",
      image: globe,
    },
    {
      name: "Made with Love",
      description: "Our team consists of passionate experts who live for their craft. Experience the LUJO difference through products designed with purpose.",
      image: love,
    },
  ];

  // Star Product data configuration
  const starProduct = {
    id: "lujo-foundation-001",
    name: "LUJO Foundation",
    price: 15000, // Update to match your catalog pricing
    image: "/girl.jpg" // Uses your existing main imagery background or substitute file path
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO HERO SECTION */}
      <section className="relative overflow-hidden px-[5%] lg:px-[10%] py-20 min-h-[20vh] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105" 
          style={{ 
            backgroundImage: "url('/img.jpg')",
            filter: "brightness(0.7) blur(4px)" 
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-[1]" />
        <div className="relative z-10 w-full pt-12 ">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-7xl font-serif text-white mb-6 uppercase tracking-wider leading-tight"
          >
            Our <span className="italic text-[#fccab8]">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-white/90 text-lg font-light leading-relaxed"
          >
            LUJO Beauty was created with a vision to redefine beauty standards and make luxury cosmetics accessible to everyone.
          </motion.p>
        </div>
      </section>

      {/* WHY CHOOSE LUJO SECTION */}
      <section className="bg-white px-[5%] lg:px-[10%] py-20">
        <div className="2xl:container mx-auto">
          <h1 className="text-4xl font-semibold text-center uppercase tracking-widest font-serif">Why Choose LUJO</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {philosophies.map((philosophy, index) => (
              <div key={index} className="mx-auto h-auto w-full flex flex-col items-center group">
                <img src={philosophy.image} alt="" className="w-[50px] h-[50px]" />
                <h4 className="text-[11px] font-bold mt-4 text-center uppercase tracking-[0.2em]">{philosophy.name}</h4>
                <p className="w-full lg:w-2/3 mt-3 text-sm text-center mx-auto text-gray-500 font-light leading-relaxed">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
          <div className="py-10 mt-10 flex justify-center">
            <Link 
              to="/catalog" 
              className="bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#FDE4DB] hover:text-black transition-all duration-700 shadow-xl"
            >
              Explore the Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* UNCLE RENZO STORY SECTION */}
      <section className="px-[5%] lg:px-[10%] py-20 bg-[#f3ded6]">
        <div className="2xl:container mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <img src="/renzo.jpg" alt="Uncle renzo" className="w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl lg:text-6xl font-bold">Our Story</h3>
            <p className="lg:text-lg mt-5 font-light leading-relaxed text-zinc-800">
              Building a movement, not just a brand. At LUJO, we believe that true luxury...
              "Welcome to LUJO Beauty World." ...bring you hydration that lasts. 
              "Strength and elegance from the East." "The Western glow that never fades," 
              "Beauty that celebrates every culture." "Affordable luxury." <br />
              <strong className="block mt-4 uppercase tracking-wider text-sm font-black">Be Beautiful. Be Confident. Be LUJO.</strong>
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="text-4xl font-bold">~</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: STAR PRODUCT HIGHLIGHT (LUJO FOUNDATION) */}
      <section className="px-[5%] lg:px-[10%] py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Bold Visual Layout */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-18 h-18 bg-[#FDE4DB] z-0 hidden md:block" />
            <img 
              src={starProduct.image} 
              alt={starProduct.name} 
              className="w-full h-[400px] object-cover relative z-10 shadow-2xl rounded-sm"
            />
            <span className="absolute bottom-6 right-6 z-20 bg-black text-white text-[9px] uppercase tracking-[0.4em] font-weight-bold px-4 py-2">
              Best Seller
            </span>
          </div>

          {/* Typography Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-zinc-400 uppercase tracking-[0.3em] text-[10px] font-black block mb-2">
              Product Focus
            </span>
            
            {/* Bold Stylized Typography */}
            <h2 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight uppercase leading-[0.95] mb-6">
              THE <span className="text-[#E8B49E] block md:inline">LUJO</span> <br className="hidden md:block"/>FOUNDATION
            </h2>
            
            <p className="text-zinc-600 text-base font-light leading-relaxed max-w-md mb-8">
              Flawless liquid architecture for your skin. Formulated to blend micro-pigments with nourishing hydration, delivering high-impact coverage that stays matte all day without losing its rich, luxurious glow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <span className="text-2xl font-bold text-zinc-900">
                ₦{starProduct.price.toLocaleString()}
              </span>
              {onAddToCart && (
                <button 
                  onClick={() => onAddToCart(starProduct)}
                  className="bg-zinc-900 text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-[#E8B49E] hover:text-black transition-colors duration-300 shadow-md"
                >
                  Add Base To Cart
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* NEW: PROMOTIONAL VIDEO BLOCK (LUJO FIRST KIT) */}
      <section className="px-[5%] lg:px-[10%] py-24 bg-white">
        <div className="2xl:container mx-auto max-w-4xl text-center">
          <span className="text-[#E8B49E] uppercase tracking-[0.4em] text-[10px] font-black block mb-3">
            Visual Experience
          </span>
          <h3 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-zinc-900 mb-8">
            The LUJO First Kit Campaign
          </h3>
          
          {/* Responsive Video Container Frame */}
          <div className="w-full aspect-video bg-zinc-900 relative shadow-2xl border-4 border-[#FDE4DB]/40 overflow-hidden group rounded-sm">
            {/* FIX: Replaced iframe with video tag and fixed local public asset path */}
            <video 
              className="w-full h-full object-cover"
              src="/ZJgrxnny5GcUyLcy.mp4" 
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <p className="mt-6 text-sm text-zinc-400 max-w-md mx-auto italic font-light">
            Unboxing the architectural essentials. Watch how the complete First Kit lays down the baseline for effortless artistic execution.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
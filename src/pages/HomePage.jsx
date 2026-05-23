import React, { useEffect } from "react";
import mainbg from "../assets/salon_background.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added Framer Motion
import Button from "../ui/Button";
import scissors from "../assets/scissors.png";
import makeup from "../assets/makeup.png";
import manicure from "../assets/manicure.png";
import skincare from "../assets/skincare.png";
import facial from "../assets/facial.png";
import ourStoryImage from "../assets/makeup-artits.png";
import { FaBook, FaClock, FaInstagram, FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import IG1 from "../assets/lujo1.png";
import IG2 from "../assets/lujo2.png";
import IG3 from "../assets/lujo4.png";
import IG4 from "../assets/lujo3.png";
import IG5 from "../assets/lujo5.png";
import { FaLocationPin } from "react-icons/fa6";
import Catalog from "./Catalog";
import ohhlujo from "../assets/ohhlujo.jpg"; 

const HomePage = () => {
  const serviceMenu = [
    { name: "Hair", image: scissors },
    { name: "Makeup", image: makeup },
    { name: "Manicure/Pedicure", image: manicure },
    { name: "Skincare", image: skincare },
    { name: "Facial", image: facial },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section
        className="py-32 px-[5%] lg:px-[10%]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
          url(${mainbg})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase text-[#fccab8] font-bold block mb-6 text-center mt-20"
          >
          </motion.span>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-4xl lg:text-5xl text-white text-center"
          >
            Always Make Room For A{" "}
            <span className="text-[#fccab8]">
              Little <br /> Beauty
            </span>{" "}
            In Your Life.
          </motion.h1>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex gap-5 justify-center"
          >
            <Link
              to="/catalog"
              className="px-5 py-3 border font-semibold border-[#fccab8] hover:bg-[#fccab8] hover:text-black rounded lg:text-lg text-[#fccab8] transition-all duration-300"
            >
              View Catalog
            </Link>
            <Button className="hover:bg-[#fccab8]" destination={"/contactus"} text="Contact Us" />
          </motion.div>
        </div>

        <div className="2xl:container mx-auto flex flex-wrap justify-center gap-5 lg:gap-0 lg:justify-between text-xs font-semibold text-center text-white mt-28">
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">CONTACT</h3>
            <p>Tel: +2349061521414</p>
            <p>Lujocosmetics001@gmai.com</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">HOURS</h3>
            <p>Mon to Fri: 7:30am - 6:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: 9:00am - 4:00pm</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">LOCATION</h3>
            <p className="">
              Shop A1/B1 Polystar Plaza,  <br />Trade fair Complex, Ojo, Lagos, Nigeria,
            </p>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-20 lg:py-32 bg-white">
        <div className="2xl:container mx-auto">
          <h1 className="text-4xl lg:text-5xl text-center font-bold">
            Catalog
          </h1>
          <div className="mt-14 flex flex-wrap justify-center gap-10 lg:justify-around">
            {serviceMenu.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <img
                  src={service.image}
                  alt=""
                  className="object-fit w-12 h-12"
                />
                <p className="text-sm font-semibold mt-4">{service.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <p className="text-lg lg:w-1/2 mx-auto">
              Elevate your beauty routine with a refined collection of high-performance artistry.
            </p>
            <div className="mt-10">
              <Button destination={"/servicemenu"} text="View Catalog" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-20 bg-[#f3ded6]">
        <div className="2xl:container mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <img src={ourStoryImage} alt="" className="" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl lg:text-6xl font-bold">Our Story</h3>
            <p className="font-semibold lg:text-lg mt-5">
              At Lujo Beauty, we believe luxury skincare should be simple, effective, and made for real life. 
              Whether you are building your routine or elevating it, our handpicked essentials deliver results you can see and feel.
              Curated by estheticians, trusted by clients- because your skin deserves the best 
            </p>
            <div className="mt-10">
              <Link
                to="/aboutus"
                className="border border-black rounded font-bold px-6 py-2 text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3ded6"
            fillOpacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,176C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="px-[5%] lg:px-[10%]">
          
        </div>
      </section>

      {/* CONTACT SECTION: Updated to use the generated image layout style */}
      <section className="px-[5%] lg:px-[10%] py-24 bg-white relative overflow-hidden">
        {/* Editorial Text Overlay (Background Layer) */}
        <div className="absolute right-0 bottom-0 pointer-events-none select-none hidden lg:block translate-y-6">
          <p className="text-[11rem] font-bold text-gray-50/80 uppercase tracking-tighter leading-none">
            Artistry
          </p>
        </div>

        {/* The section is a 2-column grid to position the new image next to the text */}
        <div className="2xl:container mx-auto grid lg:grid-cols-2 gap-12 relative z-10 items-center">
          
          {/* Left Column: Your selected ohhlujo image */}
          {/* Framer Motion adds a premium touch with a smooth hover effect */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full h-[350px] lg:h-[480px] rounded-xl overflow-hidden group shadow-xl"
          >
            <img 
              src={ohhlujo} 
              alt="Lujo Beauty World Trade Fair Complex" 
              className="w-full h-full object-cover" // object-cover ensures image fills the area correctly
            />
            {/* Soft, warm overlay to blend with the brand palette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Existing Text & Actions */}
          {/* Positioned similarly to the right side of the generated image */}
          <div className="flex flex-col justify-center text-center lg:text-left py-4">
            <h3 className="text-5xl lg:text-6xl font-bold text-black tracking-tight">
              Reach Out
            </h3>
            <p className="font-semibold lg:text-lg mt-6 text-gray-700 max-w-xl leading-relaxed">
              Have questions about our premium beauty lines, custom treatments, or looking to book a luxury session? Get in touch with our team today and let us refine your routine.
            </p>
            <div className="mt-10">
              <Link
                to="/contactus"
                className="inline-block border-2 border-[#fccab8] text-black font-bold px-9 py-3 rounded text-base hover:bg-[#fccab8] hover:text-black transition-all duration-300 shadow-xs"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-[5%] lg:px-[10%] py-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
          url(${mainbg})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="2xl:container mx-auto py-10 backdrop-blur-xs bg-white/30">
          <h2 className="text-4xl font-bold uppercase text-center text-[#fccab8]">
            instagram
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-y-3 lg:gap-y-5 gap-x-3 lg:gap-x-7 h-[30rem] mt-10">
            <div
              className="col-span-2 lg:col-span-1 row-span-1 lg:row-span-3"
              style={{
                backgroundImage: `url(${IG1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="col-span-1 row-span-2"
              style={{
                backgroundImage: `url(${IG5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="col-span-1 row-span-1"
              style={{
                backgroundImage: `url(${IG3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="hidden lg:flex col-span-1 row-span-2"
              style={{
                backgroundImage: `url(${IG2})`,
                backgroundPosition: "50% center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="col-span-1 row-span-1"
              style={{
                backgroundImage: `url(${IG4})`,
                backgroundPosition: "50% center",
                backgroundSize: "80%",
              }}
            ></div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="https://www.instagram.com/lujobeautyworld/"
              className="text-center border-2 border-[#fccab8] rounded text-[#fccab8] px-5 py-2 mx-auto"
            >
              Follow Us On Instagram <br className="lg:hidden" />{" "}
              @lujobeautyworld
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
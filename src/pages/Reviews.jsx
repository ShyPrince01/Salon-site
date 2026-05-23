import { useEffect, useState } from "react";
import heroImage from "../assets/Appointment-hero-image.png";

const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [reviews] = useState([
    {
      id: 1,
      name: "Amara O.",
      text: "The Perfect Veil is exactly what I needed. It's the secret to my poreless look!",
      image: "/review-1.jpg", 
      product: "Perfect Veil Powder"
    },
    {
      id: 2,
      name: "Titi L.",
      text: "Seamless application every time with the Lujo Blender. Super soft texture.",
      image: "/review-2.jpg",
      product: "Lujo Blender"
    }
  ]);

  return (
    <>
      <section className="bg-[#FDE4DB] px-[5%] lg:px-[10%] py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex mt-20 lg:mt-0">
            <h1 className="text-4xl lg:text-7xl font-serif font-light uppercase tracking-wider">
              The Lujo <br /> <span className="italic">Experience</span>
            </h1>
          </div>
          <div>
            <img
              src={heroImage}
              alt="Lujo Beauty"
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Display Section */}
      <section className="px-[5%] lg:px-[10%] bg-white py-16 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((rev) => (
            <div key={rev.id} className="group relative flex flex-col items-center text-center p-8 bg-[#fdfaf9] hover:bg-white transition-all duration-500 border border-transparent hover:border-[#FDE4DB] rounded-b-full">
              <div className="w-24 h-24 mb-6 overflow-hidden rounded-full border-2 border-[#FDE4DB]">
                 <img src={rev.image} alt={rev.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-xl font-serif italic text-gray-800 leading-relaxed mb-6">
                {rev.text}
              </p>
              <div>
                <h4 className="font-bold tracking-[0.2em] uppercase text-[10px] text-black">{rev.name}</h4>
                <p className="text-[#d4a391] text-[9px] uppercase tracking-widest mt-1 font-medium">{rev.product}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="px-[5%] lg:px-[10%] bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif mb-4 uppercase tracking-widest">Share Your Glow</h3>
            <div className="h-[1px] w-20 bg-[#FDE4DB] mx-auto"></div>
          </div>
          
          <form className="grid gap-8 bg-white p-10 lg:p-16 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all font-light" placeholder="Faithful John" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Product Used</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all font-light" placeholder="e.g. Radiant Foundation" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Experience</label>
              <textarea rows="4" className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all font-light resize-none" placeholder="Describe how the products felt on your skin..."></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-4">Upload a Photo</label>
              <input type="file" className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:uppercase file:tracking-widest file:bg-[#FDE4DB] file:text-black hover:file:bg-black hover:file:text-white file:transition-all cursor-pointer" />
            </div>

            <button className="w-full bg-black text-white py-5 text-[11px] tracking-[0.5em] uppercase hover:bg-[#d4a391] transition-all shadow-xl mt-4">
              Submit Review
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Reviews;
import React, { useRef, useState, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser'; 

const ContactUs = () => {
  const form = useRef(); 
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  // Custom Toast Notification States
  const [notification, setNotification] = useState({ show: false, message: "", isError: false });

  const PUBLIC_KEY = 'ldtyot6_sRS1zYJ3t'; 

  
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // Auto-dismiss notification toast helper logic
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: "", isError: false });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  // Frontend input validation checks
  const validateForm = () => {
    const data = new FormData(form.current);
    const name = data.get("user_name").trim();
    const email = data.get("user_email").trim();
    const message = data.get("message").trim();

    if (!name || name.length < 2) {
      setNotification({ show: true, message: "Please enter a valid full name.", isError: true });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNotification({ show: true, message: "The email address formatting is incorrect.", isError: true });
      return false;
    }

    if (!message || message.length < 10) {
      setNotification({ show: true, message: "Please write a slightly more detailed inquiry (min. 10 characters).", isError: true });
      return false;
    }

    return true;
  };

  // EmailJS submit handler
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);

    const SERVICE_ID = "service_ip0mnbn"; 
    const TEMPLATE_ID = "template_k8lzaki";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSending(false);
          setIsSent(true);
          setNotification({ show: true, message: "Inquiry successfully dispatched to LUJO Artistry.", isError: false });
      }, (error) => {
          setIsSending(false);
          setNotification({ show: true, message: "Network connection timeout. Delivery pipeline failed.", isError: true });
          console.error("EmailJS Error:", error.text);
      });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden scroll-smooth relative">
      
      {/* Dynamic Brand Notification Toast System */}
      <AnimatePresence>
        {notification.show && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            onClick={() => setNotification({ show: false, message: "", isError: false })}
            className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-xl shadow-2xl border cursor-pointer max-w-md w-[90%] ${
              notification.isError 
                ? "bg-red-50 border-red-100 text-red-800" 
                : "bg-[#364132] border-[#2b3428] text-white"
            }`}
          >
            {notification.isError ? (
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#FDE4DB] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0x" />
              </svg>
            )}
            <span className="text-xs uppercase tracking-wider font-bold">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header Section */}
      <section className="bg-[#FDE4DB] pt-44 pb-20 px-[5%] lg:px-[10%] text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] tracking-[0.6em] uppercase text-black font-bold block mb-6">
          Get In Touch
        </motion.span>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl lg:text-7xl font-serif mb-6 text-black leading-tight">
          Reach Out to <span className="italic">LUJO Artistry</span>
        </motion.h1>
      </section>

      {/* 2. Form Section with Success Animation */}
      <section className="relative py-20 px-[5%] lg:px-[10%] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 shadow-2xl rounded-sm overflow-hidden bg-white">
          
          {/* LEFT SIDE: The Message System */}
          <div className="p-8 lg:p-16 bg-white relative min-h-[550px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.div
                  key="form-side"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h2 className="text-4xl font-black mb-12 text-zinc-800 tracking-tight">Send a message</h2>
                  <form ref={form} onSubmit={sendEmail} noValidate className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-700 mb-2">Full Name</label>
                        <input name="user_name" type="text" placeholder="Jane Doe" required className="w-full bg-[#FBFBFB] border border-zinc-100 rounded-xl p-4 outline-none focus:border-[#D4A373] transition-all text-sm" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-700 mb-2">Email Address</label>
                        <input name="user_email" type="email" placeholder="jane@example.com" required className="w-full bg-[#FBFBFB] border border-zinc-100 rounded-xl p-4 outline-none focus:border-[#D4A373] transition-all text-sm" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-zinc-700 mb-2">Your Inquiry</label>
                      <textarea name="message" placeholder="Tell us how we can help..." rows="5" required className="w-full bg-[#FBFBFB] border border-zinc-100 rounded-xl p-4 outline-none focus:border-[#D4A373] transition-all resize-none text-sm"></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full lg:w-fit bg-[#364132] text-white px-10 py-4 rounded-xl uppercase tracking-widest text-xs font-black hover:bg-[#2b3428] transition-all disabled:opacity-50"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-side"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6"
                >
                  <motion.div 
                    initial={{ rotate: -45, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-[#364132] rounded-full flex items-center justify-center"
                  >
                    <svg className="w-12 h-12 text-[#FDE4DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif uppercase tracking-widest text-zinc-800">Message Received</h3>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto uppercase tracking-tighter">We will be in touch with you shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Info Panels */}
          <div className="p-8 lg:p-16 bg-white flex flex-col justify-center space-y-8 border-t lg:border-t-0 lg:border-l border-zinc-100">
            <div>
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-[#B28269] block mb-4">
                Get In Touch
              </span>
              <p className="text-zinc-500 text-[15px] leading-relaxed max-w-md">
                Our beauty specialists are here to assist with your custom orders, product inquiries, or to guide you toward finding your signature aesthetic style.</p>
            </div>

            <div className="space-y-4 max-w-md">
              {/* Email Card */}
              <div className="flex items-center gap-5 p-5 border border-zinc-100 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-0.5">Email Us</span>
                  <a href="mailto:LujoCosmetics001@gmail.com" className="text-sm font-black text-zinc-900 hover:underline">LujoCosmetics001@gmail.com</a>
                </div>
              </div>

             
              <div className="flex items-center gap-5 p-5 border border-zinc-100 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.73.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-zinc-400 mb-0.5">Call Us</span>
                  <a href="tel:+2349061521414" className="text-sm font-black text-zinc-900 hover:underline">+2349061521414</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

     
      <section className="w-full h-[500px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out relative">
        <iframe
          title="LUJO Beauty Cosmetics Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://maps.google.com/maps?q=LUJO%20Beauty%20Cosmetics,%20Polystar%20Plaza,%20Trade%20Fair%20Complex,%20Lagos,%20Nigeria&t=&z=16&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
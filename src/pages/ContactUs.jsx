import React, { useEffect } from "react";
import heroImag from "../assets/Appointment-hero-image.png";
import image2 from "../assets/contactUs_Image2.png";
import image3 from "../assets/contactUs_Image3.png";
import heart from "../assets/Heart-icon.png";

const ContactUs = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      <section className="px-[5%] lg:px-[10%] pt-32 pb-20 lg:py-20 bg-[#FDE4DB]">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-center">
              Contact Us
            </h1>
          </div>
          <div>
            <img
              src={heroImag}
              alt=""
              className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="lg:mt-10 relative lg:py-16 bg-[#FDE4DB]">
        <div className="2xl:container flex flex-col mx-auto">
          <div
            className="lg:absolute top-0 left-0 w-full lg:w-1/2 h-[20rem] lg:h-full"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="flex flex-col w-full lg:w-1/2 ms-auto px-[5%] lg:px-[10%] py-16 lg:py-0">
            <h2 className="text-3xl font-semibold text-center">Contact Us</h2>
            <form action="" className="mt-10">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="border-2 p-3 rounded w-full"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="border-2 p-3 rounded w-full"
                />
              </div>
              <input
                type="text"
                name="Email"
                id=""
                placeholder="Email Address"
                className="border-2 p-3 rounded w-full mt-5"
              />
              <input
                type="text"
                name="Subject"
                id=""
                placeholder="Subject"
                className="border-2 p-3 rounded w-full mt-5"
              />
              <textarea
                name="Message"
                id=""
                placeholder="Enter Message"
                className="resize-none p-3 rounded border-2 mt-5 w-full h-[10rem]"
              ></textarea>
              <div className="mt-8 flex justify-center">
                <button className="px-7 py-3 bg-[#fccab8] font-semibold rounded">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-16">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-3 items-center justify-center">
            <img src={heart} alt="" className="w-[50px] h-[50px]" />
            <h4 className="text-5xl font-bold">Join Our Team</h4>
            <p className="w-2/3 text-center">
              Please send us an email telling us a bit about us
            </p>
            <p className="mt-5 border-2 border-black text-lg font-bold px-5 py-2">
              faithfuljohn849@gmail.com
            </p>
          </div>
          <div className="mt-10">
            <img src={image3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

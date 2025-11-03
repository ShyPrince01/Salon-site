import React, { useEffect } from "react";
import mainbg from "../assets/salon_background.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import scissors from "../assets/scissors.png";
import makeup from "../assets/makeup.png";
import manicure from "../assets/manicure.png";
import skincare from "../assets/skincare.png";
import facial from "../assets/facial.png";
import ourStoryImage from "../assets/makeup-artits.png";
import { FaBook, FaClock, FaInstagram } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import IG1 from "../assets/instgram-pic01.png";
import IG2 from "../assets/instagram-pic02.png";
import IG3 from "../assets/instagram-pic03.png";
import IG4 from "../assets/instgram-pic04.png";
import IG5 from "../assets/instrgram-pic02.png";
import { FaLocationPin } from "react-icons/fa6";

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
          <h1 className="font-bold text-4xl lg:text-5xl text-white text-center mt-20">
            Always Make Room For A{" "}
            <span className="text-[#fccab8]">
              Little <br /> Beauty
            </span>{" "}
            In Your Life.
          </h1>
          <div className="mt-20 flex gap-5 justify-center">
            <Button destination={"/bookappointment"} text="Book Appointment" />
            <Link
              to="servicemenu"
              className="px-5 py-3 border font-semibold border-[#fccab8] hover:bg-[#fccab8] hover:text-black rounded lg:text-lg text-[#fccab8] transition-all duration-300"
            >
              Service Menu
            </Link>
          </div>
        </div>

        <div className="2xl:container mx-auto flex flex-wrap justify-center gap-5 lg:gap-0 lg:justify-between text-xs font-semibold text-center text-white mt-28">
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">CONTACT</h3>
            <p>T: 08038518464</p>
            <p>faithfuljohn849@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">HOURS</h3>
            <p>Mon to Fri: 7:30am - 6:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: 9:00am - 4:00pm</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <h3 className="mb-2">lOCATION</h3>
            <p className="">
              2 2 1 B Baker Street, London, <br />
              NW1 6XE United Kingdom
            </p>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-20 lg:py-32 bg-white">
        <div className="2xl:container mx-auto">
          <h1 className="text-4xl lg:text-5xl text-center font-bold">
            Service Menu
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
              Get your nails done for great mood. Simple pleasures can make your
              week, not just day.
            </p>
            <div className="mt-10">
              <Button destination={"/servicemenu"} text="View Service Menu" />
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
              We started as a small beauty studio in Pakistan. Our main idea was
              to create the best beauty studio in the world. Can there be
              compromises in the best studio in the world? Our answer is always
              no, we care about the best quality, we hire the best specialists
              and provide the best customer service. This approach allowed us to
              grow and create awesome team that is passionate about everything
              we do.
            </p>
            <div className="mt-10">
              <Link
                to="/ourstory"
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
            fill-opacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,176C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="px-[5%] lg:px-[10%]">
          <div className="2xl:container mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-center">
              As Seen On
            </h1>
            <p className="text-3xl lg:text-4xl mt-10">
              "The place with its constant excellence, soul, and style"
            </p>
            <div className="mt-20">
              <Link className="px-7 py-2 border-2 border-[#fccab8] rounded">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3ded6"
            fill-opacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,176C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}
      </section>

      <section className="px-[5%] lg:px-[10%] py-20">
        <div className="2xl:container mx-auto lg:grid grid-cols-3">
          <div className=" flex justify-center py-10">
            <div className="grid place-content-center uppercase rounded-full border-[15px] border-[#fccab8] h-[200px] w-[200px] my-auto">
              <p className="text-4xl font-bold">salon</p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="h-[80%] w-10 bg-[#fccab8] rounded-full my-auto"></div>
          </div>
          <div className=" text-center py-10">
            <h3 className="text-5xl font-bold">Follow US</h3>
            <p className="text-lg w-2/3 text-center mx-auto mt-3">
              Don’t miss promotions, follow us for the latest news
            </p>
            <div className="flex gap-2 mt-5 justify-center">
              <Link to="https://www.facebook.com/profile.php?id=100087867841231">
                <CgFacebook size={30} />
              </Link>
              <Link to="https://www.instagram.com/johnwritescode?igsh=YzJoczR6ZXliajls">
                <FaInstagram size={30} />
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
            ></div>1
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
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="col-span-1 row-span-1"
              style={{
                backgroundImage: `url(${IG4})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              to="https://www.instagram.com/johnwritescode?igsh=YzJoczR6ZXliajls"
              className="text-center border-2 border-[#fccab8] rounded text-[#fccab8] px-5 py-2 mx-auto"
            >
              Follow Us On Instagram <br className="lg:hidden" />{" "}
              @johnwritescode
            </Link>
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] py-20 lg:py-32 bg-white">
        <div className="2xl:container mx-auto flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
          <div className="text-center">
            <div className="flex justify-center">
              <FaBook className="text-[#fccab8] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="uppercase text-2xl font-semibold mt-3 tracking-widest">
                contact
              </h4>
              <p className="text-sm opacity-75">T: 08038518464</p>
              <p className="text-sm opacity-75">faithfuljohn849@gmail.com</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <FaClock className="text-[#fccab8] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="uppercase text-2xl font-semibold mt-3 tracking-widest">
                hours
              </h4>
              <p className="text-sm opacity-75">Mon to Fri: 7:30am - 6:00pm</p>
              <p className="text-sm opacity-75">Sat: 9:00am - 5:00pm</p>
              <p className="text-sm opacity-75">Sun: 9:00am - 4:00pm</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <FaLocationPin className="text-[#fccab8] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]" />
            </div>

            <div className="flex flex-col gap-1 w-fit mx-auto">
              <h4 className="uppercase text-2xl font-semibold mt-3 tracking-widest">
                location
              </h4>
              <p className="text-sm opacity-75 mx-auto">
               2 2 1 B Baker Street, London, <br />
              NW1 6XE United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

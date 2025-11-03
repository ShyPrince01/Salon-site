import React, { useEffect } from "react";
import perfumeImage from "../assets/perfume-pic.png";
import leave from "../assets/leaves-icons.png";
import rabbit from "../assets/ic_round-cruelty-free.png";
import perfume from "../assets/icon-park_foundation-makeup.png";
import tubes from "../assets/game-icons_test-tubes.png";
import globe from "../assets/Vector.png";
import love from "../assets/Vector (1).png";
import Button from "../ui/Button";
import ourStoryImage from "../assets/makeup-artits.png";
import { Link } from "react-router-dom";
import { FaBook, FaClock, FaLocationPin } from "react-icons/fa6";

const OurStory = () => {
  const philosophies = [
    {
      name: "Beauty Cosmetic",
      description:
        "All cosmetic formulas are organic.The majority of all ingredients are natural.",
      image: leave,
    },
    {
      name: "Cruelty-Free",
      description:
        "Even nowadays some cosmetic products are tested on animals. That is not the case for us.",
      image: rabbit,
    },
    {
      name: "Professional products",
      description:
        "All products we use are professional and have proven effeciency. Nocompromises.",
      image: perfume,
    },
    {
      name: "Non-Toxic Formula",
      description:
        "Don’t worry, all our nails polishes another products are non-toxic. We do care about you and our specialists.",
      image: tubes,
    },
    {
      name: "Personalized Experience",
      description:
        "Each guest is our favorite guest.Come and make sure that our services exceptional",
      image: globe,
    },
    {
      name: "We Love What We Do",
      description:
        "People that you’ll meet in our studio are doing job they love. Come and make sure there is a difference.",
      image: love,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="px-[5%] lg:px-[10%] py-20 bg-[#FDE4DB]">
        <div className="2xl:container mx-auto flex flex-col lg:flex-row justify-between mt-20 lg:mt-0">
          <div className="flex flex-col justify-center items-center lg:w-1/2">
            <h1 className="text-6xl font-semibold text-center">Our Story</h1>
            <p className="mt-10 text-center w-full">
              Our main goal was to create the best beauty studio in the world.
              Can there be any compromises in the best studio in the world?
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={perfumeImage}
              alt=""
              className="w-[400px] h-[400px] mx-auto"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-[5%] lg:px-[10%] py-20">
        <div className="2xl:container mx-auto">
          <h1 className="text-4xl font-semibold text-center">Philosophy</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {philosophies.map((philosophy, index) => (
              <div
                key={index}
                className="mx-auto h-[13rem] w-fit flex flex-col items-center"
              >
                <img
                  src={philosophy.image}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <h4 className="text-lg font-bold mt-2 text-center">
                  {philosophy.name}
                </h4>
                <p className="w-2/3 mt-3 text-sm text-center mx-auto">
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
          <div className="py-10 flex justify-center">
            <Button text="Book Appointment" destination={"/bookonline"} />
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
            <p className="lg:text-lg mt-5">
              We started as a small beauty studio in Pakistan. Our main idea was
              to create the best beauty studio in the world. Can there be
              compromises in the best studio in the world? Our answer is always
              no, we care about the best quality, we hire the best specialists
              and provide the best customer service. This approach allowed us to
              grow and create awesome team that is passionate about everything
              we do.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <span className="text-4xl font-bold">~</span>
              <p className="text-xl font-bold">Marrie Makeup Artist</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FDE4DB] px-[5%] lg:px-[10%] py-20 ">
        <div className="2xl:container mx-auto">
          <h1 className="text-5xl font-semibold text-center">Our Products</h1>
          <p className="text-center lg;w-1/2 mt-5 mx-auto">
            All our products are cruelty-free, it’s a category containing all
            cosmetics that have not been tested on animals. Each cosmetic is
            subject to strict control by independent inspection bodies chosen by
            the Coalition for Consumer Information in Cosmetics (CCIC), which is
            an NGO founded by 8 international animal protection groups such as:
            American Anti-Vivisection Society, Animal Alliance of Canada, Doris
            Day Animal League, etc.
          </p>
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

export default OurStory;

import React, { useEffect } from "react";
import HairSection from "../components/ServiceMenu/HairSection";
import MakeupSection from "../components/ServiceMenu/MakeupSection";
import ManicureAndPedicure from "../components/ServiceMenu/ManicurePedicure";
import Skincare from "../components/ServiceMenu/Skincare";
import Facial from "../components/ServiceMenu/Facial";

const ServiceMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="px-[5%] lg:px-[10%] py-40 bg-[#f3ded6]">
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-5xl font-bold">Service Menu</h1>
          <p className="lg:w-1/2 mt-5 mx-auto">
            We enhance individial beauty with state-of-the-art technologies and
            personalized service. Our professional team is ready to provide the
            greatest service you’ve ever had.
          </p>
        </div>
      </section>
      <HairSection />
      <MakeupSection />
      <ManicureAndPedicure />
      <Skincare />
      <Facial />
    </>
  );
};

export default ServiceMenu;

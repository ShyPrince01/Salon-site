import React from "react";
import Button from "../../ui/Button";

const HairSection = () => {
  return (
    <section className="px-[5%] lg:px-[10%] py-20 lg:py-32">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-center">Hair</h1>
        <p className="lg:w-1/2 text-center mx-auto mt-5">
          Stylish hair cuts, gorgeous styling, incredible color services and
          best hair treatments. Choose your dream service!
        </p>
        <div className=" lg:w-2/3 mx-auto">
          {/* <h4 className="font-bold text-lg">Hair</h4> */}
          <div className="grid lg:grid-cols-2 mt-16 gap-x-20 gap-y-20">
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Hair Cut</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                A graduated haircut in which the hair takes the form of
                cascading steps
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Hair Cut</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                A graduated haircut in which the hair takes the form of
                cascading steps
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Hair Cut</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                A graduated haircut in which the hair takes the form of
                cascading steps
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Hair Cut</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                A graduated haircut in which the hair takes the form of
                cascading steps
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <Button destination={"/bookappointment"} text="Book Appointment" />
        </div>
      </div>
    </section>
  );
};

export default HairSection;

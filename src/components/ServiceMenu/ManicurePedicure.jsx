import React from "react";
import Button from "../../ui/Button";

const ManicureAndPedicure = () => {
  return (
    <section className="px-[5%] lg:px-[10%] py-20 lg:py-32">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Manicure And Pedicure
        </h1>
        <p className="lg:w-1/2 text-center mx-auto mt-5">
          Complete your service with beautiful makeup and simply be amazing with
          complete look.
        </p>
        <div className=" lg:w-2/3 mx-auto">
          {/* <h4 className="font-bold text-lg">Hair</h4> */}
          <div className="grid lg:grid-cols-2 mt-16 gap-x-20 gap-y-20">
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Bridal Makeup</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                Cosmetics designed to enhance or alter one's appearance (makeup)
                can be used to conceal blemishes
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">No Makeup Make up look</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                Cosmetics designed to enhance or alter one's appearance (makeup)
                can be used to conceal blemishes
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Party Makeup</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                Cosmetics designed to enhance or alter one's appearance (makeup)
                can be used to conceal blemishes
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex text-sm justify-between">
                <h4 className="font-bold">Glam Makeup</h4>
                <span>N5,000</span>
              </div>
              <p className="opacity-75 mt-3">
                Cosmetics designed to enhance or alter one's appearance (makeup)
                can be used to conceal blemishes
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

export default ManicureAndPedicure;

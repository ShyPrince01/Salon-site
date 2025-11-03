import { useEffect } from "react";
import heroImage from "../assets/Appointment-hero-image.png";
import AppointmentTab from "../components/BookAppointment/AppointmentTab";

const BookAppointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="bg-[#FDE4DB] px-[5%] lg:px-[10%] py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="flex mt-20 lg:mt-0 ">
            <h1 className="text-4xl lg:text-5xl font-semibold my-auto">
              Book Appointment
            </h1>
          </div>
          <div>
            <img
              src={heroImage}
              alt=""
              className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]"
            />
          </div>
        </div>
      </section>

      <section className="px-[5%] lg:px-[10%] bg-white py-10 lg:py-20">
        <h3 className="text-3xl lg:text-4xl text-center font-semibold mb-5">
          Input Service Details
        </h3>
        <AppointmentTab />
      </section>
    </>
  );
};

export default BookAppointment;

import { useState } from "react";
import { useAtom } from "jotai";
import {
  selectedServiceAtom,
  selectedDateAtom,
  selectedTimeAtom,
  userInfoAtom,
} from "../../utils/atoms";
import ServiceSelection from "./ServiceSelection";
import DateAndTime from "./DateAndTime";
import YourInformation from "./YourInformation";
import bookedSuccess from "../../assets/BookedSuccessful.png";

const RequestSent = ({ restart }) => (
  <div className="flex flex-col items-center justify-center py-5">
    <div>
      <img src={bookedSuccess} alt="" className="w-[100px]" />
    </div>
    <h2 className="text-lg font-bold text-green-600 mt-3">🎉 Request Sent!</h2>
    <p className="mt-2 text-gray-600 text-center">
      Your appointment request has been submitted successfully.
    </p>

    {/* <p className="mt-2 text-gray-600 text-center">
      Your appointment request has been submitted successfully.
    </p> */}
    <button
      onClick={restart}
      className="mt-10 cursor-pointer bg-black text-white px-5 py-2 rounded"
    >
      Book Another Appointment
    </button>
  </div>
);

const AppointmentTab = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [requestSent, setRequestSent] = useState(false);

  const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedTime, setSelectedTime] = useAtom(selectedTimeAtom);
  const [userInfo] = useAtom(userInfoAtom);

  const formCompleted = [
    !!selectedService,
    !!selectedDate && !!selectedTime,
    Object.values(userInfo).every((value) => value.trim() !== ""),
  ];

  const nextStep = () => {
    if (currentDisplay < 2) {
      setCurrentDisplay(currentDisplay + 1);
    } else {
      //   handleSubmit();
      //   RequestSent(() => setCurrentDisplay(0));
      setRequestSent(true);
      setCurrentDisplay(null);
    }
  };

  const prevStep = () => {
    if (currentDisplay > 0) {
      setCurrentDisplay(currentDisplay - 1);
    }
  };

  const restartBooking = () => {
    setCurrentDisplay(0);
    setRequestSent(false);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  //   const handleSubmit = async () => {
  //     const payload = {
  //       service: selectedService,
  //       date: selectedDate,
  //       time: selectedTime,
  //       user: userInfo,
  //     };

  //     console.log("Submitting appointment:", payload);

  //     try {
  //       const response = await fetch("/api/appointments", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(payload),
  //       });

  //       if (response.ok) {
  //         setRequestSent(true);
  //       } else {
  //         console.error("Failed to submit appointment");
  //       }
  //     } catch (error) {
  //       console.error("Error submitting appointment:", error);
  //     }
  //   };

  const steps = [
    {
      name: "Service Selection",
      component: <ServiceSelection />,
    },
    {
      name: "Date & Time",
      component: <DateAndTime />,
    },
    {
      name: "Your Information",
      component: <YourInformation />,
    },
  ];

  return (
    <div className="rounded-lg shadow-lg flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/5 rounded-t-lg lg:rounded-lg bg-[#FDE4DB] py-10 pb-0 lg:pb-10 lg:py-20 flex items-end lg:items-center justify-start flex-row lg:flex-col px-2 lg:gap-7">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => index <= currentDisplay && setCurrentDisplay(index)}
            className={`${
              index === currentDisplay
                ? "bg-white lg:bg-black text-black lg:text-white"
                : index <= currentDisplay
                ? "lg:bg-[#DEB3A4] text-black hover:bg-[#ab8577]"
                : "lg:bg-gray-300 text-gray-500 cursor-not-allowed"
            } rounded-t lg:rounded mt-auto py-3 px-3 lg:px-7 w-1/2 text-nowrap text-xs lg:text-base`}
            disabled={index > currentDisplay}
          >
            {step.name}
          </button>
        ))}
      </div>
      <div className="relative lg:w-3/5 px-[5%] py-10">
        {requestSent ? (
          <RequestSent restart={restartBooking} />
        ) : (
          <>{steps[currentDisplay].component}</>
        )}

        {!requestSent && (
          <div className="bottom-5 w-full border-t-2 flex gap-3 mt-5 justify-end">
            {currentDisplay > 0 && (
              <button
                onClick={prevStep}
                className="mt-5 cursor-pointer bg-black text-white rounded px-5 py-2"
              >
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={!formCompleted[currentDisplay]}
              className={`mt-5 rounded px-5 py-2 ${
                formCompleted[currentDisplay]
                  ? "bg-black text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } `}
            >
              {currentDisplay === 2 ? "Submit Request" : "Continue"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentTab;

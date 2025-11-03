import { useState } from "react";
import { useAtom } from "jotai";
import { FaAngleDown } from "react-icons/fa6";
import { selectedServiceAtom } from "../../utils/atoms";

const ServiceSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);

  const services = [
    { name: "Haircut", price: "N5,000" },
    { name: "Massage", price: "N30,000" },
    { name: "Facial", price: "N20,000" },
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <h4 className="mb-2 font-semibold">Select a Service</h4>
      <div
        className="border p-3 bg-white rounded cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedService ? (
          <span className="text-gray-800">{selectedService.name}</span>
        ) : (
          <span className="text-gray-400">Choose a service</span>
        )}
        <FaAngleDown className="text-gray-600" />
      </div>

      {selectedService && (
        <p className="mt-2 text-sm text-gray-600">
          Selected: <strong>{selectedService.name}</strong> -{" "}
          <span className="text-green-500">{selectedService.price}</span>
        </p>
      )}

      {isOpen && (
        <ul className="top-full left-0 w-full bg-white border mt-1 rounded shadow-lg z-10">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex justify-between p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(service)}
            >
              <span className="text-gray-800">{service.name}</span>
              <span className="text-gray-500">{service.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceSelection;

import { useAtom } from "jotai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { selectedDateAtom, selectedTimeAtom } from "../../utils/atoms"; // Import Jotai atoms

const DateAndTime = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [selectedTime, setSelectedTime] = useAtom(selectedTimeAtom);

  const businessHours = {
    start: new Date().setHours(9, 0, 0, 0),
    end: new Date().setHours(16, 0, 0, 0),
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    if (!selectedDate) return;
    const newDateTime = new Date(selectedDate);
    newDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);
    setSelectedTime(newDateTime);
  };

  return (
    <div>
      <h3 className="font-semibold">Select a Date & Time</h3>

      <div className="grid grid-cols-2 gap-5 items-center mt-5">
        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-gray-700">Pick a Date:</h4>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            className="w-full border rounded p-3 mt-2"
            placeholderText="Select Date"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 lg:mt-0">
          <h4 className="text-gray-700">Pick a Time:</h4>
          <DatePicker
            selected={selectedTime}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeFormat="h:mm aa"
            minTime={new Date(businessHours.start)}
            maxTime={new Date(businessHours.end)}
            className="w-full border rounded p-3 mt-2"
            placeholderText="Select Time"
            disabled={!selectedDate}
          />
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="mt-5 p-3 border rounded bg-gray-100">
          <h4 className="text-gray-700 font-semibold">You Selected:</h4>
          <p className="mt-1">
            📅 <strong>Date:</strong> {selectedDate.toDateString()}
          </p>
          <p>
            ⏰ <strong>Time:</strong>{" "}
            {selectedTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default DateAndTime;

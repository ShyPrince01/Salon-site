import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { userInfoAtom } from "../../utils/atoms"; // Import Jotai atom

const YourInformation = () => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const handleChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h3 className="font-semibold">
        Your Information <span className="text-red-700">*</span>
      </h3>
      <div className="mt-5 flex flex-col gap-5">
        <input
          type="text"
          name="Name"
          value={userInfo.Name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border rounded p-3"
        />
        <input
          type="email"
          name="Email"
          value={userInfo.Email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border rounded p-3"
        />
        <input
          type="tel"
          name="PhoneNumber"
          value={userInfo.PhoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full border rounded p-3"
        />
      </div>
    </div>
  );
};

export default YourInformation;

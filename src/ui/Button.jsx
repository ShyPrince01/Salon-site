import React from "react";
import { Link } from "react-router-dom";

const Button = ({ destination, text }) => {
  return (
    <Link
      to={destination}
      className="rounded bg-[#FCCAB8] px-5 py-3 lg:text-lg font-semibold"
    >
      {text}
    </Link>
  );
};

export default Button;

// Button.js
import React from "react";

const Button = ({
  onClick,
  label = "Click here",
  disabled = false,
  className = "",
}) => {
  return (
    // mt-3 md:mt-4
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`w-full h-[50px] flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition duration-200 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

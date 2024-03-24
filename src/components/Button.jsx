// Button.js
import React from "react";

const Button = ({
  onClick,
  label = "Click here",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-[56px] flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition duration-200 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

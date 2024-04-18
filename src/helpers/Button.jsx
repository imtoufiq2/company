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
      className={` flex h-[50px] w-full items-center justify-center rounded-md text-lg font-medium leading-[30px] tracking-[-0.3] transition duration-200 ease-in-out ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

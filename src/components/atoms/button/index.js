import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  onClick,
  label = "Click here",
  disabled = false,
  className = "",
}) => {
  const classes = twMerge(
    `w-full h-12 flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition duration-200 ease-in-out active:scale-[0.99]`,
    className
 );
  return (
    // mt-3 md:mt-4
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={classes}
    >
      {label}
    </button>
  );
};

export default Button;

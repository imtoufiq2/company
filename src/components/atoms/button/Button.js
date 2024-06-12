import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  onClick,
  label = "Click here",
  disabled = false,
  className = "",
  children,
  newStructure = false,
}) => {
  // Use twMerge to merge and deduplicate classes
  const classes = twMerge(
    `w-full h-[50px]  flex justify-center items-center  text-lg leading-[30px] tracking-[-0.3] rounded-md transition-all duration-200 ease-in-out `,
    className,
  );

  // Conditional rendering based on newStructure prop
  if (newStructure) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type=""
        className={`flex w-full max-w-[162px] items-center gap-1 rounded-md bg-[#F2FFF5] px-3 py-[6px] transition-all duration-200 ease-in-out active:scale-[0.99] sm:px-[20px] sm:py-[10px] ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
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

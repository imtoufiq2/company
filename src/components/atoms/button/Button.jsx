
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
  `w-full h-[50px] flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition-all duration-200 ease-in-out `,
  className
);

 // Conditional rendering based on newStructure prop
 if (newStructure) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        type="submit"
        className={`flex w-full bg-[#F2FFF5] px-3 py-[6px] sm:px-[20px] sm:py-[10px] rounded-md gap-1 items-center max-w-[162px] active:scale-[0.99] transition-all ease-in-out duration-200 ${className}`}
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

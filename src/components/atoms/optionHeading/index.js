import React from "react";
import { twMerge } from "tailwind-merge";

const OptionHeading = ({ text, className }) => {
  const classes = twMerge(
    `semi-bold-text text-sm leading-5 tracking-[-0.2px] text-[#1B1B1B]`,
    className,
  );
  return <h4 className={classes}>{text}</h4>;
};

export default OptionHeading;

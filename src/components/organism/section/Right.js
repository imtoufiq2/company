import React from "react";
import { twMerge } from "tailwind-merge";

const RightSection = ({ className, children }) => {
  const classes = twMerge(`w-full  text-white ${className}`);
  return <div className={classes}>{children}</div>;
};

export default RightSection;

import React from "react";
import { twMerge } from "tailwind-merge";

const LeftSection = ({ className, children }) => {
  const classes = twMerge(
    `w-full text-white flex flex-col justify-between gap-11 ${className}`,
  );
  return <div className={classes}>{children}</div>;
};

export default LeftSection;

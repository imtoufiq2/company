import React from "react";
import { twMerge } from "tailwind-merge";

const ActionSection  = ({ children, className, id }) => {
  const classes = twMerge(
    ` w-full rounded-xl text-white  p-6 gap-3`,
    className,
  );
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
};

export default ActionSection;

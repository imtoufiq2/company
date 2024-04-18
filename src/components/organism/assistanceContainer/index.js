import React from "react";
import { twMerge } from "tailwind-merge";

const AssistanceContainer = ({ children, className }) => {
  const classes = twMerge(
    `my-4 w-[90%] md:w-[75%]  mx-auto flex  gap-4 max-w-[1008px]`,
    className,
  );
  return <div className={classes}>{children}</div>;
};

export default AssistanceContainer;

import React from "react";
import { twMerge } from "tailwind-merge";

const AssistanceContainer = ({ children, className ,isDetails}) => {
  console.warn("isDetails", isDetails);
  const classes = twMerge(
    `my-4 w-[90%] md:w-[75%]  mx-auto flex  gap-4 max-w-[1008px] ${isDetails && "md:w-[100%] mx-0 md:pr-0" }`,
    className,
  );
  return <div id="AssistanceContainer" className={classes}>{children}</div>;
};

export default AssistanceContainer;

import React from "react";
import { twMerge } from "tailwind-merge";

const ListItem = ({ content, isHighlighted, className }) => {
  const classes = twMerge(
    `cursor-pointer whitespace-nowrap text-start bold-text  ${
      isHighlighted
        ? "text-[16px] font-bold opacity-100"
        : "text-sm font-normal opacity-80 regular-text"
    } leading-7 tracking-[-0.3px]`,
    className,
  );
  return <li className={classes}>{content}</li>;
};

export default ListItem;

import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextDisplay = ({ id, className, text, elementType = 'div' ,onClick}) => {
  const Element = elementType; // Dynamically determine the element type based on props
  const classes = twMerge(
    `medium-text text-[16px] leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit`,
    className
  );

  return (
    <Element id={id} className={classes} onClick={onClick && onClick}>
      {text}
    </Element>
  );
};

export default TextDisplay;


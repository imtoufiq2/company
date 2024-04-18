import React from 'react';
import { twMerge } from 'tailwind-merge';

const TextDisplay = ({ id, className, text, elementType = 'div' }) => {
  const Element = elementType; // Dynamically determine the element type based on props
  const classes = twMerge(
    `font-medium text-[16px] leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit`,
    className
  );

  return (
    <Element id={id} className={classes}>
      {text}
    </Element>
  );
};

export default TextDisplay;



import React from 'react';
import { twMerge } from 'tailwind-merge';

const Heading = ({ text, type = 'h1', className }) => {
  const TagName = type; 
  const classes = twMerge(
    ` leading-[1.875rem] sm:leading-8 tracking-[-0.3px] sm:tracking-[-0.5px]`,
    className
 );
  return (
    <TagName  className={classes}> 
      {text}
    </TagName>
  );
};

export default Heading;

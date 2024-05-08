
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Heading = ({ text, type = 'h1', className }) => {
  const TagName = type; 
  const classes = twMerge(
    `bold-text leading-[1.875rem] sm:leading-8 tracking-[-0.3] sm:tracking-[-0.5]`,
    className
 );
  return (
    <TagName  className={classes}> 
      {text}
    </TagName>
  );
};

export default Heading;

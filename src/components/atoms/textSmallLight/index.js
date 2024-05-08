import React from 'react'
import { twMerge } from 'tailwind-merge';

const TextSmallLight = ({text , className}) => {
    const classes = twMerge(
        ` text-xs leading-5 tracking-[-0.2] text-[#5E718D]`,
        className
      );
  return (
    <p className={classes}>{text}</p>
  )
}

export default TextSmallLight
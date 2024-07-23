import React from "react";
import { RotatingLines } from "react-loader-spinner";
const TextLoader = ({ header }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[8px]">
      {/* <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
        {header}
          </p> */}
      <h2
        id="_heading"
        className="text-lg font-[700] leading-8 tracking-[-0.3px] text-[#5e718d]"
      >
        {header}
      </h2>
      <RotatingLines
        visible={true}
        height="40"
        width="40"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default TextLoader;

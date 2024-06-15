import React from "react";

const OptionHeader = ({ title, subTitle }) => {
  return (
    <div id="_header" className="flex flex-col gap-2">
      <h3 className="bold-text text-2xl leading-7 md:leading-6 tracking-[-0.5] text-[#1B1B1B] md:text-xl  md:tracking-[-0.3]">
        {title}
      </h3>
      <p className="regular-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
        {subTitle}
      </p>
    </div>
  );
};

export default OptionHeader;

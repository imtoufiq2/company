import React from "react";

const OptionHeader = ({ title, subTitle }) => {
  return (
    <div id="_header" className="flex flex-col gap-2">
      <h3 className="bold-text text-2xl leading-7 md:leading-6 tracking-[-0.5px] text-[#1B1B1B] md:text-xl  md:tracking-[-0.3px]">
        {title}
      </h3>
      <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D] hidden">
        {subTitle}
      </p>
    </div>
  );
};

export default OptionHeader;

import React from "react";
import { heroData } from "../../../constants/staticData";

const WhyInvestWithAltcase = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-7">
      <h3 className="bold-text text-xl leading-8 tracking-[-0.3px] text-[#1B1B1B] md:text-2xl md:leading-8 md:tracking-[-0.5px] ">
        Why people ❤️ love to invest with Altcase?
      </h3>
      <div id="_image" className="flex items-center justify-between gap-[22px]">
        {heroData?.map((invest) => {
          return (
            <div className="flex flex-col gap-1">
              <img
                src={invest?.img}
                alt={invest?.title}
                className="mx-auto max-h-[72px] max-w-[72px] md:min-h-20 md:min-w-20"
              />
              <h4 className="medium-text  text-center text-xs leading-5 tracking-[-0.2px] text-[#1B1B1B] md:text-sm md:leading-6">
                {invest?.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyInvestWithAltcase;

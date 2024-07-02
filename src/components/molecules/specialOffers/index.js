import React from "react";

const SpecialOffers = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border-[0.5px] border-[#95E5A9] bg-[#F2FFF5] px-5 py-4 md:gap-2 md:-mt-10 md:-mb-[43px] -mt-3 ">
      <div id="_first" className="flex items-center gap-4">
        <img
          id="_left"
          src="/images/WomenBenefitIcon.svg"
          alt="SeniorCitizen"
        />
        <h4
          id="_right"
          className="regular-text text-xs leading-5 tracking-[-0.2] text-[#21B546] md:text-sm md:leading-6"
        >
          Additional 0.10%* p.a. for Women
        </h4>
      </div>
      <div id="_second" className="flex items-center gap-4">
        <img
          id="_left"
          src="/images/SeniorCitizenBenefitIcon.svg"
          alt="SeniorCitizen"
        />
        <h4
          id="_right"
          className="regular-text text-xs leading-5 tracking-[-0.2] text-[#21B546] md:text-sm md:leading-6"
        >
          Additional 0.50%* p.a. for Senior Citizens
        </h4>
      </div>
    </div>
  );
};

export default SpecialOffers;

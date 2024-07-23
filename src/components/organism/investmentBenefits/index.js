import React from "react";
import Image from "../../atoms/Image";

const InvestmentBenefits = ({ data }) => {
  return (
    <div className="min-h-[112px] min-w-[92px]  flex-1 text-black  md:min-h-[124px] md:min-w-fit">
      <Image
        src={data?.img}
        alt={data?.title}
        className="m-auto max-h-[72px] max-w-[72px] md:min-h-[80px] md:min-w-[80px]"
      />
      <p className="medium-text text-center text-xs text-[#1B1B1B] leading-5 tracking-[-0.2px] md:text-sm md:leading-6 ">
        {data?.title}
      </p>
    </div>
  );
};

export default InvestmentBenefits;

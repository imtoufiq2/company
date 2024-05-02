import React from "react";
import Image from "../../atoms/Image";

const InvestmentBenefits = ({ data }) => {
  return (
    <div className="min-h-[112px] min-w-[92px]  flex-1 text-black  md:min-h-[124px] md:min-w-fit">
      <Image
        src={data?.img}
        alt={data?.title}
        className="m-auto h-[72px] w-[72px] md:h-[80px] md:w-[80px]"
      />
      <p className="medium-text text-center text-[12px] font-medium leading-5 tracking-[-0.2] md:text-sm md:leading-6 lg:text-[15px]">
        {data?.title}
      </p>
    </div>
  );
};

export default InvestmentBenefits;

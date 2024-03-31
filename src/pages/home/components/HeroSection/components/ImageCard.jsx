import React from "react";

const ImageCard = () => {
  return (
    // md:min-w-[152px]
    <div className="min-w-[92px] md:min-w-fit  min-h-[112px] md:min-h-[124px]  flex-1 ">
      <img
        src="/images/InvestInAnyBank.svg"
        alt=""
        className="w-[72px] h-[72px] md:w-[80px] md:h-[80px] m-auto"
      />
      <p className="font-medium text-[12px] md:text-sm leading-5 md:leading-6 tracking-[-0.2] text-center ">
        Invest in any <span className="block">bank’s FD</span>
      </p>
    </div>
  );
};

export default ImageCard;

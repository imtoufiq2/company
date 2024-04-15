
import React from "react";

const Card = ({ details }) => {
  return (
    <div className="flex-1 min-h-[116px] min-w-[92px] md:min-w-[110px] lg:min-w-[140px] lg:min-h-[176px] flex flex-col gap-1 lg:gap-3 w-full">
      <div
        id="image"
        className="bg-white border-[0.5px] min-h-[92px] rounded-xl flex justify-center items-center md:h-[109px] md:min-w-[110px] lg:min-w-[140px] flex-1"
      >
        <img src={details?.imgUrl} alt={details?.titile} />
      </div>
      <div
        id="content"
        className="text-[12px] sm:text-sm leading-5 sm:leading-6 tracking-[-0.2] font-medium text-[#1B1B1B] text-center whitespace-nowrap"
      >
        {details?.titile}
      </div>
    </div>
  );
};

export default Card;

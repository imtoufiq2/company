import React from "react";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";

const InvestmentOptionsCard = ({ details }) => {
  return (
    <div className="flex min-h-[116px] w-full min-w-[92px] flex-1 flex-col gap-2 md:min-w-[110px] lg:min-h-[176px] lg:min-w-[140px] lg:gap-3">
      <div
        id="image"
        className="flex min-h-[92px] flex-1 items-center justify-center rounded-xl border-[0.5px] bg-white md:h-[109px] md:min-w-[110px] lg:min-w-[140px] md:max-h-[140px]"
      >
        <Image src={details?.imgUrl} className="max-h-[72px]" alt={details?.titile} />
      </div>

      <TextDisplay
        id="content"
        className="medium-text w-full whitespace-nowrap text-center text-[12px]  leading-5 tracking-[-0.2] text-[#1B1B1B] sm:text-sm sm:leading-6 "
        text={details?.titile}
        elementType="div"
      />
    </div>
  );
};

export default InvestmentOptionsCard;

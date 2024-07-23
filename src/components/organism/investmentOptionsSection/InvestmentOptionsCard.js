import React from "react";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import { useNavigate } from "react-router-dom";

const InvestmentOptionsCard = ({ details }) => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[116px] w-full min-w-[92px] flex-1 cursor-pointer flex-col gap-2 md:min-w-[110px] lg:min-h-[176px] lg:min-w-[140px] lg:gap-3">
      <div
        id="image"
        onClick={() => navigate(`${details?.url}`)}
        className="flex min-h-[92px] flex-1 items-center justify-between gap-5 rounded-xl border-[0.5px] border-[#D7DFE9] bg-white px-5 md:h-[109px] md:max-h-[140px] md:min-w-[110px] lg:min-w-[140px]"
      >
        <Image
          src={details?.imgUrl}
          className="max-h-[72px]"
          alt={details?.titile}
        />
        <h5 className="semi-bold-text hidden flex-1 text-lg tracking-[-0.3px] text-[#1B1B1B] md:block">
          {details?.titile}
        </h5>
      </div>

      <TextDisplay
        id="content"
        className="medium-text w-full whitespace-nowrap text-center text-[12px]  leading-5 tracking-[-0.2px] text-[#1B1B1B] sm:text-sm sm:leading-6  md:hidden"
        text={details?.titile}
        elementType="div"
      />
    </div>
  );
};

export default InvestmentOptionsCard;

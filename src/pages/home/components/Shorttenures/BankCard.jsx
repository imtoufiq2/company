import React from "react";

const BankCard = ({ curBank }) => {
 
  return (
    <div
      style={{ backgroundColor: curBank?.app_bg_colour }}
      // max-w-[240px]
      className="bg-[#FFF5E4] p-5 flex flex-col gap-3  rounded-xl md:min-h-[276px] justify-between w-full "
    >
      <div id="bankinfo" className="flex flex-col gap-1">
        <div
          id="imageBox "
          className="w-11 h-11 sm:w-[60px] sm:h-[60px]  border-[0.5px] bg-[#FFFFFF] rounded-lg p-2"
        >
          <img
            src={curBank?.logo_url}
            alt={curBank?.issuer_name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="font-semibold sm:font-bold  text-sm text-[18px] leading-6 tracking-[-0.2] sm:tracking-[-0.2] text-[#1B1B1B]">
          {curBank?.fd_name}
        </p>
      </div>
      <div id="returnInfo">
        <p className="text-[#5E718D] font-normal text-[12px] leading-5 tracking-[-0.2]">
          {curBank?.min_days ? `${curBank.min_days} days return` :""}
        </p>
        <h3 className="font-bold text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
        {curBank?.rate_of_interest ? `${curBank.rate_of_interest}%` : ""}

        </h3>
      </div>
      <button className="px-3 py-[6px] min-w-24 max-w-[60%] bg-[#1B1B1B] rounded-md text-sm leading-6 font-medium tracking-[-0.2] text-white active:scale-[0.99] transition-all ease-in-out duration-200">
        Invest Now
      </button>
    </div>
  );
};

export default BankCard;

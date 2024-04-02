import React from "react";

const BankCard = () => {
  return (
    <div className="bg-[#FFF5E4] p-5 flex flex-col gap-3  rounded-xl md:min-h-[276px] justify-between">
      <div id="bankinfo">
        <div
          id="imageBox "
          className="w-11 h-11 sm:w-[60px] sm:h-[60px]  border-[0.5px] bg-[#FFFFFF] rounded-lg p-2"
        >
          <img
            src="/images/bankLogo.svg"
            alt="bank logo"
            className="w-full h-full"
          />
        </div>
        <p className="font-semibold sm:font-bold  text-sm text-[18px] leading-6 tracking-[-0.2] sm:tracking-[-0.2] text-[#1B1B1B]">
          Bajaj Finserv
        </p>
      </div>
      <div id="returnInfo">
        <p className="text-[#5E718D] font-normal text-[12px] leading-5 tracking-[-0.2]">
          1 yr return
        </p>
        <h3 className="font-bold text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
          9.10%
        </h3>
      </div>
      <button className="px-3 py-[6px] min-w-24 max-w-[60%] bg-[#1B1B1B] rounded-md text-sm leading-6 font-medium tracking-[-0.2] text-white">
        Invest Now
      </button>
    </div>
  );
};

export default BankCard;
import React from "react";

const ReferEarn = () => {
  return (
    <div className="my-4 w-[90%] md:w-[75%] mx-auto flex  gap-4  rounded-xl bg-[#048746] p-5 sm:p-7 items-center min-h-fit max-w-[1008px]">
      <div
        id="left"
        className="flex flex-col w-[100%] sm:w[60%] justify-between gap-8 sm:gap-3 "
      >
        <h2 className="font-bold text-[18px] sm:text-2xl leading-[30px] sm:leading-8 tracking-[-0.3] sm:tracking-[-0.5] text-white">
        Refer your friend and earn rewards
        </h2>
        <p className="hidden sm:block text-[#C2F2CE] text-sm font-normal leading-6 tracking-[-0.2] max-w-[509px]">
        Share your referral link with your friends to invite them to Altcase and earn rewards when they invest.
        </p>

        {/* <div
          id="button"
          className="hidden sm:flex text-white flex-col gap-2 lg:flex-row "
        >
          <button className="text-[16px] leading-7 tracking-[-0.3] flex items-center gap-2">
            <img src="/images/PhoneCallWhite.svg" alt="call box" />
            <span>Call at +91 9876 543210</span>
          </button>
          <button className="text-[16px] leading-7 tracking-[-0.3] flex items-center gap-2">
            <img src="/images/Envelope.svg" alt="mail box" />
            <span>Email at consult@altcase.com</span>
          </button>
        </div> */}
        <button className="flex w-full bg-[#F2FFF5] px-3 py-[6px] sm:px-[20px] sm:py-[10px] rounded-md gap-1 items-center  max-w-[162px] ">
          <img src="/images/UserPlus.svg" alt="Talk to our expert" />{" "}
          <span className="text-sm font-medium leading-6 tracking-[-0.2] text-[#21B546]">
            Refer a friend
          </span>
        </button>
      </div>

      <div id="right" className="w-[56%] sm:w[60%]">
        <img src="/images/OBJECTS.svg" alt="" className="hidden sm:block" />
        <img src="/images/referAndEarnIcon.svg" alt="" className="sm:hidden" />
      </div>
    </div>
  );
};

export default ReferEarn;

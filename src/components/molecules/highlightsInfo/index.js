import React from "react";

const HighlightsInfo = ({ text1, text2 }) => {
  return (
    <div id="_third" className="flex flex-col gap-2">
      <p className="semi-bold-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
        Important Highlights
      </p>
      <p className="flex items-start  gap-2">
        <img src="/images/tick-icon.svg" alt="" />
        <span className="regular-text text-sm leading-6 tracking-[-0.2px]">
          {text1 ? text1 : "Withdraw your money anytime after 7 days"}
        </span>
      </p>
      <p className="flex items-start gap-2">
        <img src="/images/tick-icon.svg" alt="" />
        <span className="regular-text text-sm leading-6 tracking-[-0.2px]">
          {text2 ? text2 : "Getting additional "}
          <span className="semi-bold-text text-[#1B1B1B]">
            {text2 ? "" : "0.5% Sr. Citizen Interest"}
          </span>
        </span>
      </p>
    </div>
  );
};

export default HighlightsInfo;

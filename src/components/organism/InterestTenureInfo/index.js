
import React from "react";
import { formatIndianNumber } from "../../../utils/commonUtils";

const InterestTenureInfo = ({ isPortfolio, curVal }) => {
  return (
    <div className="flex items-center justify-between">
      <div id="_first" className="flex flex-col items-start gap-2">
        <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-7">
          {isPortfolio ? "Current Value" : "Interest Rate"}
        </p>
        <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#21B546] md:text-lg md:leading-[30px]">
         
          {isPortfolio
            ? curVal?.fd_current_value &&
              formatIndianNumber(curVal?.fd_current_value)
            : curVal?.rate_of_interest
              ? `${curVal.rate_of_interest}% p.a.`
              : "-"}
        </h6>
      </div>
      <div
        id="_second"
        className="flex flex-col gap-2 md:min-h-[66px] md:justify-between"
      >
        <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
          Tenure
        </p>
        <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
          {/* 1 year */}
          {/* {curVal?.tenure && curVal.tenure} */}
          {isPortfolio
            ? curVal?.tenure && curVal.tenure
            : curVal?.tenure && curVal.tenure}
        </h6>
      </div>
      <div
        id="_third"
        className="flex flex-col items-end gap-2 md:min-h-[66px] md:justify-between"
      >
        <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
          {isPortfolio ? "Interest Earned" : "Interest on 1 Lac"}
        </p>
        <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
         

        ₹{isPortfolio
  ? formatIndianNumber(curVal?.fd_interest_earned || "")
  : formatIndianNumber(curVal?.interest_amount_1l || 0)}

        </h6>
      </div>
    </div>
  );
};

export default InterestTenureInfo;

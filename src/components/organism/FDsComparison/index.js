import React from "react";
import BarChart from "../../molecules/BarChart";
import { cleanFdName } from "../../../utils/commonUtils";

const FDsComparison = ({cardApiResponse}) => {

  return (
    <div className=" mx-auto flex w-full max-w-[1008px] flex-col justify-between gap-5 text-[#1B1B1B]  md:gap-5">
      <h3 className="bold-text text-xl leading-6 tracking-[-0.3px] md:mb-2 ">
        🔎 FDs Comparison
      </h3>
      <div id="_graph">
        {/* <BarChart {...cardApiResponse}/> */}
        <BarChart cardApiResponse={cardApiResponse}/>
      </div>
      <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
        💡 {cardApiResponse?.fd_name ? cleanFdName(cardApiResponse?.fd_name):""} gives higher returns as compared to SBI and
        HDFC
      </p>
    </div>
  );
};

export default FDsComparison;

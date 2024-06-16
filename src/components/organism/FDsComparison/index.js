import React from "react";
import BarChart from "../../molecules/BarChart";


const FDsComparison = () => {
  return (
    <div
     
      className=" mx-auto flex w-full max-w-[1008px] flex-col justify-between gap-5 text-[#1B1B1B]  md:gap-5"
    >
      <h3 className="bold-text text-xl leading-6 tracking-[-0.3] md:mb-2 ">
        🔎 FDs Comparison
      </h3>
      <div id="_graph">
       <BarChart />
      </div>
      <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
        💡 State Bank of India gives higher returns as compared to HDFC and
        Savings A/C
      </p>
    </div>
  );
};

export default FDsComparison;

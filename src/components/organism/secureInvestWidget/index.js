import React, { useEffect, useState } from "react";
import BankInvestmentWidget from "../bankInvestmentWidget";
import BankInvestmentOverview from "../bankInvestmentWidget/BankInvestmentOverview";

const SecureInvestWidget = () => {
 
  
 
  return (
    <div
      id="mainParent"
      className="m-auto max-w-[1280px] rounded-[32px]  lg:mt-[40px] lg:bg-[#E8FFED] lg:py-[60px]  lg:pb-0 lg:mb-20"
    >
      <div
        id="parent"
        className="mx-auto mb-[10px]   flex w-full max-w-[1008px] flex-col lg:w-[75%] lg:flex-row lg:gap-2 xl:w-full"
      >
        <BankInvestmentOverview />
        <BankInvestmentWidget
        
        />
      </div>
    </div>
  );
};

export default SecureInvestWidget;

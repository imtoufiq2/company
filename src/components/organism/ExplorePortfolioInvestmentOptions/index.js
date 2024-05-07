import React from "react";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
import InterestTenureInfo from "../InterestTenureInfo";
import AddToCompareButton from "../AddToCompareButton";

const ExplorePortfolioInvestmentOptions = () => {
  const arr = [1, 2];
  return (
    <div id="_second_box" className="flex flex-col gap-[19px] md:gap-[33px]">
      <InvestSectionHeaderWithIcon
        headerText={"Your Fixed Deposits (2)"}
        icon="/images/chartPieIcon.svg"
        imageClass="w-[0.84rem] h-[0.84rem]"
        // textClass=""
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
        {arr?.map((curval) => {
          return (
            <div
              // style={{ border: "1px dotted" }}
              className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
            >
              <PopularFixedBankHeader />
              <InterestTenureInfo isPortfolio />
              <AddToCompareButton
                isPortfolio
                leftVal="8.35% IRR"
                handleCheckBoxClick={() => {}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePortfolioInvestmentOptions;

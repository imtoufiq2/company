import InvestmentOptionsSection from "../investmentOptionsSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import { investmentOptions } from "../../../constants/staticData";

const ExploreInvestmentOptions = () => {
  return (
    <div className=" mx-auto  -mt-1 flex w-[90%] max-w-[1008px] flex-col justify-between gap-3 md:mt-0 md:w-[75%] md:gap-7 ">
      <div className="flex items-center justify-between">
        <InvestSectionHeaderWithIcon
          headerText={"Explore Investment Options"}
        />
        {/* <div id="_img" className="flex items-center gap-2">
          <button className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-in-out active:scale-[0.97] md:h-[42px] md:w-[42px]">
            <img src="/images/ArrowsDownUp.svg" alt="ArrowsDownUp" />
          </button>
          <button className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-in-out active:scale-[0.97] md:h-[42px] md:w-[42px]">
            <img src="/images/Container.svg" alt="Container" />
          </button>
        </div> */}
      </div>
      <InvestmentOptionsSection investmentOptions={investmentOptions} />
    </div>
  );
};

export default ExploreInvestmentOptions;

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
      </div>
      <InvestmentOptionsSection investmentOptions={investmentOptions} />
    </div>
  );
};

export default ExploreInvestmentOptions;

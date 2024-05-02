import InvestmentOptionsSection from "../investmentOptionsSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import { investmentOptions } from "../../../constants/staticData";

const ExploreInvestmentOptions = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-4 md:w-[75%] md:gap-7 ">
      <InvestSectionHeaderWithIcon headerText={"Explore Investment Options"} />
      <InvestmentOptionsSection investmentOptions={investmentOptions} />
    </div>
  );
};

export default ExploreInvestmentOptions;

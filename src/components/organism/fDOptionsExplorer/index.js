import { investmentOptions } from "../../../constants/staticData";
import FDActionSection from "../../molecules/FDActionSection";
import InvestmentOptionsSection from "../investmentOptionsSection";

const FDOptionsExplorer = () => {
  return (
    <div className=" mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between -mt-10 md:mt-0 gap-5 md:w-[75%] md:gap-12 ">
      <div id="topContent">


      <h2 className="medium-text text-xl leading-8 tracking-[-0.3px] text-[#1B1B1B] md:text-4xl  md:leading-[44px]  md:tracking-[-1px] hidden md:block  ">
        <span className="text-[#21B546] bold-text">Discover FDs</span>{" "}
        <span className="md:medium-text">based on your </span>
        <span className="block md:medium-text"> requirements</span>
        </h2>

        <h2 className="text-xl bold-text leading-8 tracking-[-0.3px] text-[#1B1B1B] md:text-4xl  md:leading-[44px]  md:tracking-[-1px]  md:hidden max-h-[3.75rem]">
          <span className="text-[#21B546]">Discover FDs</span>{" "}
          <span className="md:medium-text">based on your </span>
          <span className="block md:medium-text"> requirements</span>
        </h2>
      </div>

      <InvestmentOptionsSection investmentOptions={investmentOptions} />
     <FDActionSection/>
      
    </div>
  );
};

export default FDOptionsExplorer;

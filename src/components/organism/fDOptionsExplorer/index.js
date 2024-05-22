import { investmentOptions } from "../../../constants/staticData";
import FDActionSection from "../../molecules/FDActionSection";
import InvestmentOptionsSection from "../investmentOptionsSection";

const FDOptionsExplorer = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-4 md:w-[75%] md:gap-10 ">
      <div id="topContent">
        <h2 className="text-xl bold-text leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl  md:leading-[44px]  md:tracking-[-1]">
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

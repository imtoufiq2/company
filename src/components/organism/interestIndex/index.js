import { useSelector } from "react-redux";
import InvestmentCard from "../investmentCard";

const InterestIndex = () => {
  const { error, showCaseData } = useSelector((state) => state?.dashBoardPage);

  return (
    <div className=" mx-auto   flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[75%]  md:gap-10">
      <div id="top" className=" ">
        <h2 className="bold-text md:medium-text max-h-[60px] text-xl  leading-8  tracking-[-0.3] text-[#1B1B1B] md:hidden  md:text-4xl md:leading-[44px] md:tracking-[-1]">
          Short tenures,{" "}
          <span className="block text-custom-green sm:inline-block ">
            high interest rate
          </span>
        </h2>

        <h2 className="medium-text hidden text-xl  leading-8  tracking-[-0.3] text-[#1B1B1B] md:block  md:text-4xl md:leading-[44px] md:tracking-[-1]">
          Short tenures,{" "}
          <span className="bold-text block text-custom-green sm:inline-block">
            high interest rate
          </span>
        </h2>
      </div>
      {!error && showCaseData?.length > 0 ? (
        // <div
        //   id="bottom"
        //   className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
        // >
        <div
          id="bottom"
          className={`lg:flex-row-4 example grid grid-cols-2 gap-3 overscroll-contain py-1 lg:flex lg:gap-4 lg:overflow-x-scroll`}
          // className="flex flex-row gap-4 overflow-auto example"
        >
          {showCaseData?.map((curBank, index) => {
            return <InvestmentCard key={index} curBank={curBank} />;
          })}
        </div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default InterestIndex;

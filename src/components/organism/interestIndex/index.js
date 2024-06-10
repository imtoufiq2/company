import { useSelector } from "react-redux";
import InvestmentCard from "../investmentCard";

const InterestIndex = () => {
  const { error, showCaseData } = useSelector((state) => state?.dashBoardPage);

  return (
    <div className=" mx-auto   flex w-[90%] max-w-[1008px] flex-col gap-5  md:w-[75%]">
      <div id="top" className=" my-4   ">
        <h2 className="bold-text md:medium-text text-xl leading-8  tracking-[-0.3]  text-[#1B1B1B] md:text-4xl md:leading-[44px]  md:tracking-[-1]">
          Short tenures,{" "}
          <span className="block text-custom-green sm:inline-block ">
            high interest rate
          </span>
        </h2>
      </div>
      {!error && showCaseData?.length > 0 ? (
        <div
          id="bottom"
          className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4"
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

import { useMemo } from "react";
import { useSelector } from "react-redux";

import PopularFixedDepositsCard from "../PopularFixedDepositsCard";

import FDActionSection from "../../molecules/FDActionSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import EmptyState from "../emptyState";
import SomethingWentWrong from "../something-went-wrong";
import Loader from "../loader";

const PopularFixedDepositsSection = ({
  setCompareData,
  compareData,
  handleCompareData,
}) => {
  const { fetchInvestData, error } = useSelector((state) => state.investPage);

  const firstHalf = useMemo(
    () => fetchInvestData?.slice(0, 4),
    [fetchInvestData],
  );
  const secondHalf = useMemo(
    () => fetchInvestData?.slice(4),
    [fetchInvestData],
  );

  return (
    <>
      {!error && fetchInvestData?.length > 0 ? (
        <div className=" mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-8  ">
          <InvestSectionHeaderWithIcon headerText={"Popular Fixed Deposits"} />

          {error ? (
            <SomethingWentWrong />
          ) : !fetchInvestData ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 gap-3 md:gap-8 lg:grid-cols-2">
              {firstHalf?.map((curVal, index) => (
                <PopularFixedDepositsCard
                  key={index}
                  curVal={curVal}
                  setCompareData={setCompareData}
                  handleCompareData={handleCompareData}
                  compareData={compareData}
                />
              ))}
            </div>
          )}
          <div>
            <FDActionSection />
          </div>
          {secondHalf?.length > 0 && (
            <div className="grid grid-cols-1 gap-3 md:gap-8 lg:grid-cols-2">
              {secondHalf?.map((curVal, index) => (
                <PopularFixedDepositsCard
                  key={index}
                  curVal={curVal}
                  setCompareData={setCompareData}
                  handleCompareData={handleCompareData}
                  compareData={compareData}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PopularFixedDepositsSection;

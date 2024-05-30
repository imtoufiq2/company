import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import PopularFixedDepositsCard from "../PopularFixedDepositsCard";

import FDActionSection from "../../molecules/FDActionSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";

const PopularFixedDepositsSection = () => {
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
        <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-[33px]  ">
          <InvestSectionHeaderWithIcon headerText={"Popular Fixed Deposits"} />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
            {firstHalf?.map((curVal, index) => (
              <PopularFixedDepositsCard key={index} curVal={curVal} />
            ))}
          </div>
          <div>
            <FDActionSection />
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
            {secondHalf?.map((curVal, index) => (
              <PopularFixedDepositsCard key={index} curVal={curVal} />
            ))}
          </div>
        </div>
      ) : (
        <div>No data found</div>
      )}
    </>
  );
};

export default PopularFixedDepositsSection;

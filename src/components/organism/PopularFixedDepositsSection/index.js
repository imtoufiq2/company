import { useMemo } from "react";
import { useSelector } from "react-redux";

import PopularFixedDepositsCard from "../PopularFixedDepositsCard";
import FDActionSection from "../../molecules/FDActionSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";

import EmptyState from "../emptyState";
import Loader from "../loader";
import SomethingWentWrong from "../something-went-wrong";

const PopularFixedDepositsSection = ({
  setCompareData,
  compareData,
  handleCompareData,
}) => {
  const {
    ApplicationLoader: { loading },
    investPage: { fetchInvestData, fetchIssuersDataError },
  } = useSelector((state) => state);

  const firstHalf = useMemo(
    () => fetchInvestData?.slice(0, 4),
    [fetchInvestData],
  );
  const secondHalf = useMemo(
    () => fetchInvestData?.slice(4),
    [fetchInvestData],
  );

  if (loading) {
    return <Loader />;
  }

  if (fetchIssuersDataError) {
    return (
      <div className="mx-auto flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-8">
        <InvestSectionHeaderWithIcon headerText="Popular Fixed Deposits" />
        <SomethingWentWrong />
      </div>
    );
  }

  if (!fetchInvestData?.length) {
    return (
      <div className="mx-auto flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-8">
        <InvestSectionHeaderWithIcon headerText="Popular Fixed Deposits" />
        <EmptyState />
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-8">
      <InvestSectionHeaderWithIcon headerText="Popular Fixed Deposits" />
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
      <div>
        <FDActionSection />
      </div>
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
    </div>
  );
};

export default PopularFixedDepositsSection;

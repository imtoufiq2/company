import BankInvestmentWidget from "../bankInvestmentWidget";
import BankInvestmentOverview from "../bankInvestmentWidget/BankInvestmentOverview";
import { useSelector } from "react-redux";

const SecureInvestWidget = () => {
  const { error, bannerData } = useSelector((state) => state?.dashBoardPage);

  return (
    <>
      {!error && bannerData?.length > 0 ? (
        <div
          id="mainParent"
          className="m-auto max-w-[1072px] rounded-[32px]  lg:mb-20 lg:mt-[40px] lg:bg-[#E8FFED]  lg:py-[60px] lg:pb-0"
        >
          <div
            id="parent"
            className="mx-auto mb-[10px]   flex w-full max-w-[1008px] flex-col lg:w-[75%] lg:flex-row lg:gap-2 xl:w-full "
          >
            <BankInvestmentOverview apiData={bannerData?.[0]} />
            <BankInvestmentWidget apiData={bannerData?.[0]} />
          </div>
        </div>
      ) : (
        <div>No data found</div>
      )}
    </>
  );
};

export default SecureInvestWidget;

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
          className="1024:mb-20 1024:mt-[40px] 1024:h-[440px] 1024:bg-[#E8FFED] 1024:px-[45px] 1024:py-[45px] 1024:pb-0 1280:mb-20 1280:mt-[40px] 1280:h-[440px] 1280:bg-[#E8FFED] 1280:px-[45px] 1280:py-[45px] 1280:pb-0 m-auto  max-w-[1072px] rounded-[32px] border border-[#C2F2CE]"
        >
          <div
            id="parent"
            className="1024:flex-row 1024:gap-2   1280:flex-row 1280:gap-2 mx-auto mb-[10px] flex w-full max-w-[1008px] flex-col xl:w-full"
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

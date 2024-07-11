// atoms
import Heading from "../../atoms/headingContent/Heading";
//molecules
import { getData, getLocalStorageData } from "../../../utils/Crypto";
//organisms
import ReferralCard from "../../organism/referralCard";
import FooterSection from "../../organism/footerSection";
import TotalPortfolioValue from "../../organism/TotalPortfolioValue";
import ExplorePortfolioInvestmentOptions from "../../organism/ExplorePortfolioInvestmentOptions";
import Avatar from "../../molecules/Avatar/index";
import { useCallback, useEffect } from "react";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio } from "../../../redux/actions/portfolio";
import useScrollToTop from "../../../customHooks/useScrollToTop";

const Portfolio = () => {
  const { error, portfolioData } = useSelector((state) => state?.portfolioPage);
  const userInfo = getLocalStorageData("uInfo");

  const digilocker = JSON.parse(
    sessionStorage.getItem("getKycVerificationInfo"),
  );
  const ckyc = JSON.parse(sessionStorage.getItem("panVerificationInfo"));

  // Destructure FDInvestmentSummary and InvestorInvestment directly if portfolioData exists
  const { FDInvestmentSummary, InvestorInvestment } = portfolioData ?? {};

  const dispatch = useDispatch();
  const fetchPortfolioData = useCallback(() => {
    // const data = { investor_id: 113 };
    const data = { investor_id: Number(getData("userData")?.investor_id) };
    fetchWithWait({ dispatch, action: fetchPortfolio(data) });
  }, [dispatch]);
  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  //auto scroll
  useScrollToTop();
  return (
    <>
      <div id="_banner" className="flex h-[224px] bg-[#15362B] ">
        <div className="relative top-[22%] mx-auto flex w-[90%] max-w-[1008px] justify-between gap-2 md:w-[75%]">
          <Heading
            text="Portfolio"
            type="h3"
            className="bold-text text-[1.75rem] leading-9 tracking-[-0.5px] text-white md:text-5xl md:leading-[56px]  md:tracking-[-1.75px]"
          />
          <div className="md:hidden">
            <Avatar
              className="h-10 w-10"
              profileCompleted={userInfo?.profile_completion_score}
              imgUrl={
                userInfo?.image_base64
                  ? userInfo?.image_base64
                  : digilocker?.image_base64
                    ? digilocker?.image_base64
                    : ckyc?.image_base64
                      ? ckyc?.image_base64
                      : ""
              }
            />
          </div>
        </div>
      </div>{" "}
      {!error > 0 ? (
        <div className="mx-auto   mb-5 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
          <div
            id="_transform_box"
            className=" -mb-20 flex -translate-y-20 flex-col gap-5   md:mb-11 md:-translate-y-24 lg:mb-7 lg:gap-10"
          >
            <TotalPortfolioValue FDInvestmentSummary={FDInvestmentSummary} />
            <ExplorePortfolioInvestmentOptions
              InvestorInvestment={InvestorInvestment}
            />
            <ReferralCard isModify />
          </div>
        </div>
      ) : (
        <div>No data found</div>
      )}
      <FooterSection isModify className="-mt-16" />{" "}
    </>
  );
};

export default Portfolio;

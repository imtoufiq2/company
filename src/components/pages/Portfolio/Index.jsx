// atoms
import Heading from "../../atoms/headingContent/Heading";
//molecules

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

const Portfolio = () => {
  const { error, portfolioData } = useSelector((state) => state?.portfolioPage);

  // Destructure FDInvestmentSummary and InvestorInvestment directly if portfolioData exists
  const { FDInvestmentSummary, InvestorInvestment } = portfolioData ?? {};

  // console.log("InvestorInvestment", InvestorInvestment);
  const dispatch = useDispatch();
  const fetchPortfolioData = useCallback(() => {
    const data = { investor_id: 113 };
    fetchWithWait({ dispatch, action: fetchPortfolio(data) });
  }, [dispatch]);
  useEffect(() => {
    fetchPortfolioData();
  }, [fetchPortfolioData]);

  return (
    <>
      <div id="_banner" className="flex h-[224px] bg-[#15362B] ">
        <div className="relative top-[22%] mx-auto flex w-[90%] max-w-[1008px] justify-between gap-2 md:w-[75%]">
          <Heading
            // ` leading-[1.875rem] sm:leading-8 tracking-[-0.3] sm:tracking-[-0.5]`,
            text="Portfolio"
            type="h3"
            className="bold-text text-[1.75rem] leading-9 tracking-[-0.5] text-white md:text-5xl md:leading-[56px]  md:tracking-[-1.75px]"
          />
          <div className="md:hidden">
            <Avatar className="h-10 w-10" profileCompleted={60} />
          </div>
        </div>
      </div>{" "}
      {!error > 0 ? (
        <div className="mx-auto  mb-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
          <div
            id="_transform_box"
            // className="840:mb-[-15%] mb-[-20%] flex translate-y-[-12%] flex-col gap-5 sm:mb-[-14%] md:mb-[-20%] lg:mb-[-10%] xl:mb-[-6%]"
            className="-mb-20 flex -translate-y-20 flex-col gap-5 md:-mb-[75px] md:-translate-y-24 lg:-mb-[55px]"
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

// atoms
import Heading from "../../atoms/headingContent/Heading";
//molecules

//organisms
import ReferralCard from "../../organism/referralCard";
import FooterSection from "../../organism/footerSection";
import TotalPortfolioValue from "../../organism/TotalPortfolioValue";
import ExplorePortfolioInvestmentOptions from "../../organism/ExplorePortfolioInvestmentOptions";
import Avatar from "../../molecules/Avatar/index";

const Portfolio = () => {
  return (
    <>
      <div id="_banner" className="flex h-[224px] bg-[#15362B] ">
        <div className="relative top-[22%] mx-auto flex w-[90%] max-w-[1008px] justify-between gap-2 md:w-[75%]">
          <Heading
            text="Portfolio"
            type="h3"
            className="text-[1.75rem] leading-9 tracking-[-0.5] text-white"
          />
          <div className="md:hidden">
            <Avatar className="h-10 w-10" profileCompleted={60} />
          </div>
        </div>
      </div>

      <div className="mx-auto  mb-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
        <div
          id="_transform_box"
          // className="840:mb-[-15%] mb-[-20%] flex translate-y-[-12%] flex-col gap-5 sm:mb-[-14%] md:mb-[-20%] lg:mb-[-10%] xl:mb-[-6%]"
          className="flex -translate-y-3 flex-col gap-5 "
        >
          <TotalPortfolioValue />
          <ExplorePortfolioInvestmentOptions />
          <ReferralCard isModify />
        </div>
      </div>
      <FooterSection isModify className="-mt-16" />
    </>
  );
};

export default Portfolio;

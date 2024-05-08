// atoms
import Heading from "../../atoms/headingContent/Heading";
//molecules
import Avatar2 from "../../molecules/Avatar/index";
//organisms
import ReferralCard from "../../organism/referralCard";
import FooterSection from "../../organism/footerSection";
import TotalPortfolioValue from "../../organism/TotalPortfolioValue";
import ExplorePortfolioInvestmentOptions from "../../organism/ExplorePortfolioInvestmentOptions";

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
            <Avatar2 />
          </div>
        </div>
      </div>

      <div className="mx-auto  mb-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
        <div
          id="_transform_box"
          className="flex translate-y-[-10%] flex-col gap-5"
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

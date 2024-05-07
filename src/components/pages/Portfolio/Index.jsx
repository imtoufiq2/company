import ExplorePortfolioInvestmentOptions from "../../organism/ExplorePortfolioInvestmentOptions";
import Avatar2 from "../../molecules/Avatar/index";
import TotalPortfolioValue from "../../organism/TotalPortfolioValue";
import FooterSection from "../../organism/footerSection";
import ReferralCard from "../../organism/referralCard";

const Portfolio = () => {
  return (
    <div className="">
      {/* this is the banner for this page */}
      <div id="_banner" className="flex h-[224px] bg-[#15362B] ">
        <div className="relative top-[22%] mx-auto flex w-[90%] max-w-[1008px] justify-between gap-2 md:w-[75%]">
          <h3 className="bold-text  text-[1.75rem] leading-9 tracking-[-0.5] text-white  ">
            Portfolio
          </h3>
          {/* add profile here */}
          <div className="md:hidden">
            <Avatar2 />
          </div>
        </div>
      </div>

      <div className="mx-auto  mb-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] ">
        {/* this is the first box total Portfolio value box */}
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
    </div>
  );
};

export default Portfolio;

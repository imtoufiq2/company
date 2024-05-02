import InvestmentHeader from "../../molecules/InvestmentHeader";
import ExploreInvestmentOptions from "../../organism/ExploreInvestmentOptions";
import PopularFixedDepositsSection from "../../organism/PopularFixedDepositsSection";
import PartnerBank from "../../organism/PartnerBank";
import FooterSection from "../../organism/footerSection";

const Invest = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-10">
        <InvestmentHeader />
        <ExploreInvestmentOptions />
        <PopularFixedDepositsSection />
        <PartnerBank />
      </div>
      <FooterSection />
    </>
  );
};

export default Invest;

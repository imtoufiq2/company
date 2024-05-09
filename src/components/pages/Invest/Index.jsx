import InvestmentHeader from "../../molecules/InvestmentHeader";
import ExploreInvestmentOptions from "../../organism/ExploreInvestmentOptions";
import PopularFixedDepositsSection from "../../organism/PopularFixedDepositsSection";
import PartnerBank from "../../organism/PartnerBank";
import FooterSection from "../../organism/footerSection";
import AlertBox from "../../molecules/alertBox";
import { useState } from "react";

const Invest = () => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <>
      {showAlert && <AlertBox setShowAlert={setShowAlert} />}

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

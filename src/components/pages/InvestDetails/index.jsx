import React from "react";
import FooterSection from "../../organism/footerSection";
import SafetyTrustInfo from "../../molecules/SafetyTrustInfo";
import InvestmentBenefits from "../../molecules/InvestmentBenefits";

const InvestDetails = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-10">
        {/* inside main div */}
        <div className="w-full">
          <SafetyTrustInfo />
          <InvestmentBenefits />
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default InvestDetails;

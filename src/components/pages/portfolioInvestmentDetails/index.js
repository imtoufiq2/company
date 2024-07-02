import { useEffect, useState } from "react";
//organisms
import ConfirmWithdrawal from "../../organism/confirmWithdrawal";
import InvestmentDetails from "../../organism/investmentDetails";
import WithdrawFunds from "../../organism/withdrawFunds";

const PortfolioInvestmentDetails = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

 


  return (
    <>
   
    <InvestmentDetails/>
      {/* {currentComponent === "INVESTMENT_DETAILS" && (
        <InvestmentDetails hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === "WITHDRAW_FUNDS" && (
        <WithdrawFunds
          hanldeClickNext={hanldeClickNext}
          hanldeClickPrevious={hanldeClickPrevious}
          ClickNext={ClickNext}
          ClickPrevious={ClickPrevious}
          currentPromt={currentPromt}
        />
      )}
      {currentComponent === "CONFIRM_WITHDRAW" && <ConfirmWithdrawal />} */}
    </>
  );
};

export default PortfolioInvestmentDetails;

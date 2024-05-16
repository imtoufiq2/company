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

  const [currentComponent, setCurrentComponent] =
    useState("INVESTMENT_DETAILS");

  const hanldeClickNext = (params) => {
     if (params === "WITHDRAW_FUNDS") {
      setCurrentComponent("WITHDRAW_FUNDS");
    } else if (params === "CONFIRM_WITHDRAW") {
      setCurrentComponent("CONFIRM_WITHDRAW");
    }
  };
  const hanldeClickPrevious = (params) => {
    console.log("WITHDRAW_FUNDS", "WITHDRAW_FUNDS")
    if (params === "WITHDRAW_FUNDS") {
      setCurrentComponent("INVESTMENT_DETAILS");
      console.log("helo")
    } 
  };
  const [currentPromt, setCurrentPromt] = useState("EARLY_WITHDRAWAL_WARNING");

  const ClickNext = (param) => {
    console.warn("clickss",param );
    if (param === "WITHDRAWAL_REASON_SELECTION") {
      setCurrentComponent("WITHDRAWAL_REASON_SELECTION");
    } 
    // else if (param === "CONFIRM_WITHDRAW") {
    //   setCurrentComponent("CONFIRM_WITHDRAW");
    // }
    // if (!(currentPromt >= 2)) {
    //   setCurrentPromt(currentPromt + 1);
    // } else {
    //   setCurrentPromt(0);
    // }
  };
  const ClickPrevious = () => {
    // if (!(currentPromt <= 0)) {
    //   setCurrentPromt(currentPromt - 1);
    // } else {
    //   setCurrentPromt(0);
    // }
  };
  return (
    <>
      {currentComponent === "INVESTMENT_DETAILS" && (
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
      {currentComponent === "CONFIRM_WITHDRAW" && <ConfirmWithdrawal />}
    </>
  );
};

export default PortfolioInvestmentDetails;

import { useEffect, useState } from "react";
//organisms
import ConfirmWithdrawal from "../../organism/confirmWithdrawal";
import InvestmentDetails from "../../organism/investmentDetails";
import WithdrawFunds from "../../organism/withdrawFunds";

const PortfolioInvestmentDetails = () => {
  //this is to set the complete page body color.
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [currentComponent, setCurrentComponent] =
    useState("INVESTMENT_DETAILS");
    console.log("currentComponent",currentComponent)

    const hanldeClickNext = (params) => {
      switch (params) {
        case "WITHDRAW_FUNDS":
          setCurrentComponent("WITHDRAW_FUNDS");
          break;
        case "WITHDRAWAL_REASON_SELECTION":
        case "CONFIRM_WITHDRAW":
          setCurrentComponent("CONFIRM_WITHDRAW");
          break;
        default:
          console.warn("Unhandled parameter:", params);
      }
    };
    
  const hanldeClickPrevious = (params) => {
    console.log("WITHDRAW_FUNDS", "WITHDRAW_FUNDS")
    if (params === "INVESTMENT_DETAILS") {
      setCurrentComponent("INVESTMENT_DETAILS");
      console.log("helo")
    } 
  };
  const [currentPromt, setCurrentPromt] = useState("");

  const ClickNext = (param) => {
    console.warn("clickss",param );
    if (param === "WITHDRAWAL_WARNING" || param === "WITHDRAWAL_REASON") {
      setCurrentPromt(param);
    } 
    else{
      setCurrentPromt("")
    }
  
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

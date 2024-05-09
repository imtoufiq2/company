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

  const [currentComponent, setCurrentComponent] = useState(0);

  const hanldeClickNext = () => {
    if (!(currentComponent >= 2)) {
      setCurrentComponent(currentComponent + 1);
    }
  };
  const hanldeClickPrevious = () => {
    if (!(currentComponent <= 0)) {
      setCurrentComponent(currentComponent - 1);
    }
  };
  const [currentPromt, setCurrentPromt] = useState(0);

  const ClickNext = () => {
    console.warn("click" , currentPromt)
    if (!(currentPromt >= 2)) {
      setCurrentPromt(currentPromt + 1);
    }
    else{
      setCurrentPromt(0)
    }
  };
  const ClickPrevious = () => {
    if (!(currentPromt <= 0)) {
      setCurrentPromt(currentPromt - 1);
    }else{
      setCurrentPromt(0)
    }
  };
  return (
    <>
      {currentComponent === 0 && (
        <InvestmentDetails hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === 1 && (
        <WithdrawFunds
          hanldeClickNext={hanldeClickNext}
          hanldeClickPrevious={hanldeClickPrevious}
          ClickNext={ClickNext}
          ClickPrevious={ClickPrevious}
          currentPromt={currentPromt}
        
        />
      )}
      {currentComponent === 2 && <ConfirmWithdrawal />}
    </>
  );
};

export default PortfolioInvestmentDetails;

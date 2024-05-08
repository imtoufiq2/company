import { useEffect } from "react";
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
    <div>
      <ConfirmWithdrawal />
      <hr style={{ border: "2px solid red" }} />
      <InvestmentDetails />
      <hr style={{ border: "2px solid red" }} />
      <WithdrawFunds />
    </div>
  );
};

export default PortfolioInvestmentDetails;

import InvestmentHeader from "../../molecules/InvestmentHeader";
import ExploreInvestmentOptions from "../../organism/ExploreInvestmentOptions";
import PopularFixedDepositsSection from "../../organism/PopularFixedDepositsSection";
import PartnerBank from "../../organism/PartnerBank";
import FooterSection from "../../organism/footerSection";
import AlertBox from "../../molecules/alertBox";
import { useCallback, useEffect, useState } from "react";
import CompareReturns from "../../organism/compareReturns";
import { getData } from "../../../utils/Crypto";
import { useDispatch } from "react-redux";
import { fetchWithWait } from "../../../utils/method";
import { fetchInvest, fetchIssuers } from "../../../redux/actions/invest";

const Invest = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(true);
  const [showPopUp, setShowPopUp] = useState(true);

  //auto scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fetchInvestData = useCallback(() => {
    const data = {
      count: 10,
      display_location: "FDList",
      fd_id: 0,
      investor_id: getData("userData")?.investor_id,
      payout_method_id: "C",
      tag: "string",
      tag_id: 2,
    };
    fetchWithWait({ dispatch, action: fetchInvest(data) });
  }, [dispatch]);

  const fetchIssuersata = useCallback(() => {
    const data = {
      count: 0,
      issuer_id: 0,
    };
    fetchWithWait({ dispatch, action: fetchIssuers(data) });
  }, [dispatch]);

  useEffect(() => {
    fetchInvestData();
  }, [fetchInvestData]);
  useEffect(() => {
    fetchIssuersata();
  }, [fetchIssuersata]);
  return (
    <>
      {/* {showAlert && <AlertBox setShowAlert={setShowAlert} />} */}
      {/* {showPopUp && <CompareReturns setShowPopUp={setShowPopUp} />} */}
      <div className="md:pt8 flex flex-col items-center justify-center gap-10 pb-10 pt-5 md:pb-20">
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

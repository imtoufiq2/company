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
  const [showPopUp, setShowPopUp] = useState(false);
  const [compareData, setCompareData] = useState([]);
  //hanlde add and remove compare data .
  const handleCompareData = (curVal) => {
    console.log("handleCompareData", curVal);
    const isExist = compareData.find((cur) => cur?.fd_id === curVal?.fd_id);
    setShowAlert(true);
    if (isExist) {
      setCompareData(compareData.filter((cur) => cur?.fd_id !== curVal?.fd_id));
    } else {
      setCompareData([...compareData, curVal]);
    }
  };

  console.log("compareDatacompareData", compareData);
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
      {showAlert && compareData?.length > 0 && (
        <AlertBox
          setShowAlert={setShowAlert}
          compareData={compareData}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      )}
      {showPopUp && (
        <CompareReturns setShowPopUp={setShowPopUp} compareData={compareData} />
      )}
      <div className="md:pt8 flex flex-col items-center justify-center gap-10 pb-10 pt-5 md:pb-20">
        <InvestmentHeader />
        <ExploreInvestmentOptions />
        <PopularFixedDepositsSection
          compareData={compareData}
          setCompareData={setCompareData}
          handleCompareData={handleCompareData}
        />
        <PartnerBank />
      </div>
      <FooterSection />
    </>
  );
};

export default Invest;

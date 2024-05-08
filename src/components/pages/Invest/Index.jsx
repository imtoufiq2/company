import InvestmentHeader from "../../molecules/InvestmentHeader";
import ExploreInvestmentOptions from "../../organism/ExploreInvestmentOptions";
import PopularFixedDepositsSection from "../../organism/PopularFixedDepositsSection";
import PartnerBank from "../../organism/PartnerBank";
import FooterSection from "../../organism/footerSection";
import { useEffect, useState } from "react";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch, useSelector } from "react-redux";
import { investFdDetails } from "../../../redux/actions/InvestApi";
import { dummyData } from "./sample";

const Invest = () => {
  const [investFdDetailsValue, setInvestFdDetailsValue] = useState({
    values: {
      TopAvailableFds: [],
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    let data = {
      count: 1,
      display_location: "FDList",
      investor_id: 1,
      payout_method_id: "C",
      tag_id: 1,
    };
    fetchWithWait({ dispatch, action: investFdDetails(data) })
      .then((response) => {
        let getInvestFdDetails = response.data;
        console.log("Res->", getInvestFdDetails);
        const mappedFDs = getInvestFdDetails.map((item) => {
          return item;
        });
        console.log("mapvals-->", mappedFDs);
        setInvestFdDetailsValue((prevState) => ({
          ...prevState,
          values: {
            ...prevState.values,
            TopAvailableFds: mappedFDs,
          },
        }));

        // const newVals = getInvestFdDetails.map((value, index) => {
        //   console.log("valuea123", value);
        // });
        // if (getInvestFdDetails.length !== "") {
        // alert("inside");
        // debugger;
        // const toArray = [getInvestFdDetails.data];
        // console.log("checkArr-->", toArray[0]);
        // const firstSixFds = toArray.slice(0, 6);
        // console.log("firstSixArr-->", firstSixFds);
        // const firstSixFds =
        //   getInvestFdDetails && getInvestFdDetails.length >= 6
        //     ? getInvestFdDetails.slice(0, 6)
        //     : [];
        // console.log("AvailableFDS", firstSixFds);

        // const filteredData = firstSixFds.filter((items) => {
        //   return items;
        // });
        // console.log("filteredItems-->", filteredData);

        // const mapVals = getInvestFdDetails.map((value, idx) => {
        //   console.log("mapvals-->", value);
        // });
      })
      .catch((err) => {
        console.log("Err-->", err);
      })
      .finally((something) => {});
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-10">
        <InvestmentHeader />
        <ExploreInvestmentOptions />
        <PopularFixedDepositsSection
          TopAvailableFds={investFdDetailsValue.values.TopAvailableFds}
        />
        <PartnerBank />
      </div>
      <FooterSection />
    </>
  );
};

export default Invest;

import React, { useEffect, useState } from "react";
import BankInvestmentWidget from "../bankInvestmentWidget";
import BankInvestmentOverview from "../bankInvestmentWidget/BankInvestmentOverview";
import axios from "axios";
import { getData } from "../../../utils/Crypto";

const SecureInvestWidget = () => {
  const [apiData , setApiData]=useState({})
 
  const handleBanner = async (e) => {

    try {
      const {data} = await axios.post("https://altcaseinvestor.we3.in/api/v2/products/getfd", {
        count: 1,
        display_location: "FDList",
        investor_id:  getData("userData")?.investor_id,
        payout_method_id: "C",
        tag_id: 1
      });
      setApiData(data?.data[0])
      // Handle success
    } catch (error) {
      console.error("Error:", error);

    }
  };
 useEffect(()=>{
  handleBanner()
 },[])
//  const handleBanner = async (e) => {
//   const data = {
//     count: 1,
//     display_location: "FDList",
//     investor_id: getData("userData")?.investor_id,
//     payout_method_id: "C",
//     tag_id: 1,
//   };
//   try {
//     fetchWithWait({ dispatch, action: fetchBanner(data) })
//       .then((response) => {
//         // Your code handling the response
//         console.log("rs===dashboadrd uuuuuuuuuuuuu", response);
//       })
//       .catch((error) => {
//         // Handle any errors that occur in the fetch or in the then block
//         console.error(error);
//       });
//   } catch (error) {
//     // Handle any synchronous errors that occur outside of the fetch call
//     console.error(error);
//   }
// };
// useEffect(() => {
//   handleBanner();
// }, []); 
  return (
    <div
      id="mainParent"
      className="m-auto max-w-[1280px] rounded-[32px]  lg:mt-[40px] lg:bg-[#E8FFED] lg:py-[60px]  lg:pb-0 lg:mb-20"
    >
      <div
        id="parent"
        className="mx-auto mb-[10px]   flex w-full max-w-[1008px] flex-col lg:w-[75%] lg:flex-row lg:gap-2 xl:w-full"
      >
        <BankInvestmentOverview apiData={apiData}/>
        <BankInvestmentWidget apiData={apiData}
        
        />
      </div>
    </div>
  );
};

export default SecureInvestWidget;

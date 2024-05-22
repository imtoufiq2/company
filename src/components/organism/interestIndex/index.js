import { useDispatch, useSelector } from "react-redux";
import { bankIntrestInfo } from "../../../constants/staticData";
import InvestmentCard from "../investmentCard";
import { getData } from "../../../utils/Crypto";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetchBanner, fetchShowCase } from "../../../redux/actions/dashboard";
import { fetchWithWait } from "../../../utils/method";

const InterestIndex = () => {
  const dispatch=useDispatch()
  const showCaseData=useSelector((state)=>state)
  console.log("showCaseData" , showCaseData)
  // const { data } = useSelector((state) => console.log("state", state.BankPage));
  // console.log(data);

  //Using Traditional Redux
  const bankPageValues = useSelector((state) => state.BankPage);
  
  const [apiData , setApiData]=useState(null)
 
  const handleBanner = async (e) => {

    try {
      const {data} = await axios.post("https://altcaseinvestor.we3.in/api/v1/products/getfd", {
     
        count: 4,
        display_location: "FDList",
        investor_id:getData("userData")?.investor_id,
        payout_method_id: "C",
        tag_id:4
      });
     
      setApiData(data?.data)
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  // const handleBanner = async (e) => {
  //   const data = {
  //           count: 4,
  //       display_location: "FDList",
  //       investor_id:getData("userData")?.investor_id,
  //       payout_method_id: "C",
  //       tag_id:4
  //   };
  //   try {
  //     fetchWithWait({ dispatch, action: fetchShowCase(data) })
  //       .then((response) => {
  //         // Your code handling the response
  //         console.log("response of get fetchShowCase", response);
  //       })
  //       // .catch((error) => {
  //       //   console.error(error);
  //       // });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 useEffect(()=>{
  handleBanner()
 },[])
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col gap-5  md:w-[75%]">
      <div id="top" className=" my-4   ">
        <h2 className="text-xl bold-text md:medium-text leading-8  tracking-[-0.3]  text-[#1B1B1B] md:text-4xl md:leading-[44px]  md:tracking-[-1]">
          Short tenures,{" "}
          <span className="block text-custom-green sm:inline-block ">
            high interest rate
          </span>
        </h2>
      </div>
      <div
        id="bottom"
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {apiData?.map((curBank, index) => {
          return <InvestmentCard key={index} curBank={curBank} />;
        })}
      </div>
    </div>
  );
};

export default InterestIndex;

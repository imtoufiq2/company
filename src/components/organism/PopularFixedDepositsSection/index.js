import PopularFixedDepositsCard from "../PopularFixedDepositsCard";
import FDActionSection from "../../molecules/FDActionSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { getData } from "../../../utils/Crypto";

const PopularFixedDepositsSection = () => {
  const [apiData, setApiData] = useState(null);

  const hanldeGetData = async (e) => {
    try {
      const { data } = await axios.post(
        "https://altcaseinvestor.we3.in/api/v1/products/getfd",
        {
          count: 10,
          display_location: "FDList",
          fd_id: 0,
          investor_id: getData("userData")?.investor_id,
          payout_method_id: "C",
          tag: "string",
          tag_id: 2,
        },
      );

      setApiData(data?.data);
    
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  useEffect(() => {
    hanldeGetData();
  }, []);
  const firstHalf = apiData?.slice(0, 4);
  const secondHalf = apiData?.slice(4);

  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-[33px]  ">
      <InvestSectionHeaderWithIcon headerText={"Popular Fixed Deposits"} />
      {/* ========= show the card====== */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
        {firstHalf?.map((curVal, index) => (
          <PopularFixedDepositsCard key={index} curVal={curVal} />
        ))}
      </div>
      <div>
        <FDActionSection />
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
        {secondHalf?.map((curVal, index) => (
          <PopularFixedDepositsCard key={index} curVal={curVal} />
        ))}
      </div>

      {/* {
        apiData?.length>6 &&  <button className="mx-auto flex max-w-fit items-center gap-2 rounded-md border px-3 py-[6px] md:px-5 md:py-[10px]">
        <Image
         src="/images/reload-icon.svg"
         alt="reload-icon"
         className="h-[12.38px] w-[12.95px]"
        />
      
        <span className="medium-text whitespace-nowrap text-sm leading-6 tracking-[-0.2] text-[#21B546]">
          Show More
        </span>
      </button>
      } */}
    </div>
  );
};

export default PopularFixedDepositsSection;

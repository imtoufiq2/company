import React, { useCallback, useEffect, useState } from "react";
import Heading from "../../atoms/headingContent/Heading";
import PortfolioInfoText from "../../atoms/PortfolioInfoText";
import EarnedTodayMessage from "../../atoms/earnedTodayMessage";
import HighlightsInfo from "../../molecules/highlightsInfo";
import Button from "../../atoms/button/Button";
import { portfolioData } from "../../../constants/staticData";
import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { useParams } from "react-router-dom";
import { formatNumberIndian } from "../../../utils/commonUtils";
const InvestmentDetails = ({ hanldeClickNext }) => {
  const [getData , setGetData]=useState(null)
  // const [portfolioData , setPortfolioData]=
  const sessionStorageData = JSON.parse(
    sessionStorage.getItem("portfolioFixedDeposit"),
  );
  const { id } = useParams();

  const getonefdportfolio = useCallback(async () => {
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/invest/getonefdportfolio`,
        { fd_investment_id: +id },
      );
      setGetData(response?.data?.data?.[0])
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(()=>{
    getonefdportfolio()
  },[getonefdportfolio])


const handleLoop =useCallback(()=>{

},[])
useEffect(()=>{
  handleLoop()
},[handleLoop])

  return (
    // <div className="mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[65%] md:gap-7 lg:w-[50%]  ">
    <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-5 md:px-0  sm:max-w-[592px] sm:px-0 md:gap-7">
      <div id="_header">
        <h3 className="bold-text text-xl leading-8 tracking-[-0.3]">
          FD Details
        </h3>
        <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
          Check the details of your investment
        </p>
      </div>
      <div
        id="_second_one_box"
        className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white py-5"
      >
        <div id="_top" className="flex flex-col gap-5 px-5">
          <div id="_first" className="flex items-center gap-3">
            <img
              src={sessionStorageData?.logo_url}
              alt="bankLogo"
              className="h-10 w-10 object-contain"
            />
            <div id="_logo_right">
              <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
                {sessionStorageData?.fd_name}
              </h3>
              <p className="regular-text text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]">
                Application No.: 238388383999277378
              </p>
            </div>
          </div>
          <div id="_second" className="flex items-center justify-between">
            <div id="_second_left">
              <PortfolioInfoText
                text="Total Investment"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <Heading
                text={`₹ ${getData?.investment_amount && formatNumberIndian(getData?.investment_amount)}`}

                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
              />
            </div>
            <div id="_second_right">
              <PortfolioInfoText
                text="Interest Rate"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <h3 className="semi-bold-text text-base  leading-7 tracking-[-0.3] text-[#21B546] text-end">
              {getData?.rate_of_interest}
                <span className="text-[12px] leading-5 tracking-[-0.2]">
                  p.a.
                </span>
              </h3>
            </div>
          </div>
          <div id="_third" className="flex items-center justify-between">
            <div id="_third_left">
              <PortfolioInfoText
                text="Tenure"
                className=" text-[12px] leading-5 text-slate-500"
              />
              <Heading
                 text={`${getData?.tenure} yrs`}
                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#1B1B1B]"
              />
            </div>
            <div id="_third_right">
              <PortfolioInfoText
                text="Interest Till Date"
                className=" text-[12px] leading-5 text-slate-500"
              />

              <Heading
                text={getData?.interest_till_date}
                type="h3"
                className="semi-bold-text text-base  leading-7 text-[#21B546] text-end"
              />
            </div>
          </div>
        </div>
        <EarnedTodayMessage className="rounded-b-none" earned={getData?.today_earning
}/>
        <div id="_fourth" className="flex flex-col gap-3 px-5">
         
              <div className="grid grid-cols-2" k>
                <PortfolioInfoText
                  text={"Interest Payout"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                  text={getData?.fd_payout_method}
                  className={`text-right text-[#1B1B1B] `}
                />
              </div>
              <div className="grid grid-cols-2" k>
                <PortfolioInfoText
                  text={"Maturity Amount"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                 text={getData?.maturity_amount}
                  className={`text-right text-[#1B1B1B]`}
                />
              </div><div className="grid grid-cols-2" >
                <PortfolioInfoText
                  text={"Total Interest Earned"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                 text={getData?.total_interest_earned}
                  className={`text-right text-[#1B1B1B] ${2 === 2 && "text-[#21B546]"}`}
                />
              </div><div className="grid grid-cols-2" >
                <PortfolioInfoText
                  text={"Average Annual Yield"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
               text={getData?.annual_yield}
                  className={`text-right text-[#1B1B1B] `}
                />
              </div><div className="grid grid-cols-2" k>
                <PortfolioInfoText
                  text={"Invested on"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                   text={getData?.created_on}
                  className={`text-right text-[#1B1B1B]}`}
                />
              </div><div className="grid grid-cols-2" k>
                <PortfolioInfoText
                  text={"Maturity on"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                    text={getData?.fd_maturity_date}
                  className={`text-right text-[#1B1B1B] `}
                />
              </div><div className="grid grid-cols-2" k>
                <PortfolioInfoText
                  text={"Maturity Action"}
                  className="text-[12px] leading-5 "
                />
                <PortfolioInfoText
                 text={getData?.maturity_action_name}
                  className={`text-right text-[#1B1B1B] `}
                />
              </div>
       
        </div>

        <h4
          id="_button"

          className=" text-center  semi-bold-text  relative left-[50%] translate-x-[-50%] text-[12px] leading-6 tracking-[-0.2] text-[#21B546]"
        >
          Edit Maturity Action
        </h4>
      </div>

      <div
        id="_box"
        className="flex items-end justify-between rounded-xl border-[0.5px] bg-white p-5"
      >
        <div id="_left" className="flex flex-col gap-5">
          <div id="_top" className="flex flex-col gap-3">
            <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
              Withdraw Funds
            </h3>
            <p className="regular-text text-[12px] leading-5 tracking-[-0.2] text-[#455468]">
              Withdraw your funds with ease in your registered bank account
            </p>
          </div>

          <Button
            label="Withdraw Now"
            className={`medium-text medium-text mt-0  h-fit w-fit bg-custom-green px-3 py-[6px] text-sm leading-6 tracking-[-0.2] text-[#fff]
              md:mt-0 ${false ? "opacity-60" : "opacity-100"}`}
            // onClick={() => hanldeClickNext("WITHDRAW_FUNDS")}
          />
        </div>
        <img src="/images/cash-money.svg" alt="cash" />
      </div>

      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default InvestmentDetails;

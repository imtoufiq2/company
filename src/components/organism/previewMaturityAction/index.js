import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronNormal from "../../../Icons/Chevron-normal";
import { getData } from "../../../utils/Crypto";
import Image from "../../atoms/Image";
import PortfolioInfoText from "../../atoms/PortfolioInfoText";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/headingContent/Heading";
import BankLogo from "../../molecules/bankLogo";
import { endpoints } from "../../../services/endpoints";

const PreviewMaturityAction = () => {
  const navigate = useNavigate();
  const [getDropDown, setGetDropDown] = useState(null);
  const [Order_Summary, setOrder_summary] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [option, setOption] = useState(null);

  const handleGetDropDown = useCallback(async () => {
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/products/getfd",
        `${endpoints?.baseUrl}/products/getfd`,
        {
          display_location: "MaturityActions",
        },
      );

      setGetDropDown(response?.data?.data);
      setOption(response?.data?.data?.[0]?.item_value);
    } catch (error) {
      console.log("err", error);
    }
  }, []);

  const hanldeClickNext = useCallback(
    async (option) => {
      try {
        const response = await axios.post(
          // "https://altcaseinvestor.we3.in/api/v1/invest/startfd",
          `${endpoints?.baseUrl}/invest/startfd`,
          {
            fd_id: +Order_Summary?.fdid,
            fd_payout_method_id: "C",
            investment_amount: String(Order_Summary?.InvestmentAmount),
            investor_id: Number(getData("userData")?.investor_id),
            maturity_action_id: Number(option),
            ifa_id: 1, //for web it is 2 and for mobile it is 1
            interest_rate: String(Order_Summary?.Interest_Rate), //string
            scheme_id: Number(Order_Summary?.scheme_master_id),
            tenure: String(Order_Summary?.tenure), //string
            total_interest_earn: String(Order_Summary?.Total_Interest_Earned), //string
            is_senior_citizen: Order_Summary?.isSeniorCitizen ? 1 : 0, //send 0 or 1
            maturity_date: String(
              Order_Summary?.CalculateFdResponse?.maturity_date,
            ), //string
            maturity_amount: String(Order_Summary?.maturity_amount), //string
            mkyc_status: getData("userData")?.mkycstatus ?? "",
          },
        );
        sessionStorage.setItem(
          "global_Order_Summary",
          JSON.stringify({
            fd_id: +Order_Summary?.fdid,
            fd_payout_method_id: "C",
            investment_amount: String(Order_Summary?.InvestmentAmount),
            investor_id: Number(getData("userData")?.investor_id),
            maturity_action_id: Number(option),
            ifa_id: 1, //for web it is 2 and for mobile it is 1
            interest_rate: String(Order_Summary?.Interest_Rate), //string
            scheme_id: Number(Order_Summary?.scheme_master_id),
            tenure: String(Order_Summary?.tenure), //string
            total_interest_earn: String(Order_Summary?.Total_Interest_Earned), //string
            is_senior_citizen: Order_Summary?.isSeniorCitizen ? 1 : 0, //send 0 or 1
            maturity_date: String(
              Order_Summary?.CalculateFdResponse?.maturity_date,
            ),
            maturity_amount: String(Order_Summary?.maturity_amount), //string
            mkyc_status: getData("userData")?.mkycstatus ?? "",
          }),
        );

        if (response?.data?.data?.onboarding_status === "CKYC") {
          localStorage.removeItem("fromWhere");
          localStorage.setItem("fromWhere", "preview-maturity-action");
          navigate("/kyc");
        } else if (response?.data?.data?.onboarding_status === "Profile") {
          sessionStorage.setItem(
            "fd_investment_id",
            response?.data?.data?.fd_investment_id,
          );
          navigate("/personal-info");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [
      Order_Summary?.CalculateFdResponse?.maturity_date,
      Order_Summary?.Interest_Rate,
      Order_Summary?.InvestmentAmount,
      Order_Summary?.Total_Interest_Earned,
      Order_Summary?.fdid,
      Order_Summary?.isSeniorCitizen,
      Order_Summary?.maturity_amount,
      Order_Summary?.scheme_master_id,
      Order_Summary?.tenure,
      navigate,
    ],
  );
  console.log("Order_Summary", Order_Summary);
  useEffect(() => {
    handleGetDropDown();
  }, [handleGetDropDown]);

  useEffect(() => {
    setOption(getDropDown?.[0]?.item_id);
  }, [getDropDown]);

  useEffect(() => {
    setOrder_summary(JSON.parse(sessionStorage.getItem("Order_Summary")));
  }, []);
  console.log("apiResponse", apiResponse);
  return (
    <div className="mx-auto flex h-fit max-w-[592px] flex-col gap-5 rounded-md border p-2 md:w-[592px] md:rounded-xl md:p-8">
      <div id="_first">
        <Heading
          text="Order Summary"
          type="h3"
          className="bold-text text-xl leading-8 text-[#1B1B1B]"
        />
        <PortfolioInfoText
          text="Review your investment and choose your action on maturity of your FD

"
        />
      </div>
      <div id="_second" className="flex flex-col rounded-md border ">
        <div
          id="_top"
          className="flex flex-col gap-4 bg-slate-200 p-5 md:gap-5"
        >
          <div id="_icon_with_name" className="flex items-center gap-2">
            <BankLogo
              divClassName="h-[32px]  w-[32px] "
              imageClassName="h-[19.2px] w-[19.2px] lg:h-[19.2px] lg:w-[19.2px] object-contain"
              imageUrl={Order_Summary?.logo_url}
            />
            <Heading
              text={Order_Summary?.issuer_name}
              type="h3"
              className="bold-text text-base leading-7 text-[#1B1B1B]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Investment Amount
              </p>
              <p
                className={`semi-bold-text text-right text-sm leading-6 tracking-[-0.2] `}
              >
                ₹ {Order_Summary?.InvestmentAmount}
              </p>
            </div>
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Tenure Selected
              </p>
              <p
                className={` medium-text  text-right text-sm leading-6 tracking-[-0.2]`}
              >
                {Order_Summary?.tenure.endsWith("Yr")
                  ? Order_Summary?.tenure.replace("Yr", "years")
                  : Order_Summary?.tenure}
              </p>
            </div>
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Interest Rate
              </p>
              <p
                className={` medium-text text-right text-sm leading-6 tracking-[-0.2]`}
              >
                {Order_Summary?.Interest_Rate} p.a.
              </p>
            </div>
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Maturity Amount
              </p>
              <p
                className={` semi-bold-text text-right text-sm leading-6 tracking-[-0.2]`}
              >
                ₹ {Order_Summary?.maturity_amount}
                {}
              </p>
            </div>
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Interest Payout
              </p>
              <p
                className={` medium-text text-right text-sm leading-6 tracking-[-0.2]`}
              >
                {Order_Summary?.payout}
              </p>
            </div>

            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                {Order_Summary?.payout} Amount
              </p>
              <p
                className={` semi-bold-text text-right text-sm leading-6 tracking-[-0.2]`}
              >
                ₹
                {
                  Order_Summary?.CalculateFdResponse?.interestDetails?.[0]?.[
                    Object.keys(
                      Order_Summary?.CalculateFdResponse?.interestDetails?.[0],
                    )[0]
                  ]?.[1]
                }
              </p>
            </div>
            <div id="_first" className="flex items-center justify-between">
              <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Total Interest Earned
              </p>
              <p
                className={` semi-bold-text text-right text-sm leading-6 tracking-[-0.2] text-[#21B546]`}
              >
                ₹{Order_Summary?.Total_Interest_Earned}
              </p>
            </div>
          </div>
        </div>
        <div
          id="_bottom"
          className="flex flex-wrap items-center justify-between gap-3 p-5"
        >
          <div
            id="_left"
            className="semi-bold-text flex items-center  gap-2 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] md:gap-2"
          >
            <span className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
              Choose Maturity Action
            </span>
            <img src="/images/info-icon.svg" alt="info-icon" />
          </div>
          <div id="_right">
            <aside className="relative bg-white">
              <select
                onChange={(e) => setOption(e.target.value)}
                className="medium-text appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer"
              >
                {getDropDown?.map((option) => {
                  return (
                    <option key={option?.item_id} value={option?.item_id}>
                      {option?.item_value}
                    </option>
                  );
                })}
              </select>

              <ChevronNormal />
            </aside>
          </div>
        </div>
      </div>
      {/* // import this components as <HighlightsInfo/> */}
      <div id="_third" className="flex flex-col gap-2">
        <p className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
          Important Highlights
        </p>
        <p className="flex items-start  gap-2">
          <Image src="/images/tick-icon.svg" alt="icon" />

          <PortfolioInfoText
            text="Withdraw your money anytime after 7 days"
            className="text-[#1B1B1B]"
          />
        </p>
        <p className="flex items-start gap-2">
          <img src="/images/tick-icon.svg" alt="" />
          <span className="regular-text text-sm leading-6 tracking-[-0.2]">
            Getting additional{" "}
            <span className="semi-bold-text text-[#1B1B1B]">
              0.5% Sr. Citizen Interest
            </span>
          </span>
        </p>
      </div>
      <Button
        onClick={() => hanldeClickNext(option)}
        label="Make Payment"
        className={`medium-text mx-auto  mb-2 w-fit max-w-[350px] bg-[#21B546] px-5 py-[10px] text-[16px] leading-7 tracking-[-0.3] text-[#fff] duration-300 md:w-[350px]`}
      />{" "}
      <div id="_fifth" className="mx-auto flex items-center gap-2">
        <Image src="/images/secure-icon.svg" alt="icon" />
        <PortfolioInfoText
          text="100% Safe & Secure Payment"
          className="medium-text text-xs leading-5 text-[#8897AE] "
        />
      </div>
    </div>
  );
};

export default PreviewMaturityAction;

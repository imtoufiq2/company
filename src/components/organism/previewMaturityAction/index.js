import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChevronNormal from "../../../Icons/Chevron-normal";
import { getData } from "../../../utils/Crypto";
import { MdOutlineChevronRight } from "react-icons/md";

import Image from "../../atoms/Image";
import PortfolioInfoText from "../../atoms/PortfolioInfoText";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/headingContent/Heading";
import BankLogo from "../../molecules/bankLogo";
import { endpoints } from "../../../services/endpoints";
import LeftArrow from "../../../Icons/LeftArrow";
import Select from "react-select";
import { selectCustomStyle } from "../../../utils/selectCustomStyle";
import SearchEnginePrompt from "../searchEnginePrompt";
import PleaseWaitLoader from "../pleaseWaitLoader";
import { AiOutlineClose } from "react-icons/ai";

const PreviewMaturityAction = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(true);
  const [getDropDown, setGetDropDown] = useState(null);
  const [Order_Summary, setOrder_summary] = useState(null);
  const [option, setOption] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [recommendationApiResponse, setRecommendationApiResponse] =
    useState(null);
  const [avgAnnualYieldValue, setAvgAnnualYieldValue] = useState(null);
  console.log("Order_Summary", Order_Summary?.issuer_name);

  // ============= handle calculate effective yield ========
  // String avgannualyeild(double agginteres, int invstamount, double tenure) {
  //   double yeild = agginteres / (invstamount  tenure)  100;
  //   String finalyeild = yeild.toStringAsFixed(2);
  //   return finalyeild;
  // }

  const selectCustomStyle = {
    control: (provided, state) => ({
      ...provided,
      padding: "2px",
      border: "1.5px solid #AFBACA",
      borderRadius: "6px",
      boxShadow: "none",
      width: "240px",
      "&:hover": {
        borderColor: state.isFocused ? "#AFBACA" : provided.borderColor,
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#21B546" : "white",
      color: state.isSelected ? "white" : provided.color,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? "#21B546" : "#F9FAFB",
        color: state.isSelected && "#fff",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#1B1B1B", // This sets the text color of the selected value
      fontWeight: 600,
      lineHeight: "24px",
      fontSize: "14px",
      letterSpacing: "-0.2px",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      color: "#D7DFE9",
      height: "16px",
      marginTop: "10px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...selectCustomStyle.dropdownIndicator,
      ...provided,
      cursor: "pointer",
      color: "#5E718D",
      "&:hover": {
        color: "#5E718D",
      },
    }),
  };

  const handleGetDropDown = useCallback(async () => {
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/products/getfd",
        `${endpoints?.baseUrl}/products/getfd`,
        {
          display_location: "MaturityActions",
        },
      );

      // setGetDropDown(response?.data?.data);
      setGetDropDown(
        response?.data?.data.map((el) => {
          return { label: el.item_value, value: el.item_id };
        }),
      );

      const firstOption = response?.data?.data.map((el) => {
        return { label: el.item_value, value: el.item_id };
      })[0];
      console.log(firstOption);
      setOption(firstOption);
    } catch (error) {
      console.log("err", error);
    }
  }, []);
  // const handleGetDeclarationCall = useCallback(async () => {
  //   const response = await axios.post(
  //     `${endpoints?.baseUrl}/invest/getdeclarations`,
  //     {
  //       // fd_investment_id: 417,
  //       fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
  //       fd_id: JSON.parse(sessionStorage.getItem("Order_Summary"))?.fdid,
  //       // investor_id: Number(getData("userData")?.investor_id),
  //     },
  //   );
  //   console.log("response", response?.data?.data);
  //   setGetDeclarationApiResponse(response?.data?.data);
  // }, []);

  // useCallback(
  const hanldeClickNexts = useCallback(
    async (option) => {
      const data = {
        fd_id: +Order_Summary?.fdid,
        fd_payout_method_id: "C",
        investment_amount: String(Order_Summary?.InvestmentAmount),
        investor_id: Number(getData("userData")?.investor_id),
        // maturity_action_id: Number(option),
        maturity_action_id: Number(option?.value),
        ifa_id: 1, //for web it is 2 and for mobile it is 1
        interest_rate: String(Order_Summary?.Interest_Rate), //string
        // scheme_id: Number(Order_Summary?.scheme_master_id),
        scheme_id: Number(Order_Summary?.activeRow?.scheme_master_id),
        tenure: String(Order_Summary?.tenure), //string
        total_interest_earn: String(Order_Summary?.Total_Interest_Earned), //string
        is_senior_citizen: Order_Summary?.isSeniorCitizen ? 1 : 0, //send 0 or 1
        maturity_date: String(
          Order_Summary?.CalculateFdResponse?.maturity_date,
        ), //string
        maturity_amount: String(Order_Summary?.maturity_amount), //string
        mkyc_status: getData("userData")?.mkycstatus ?? "",
        // redirection_url: "http://localhost:3000/preview-maturity-action?",
        redirection_url: "https://webdev.altcase.com/preview-maturity-action?",
      };

      try {
        const response = await axios.post(
          `${endpoints?.baseUrl}/invest/startfd`,
          data,
        );

        sessionStorage.setItem(
          "fd_investment_id",
          response?.data?.data?.fd_investment_id,
        );
        debugger;
        sessionStorage.setItem("global_Order_Summary", JSON.stringify(data));
        if (response?.data?.data?.onboarding_status === "MKYC") {
          // console.log("asdfasfasdfas=>", response?.data?.data)
          window.location.href = response?.data?.data?.aadharUrl;
        }

        if (response?.data?.data?.onboarding_status === "CKYC") {
          sessionStorage.removeItem("fromWhere");
          sessionStorage.setItem("fromWhere", "preview-maturity-action");
          navigate("/kyc");
        } else if (response?.data?.data?.onboarding_status === "Profile") {
          // sessionStorage.setItem(
          //   "fd_investment_id",
          //   response?.data?.data?.fd_investment_id,
          // );
          navigate("/personal-info");
        } else if (response?.data?.data?.onboarding_status === "Bank") {
          sessionStorage.removeItem("fromWhere");
          sessionStorage.setItem("fromWhere", "preview-maturity-action");
          navigate("/add-bank-account");
        } else if (response?.data?.data?.onboarding_status === "Nominee") {
          sessionStorage.removeItem("fromWhere");
          sessionStorage.setItem("fromWhere", "preview-maturity-action");
          navigate("/add-nomination");
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

  const handleClickNext = useCallback(
    async (option) => {
      // console.log("Button clicked");

      const isPromptShown = sessionStorage.getItem("isPromptShown") === "1";

      if (isPromptShown) {
        // console.log("API call start");
        // console.log("option:", option);
        await hanldeClickNexts(option);
        sessionStorage.removeItem("isPromptShown");
        setShowPrompt(false);
      } else if (
        recommendationApiResponse &&
        typeof recommendationApiResponse === "object" &&
        Object.keys(recommendationApiResponse).length > 0
      ) {
        console.log("Show the prompt");
        sessionStorage.setItem("isPromptShown", "1");
        setShowPrompt(true);
      } else {
        console.log("API call start");
        console.log("option:", option);
        sessionStorage.removeItem("isPromptShown");
        await hanldeClickNexts(option);
        setShowPrompt(false);
      }
    },
    [hanldeClickNexts, option, recommendationApiResponse],
  );

  useEffect(() => {
    // handleGetDeclarationCall();
    handleGetDropDown();
  }, [handleGetDropDown]);

  useEffect(() => {
    const summary = JSON.parse(sessionStorage.getItem("Order_Summary"));
    console.log(summary);
    setOrder_summary(summary);

    // const payoutAmount =
    //   summary.CalculateFdResponse?.interestDetails?.[0]?.[
    //     Object.keys(Order_Summary?.CalculateFdResponse?.interestDetails?.[0])[0]
    //   ]?.[1];

    // setPayoutAmount(payoutAmount);
  }, []);
  useEffect(() => {
    sessionStorage.removeItem("isPromptShown");
  }, []);

  // =================================
  // =========== recommendation engine ============
  const recommendationEngine = useCallback(async (scheme_master_id) => {
    console.log("asfdasfdasgsg", scheme_master_id);
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/products/recommendscheme`,
        { scheme_master_id: Number(scheme_master_id) },
        // { scheme_master_id: 691 },
      );
      // console.log("safdsadfasdf",response?.data?.data ? [{...response.data.data}] : null);

      setRecommendationApiResponse(
        response?.data?.data ? response.data.data : null,
      );
    } catch (error) {
      console.error("something went wrong", error);
    }
  }, []);

  useEffect(() => {
    if (Order_Summary?.scheme_master_id) {
      recommendationEngine(Order_Summary?.activeRow?.scheme_master_id);
    }
  }, [
    Order_Summary?.activeRow?.scheme_master_id,
    Order_Summary?.scheme_master_id,
    recommendationEngine,
  ]);
  console.log(
    "Order_SummaryOrder_Summary",
    Order_Summary?.activeRow?.scheme_master_id,
  );
  // ============= handle upgrade========
  const handleUpgrade = useCallback(() => {
    console.log("hide the popup");
    setShowPrompt(false);
    let orderSummary = JSON.parse(sessionStorage.getItem("Order_Summary"));

    if (!orderSummary) {
      orderSummary = {};
    }
    orderSummary.tenure = recommendationApiResponse?.min_days;
    orderSummary.Interest_Rate =
      recommendationApiResponse?.rate_of_interest_regular;
    console.log("orderSummary", orderSummary);

    sessionStorage.setItem("Order_Summary", JSON.stringify(orderSummary));
    setOrder_summary(orderSummary);
  }, [
    recommendationApiResponse?.min_days,
    recommendationApiResponse?.rate_of_interest_regular,
  ]);
  const hanldeSkip = useCallback(() => {
    hanldeClickNexts(option);
  }, [hanldeClickNexts, option]);
  useEffect(() => {
    sessionStorage.removeItem("isPromptShown");
  }, []);

  const handleGetPdf = useCallback(async () => {
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/products/getterms`,
        { fd_id: 3 },
      );
      const pdfLink = response?.data?.data?.[0]?.pdf_link;

      if (pdfLink) {
        const widthInPixels =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        const heightInPixels =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        window.open(
          pdfLink,
          "_blank",
          `width=${widthInPixels},height=${heightInPixels}`,
        );
      } else {
        console.log("PDF link not found");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // =============
  useEffect(() => {
    const summary = JSON.parse(sessionStorage.getItem("Order_Summary"));
    setOrder_summary(summary);
  }, []);

  const callApiAfterRedirectFromAadhar = useCallback(async (query) => {
    try {
      debugger;
      const response = await axios.get(
        `${endpoints?.baseUrl}/invest/getmkycstatus${query}`,
      );
      console.log("resposnseresponse", response);
    } catch (error) {}
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (location.search) {
        const data = location.search.substring(1);
        await callApiAfterRedirectFromAadhar(data);
      }
    };

    fetchData();
  }, [callApiAfterRedirectFromAadhar, location.search]);

  // ============== addhar ckyc status ===========
  console.log("isChecked", isChecked);
  const handleGetAdhaarKycStatus = useCallback(
    async (investorId, manufacturerId, entryId, referenceId, data) => {
      try {
        const response = await axios.get(
          `${endpoints?.baseUrl}/invest/aadhaar-validation?investor-id=${investorId}&manufacturer-id=${manufacturerId}&entry-id=${entryId}&referenceId=${referenceId}&data=${data}=`,
        );
        console.log("responseresponseresponseresponse", response);
      } catch (error) {
        console.error(error);
      }
    },
    [],
  );

  useEffect(() => {
    if (location?.search?.slice(1) && location.search.slice(1).length > 10) {
      let dataAsd = location.search.replace(/&/g, "/");
      dataAsd = dataAsd.split("&")[0].substring(2).split("/");

      const parts = dataAsd[4]?.split("=");

      handleGetAdhaarKycStatus(
        dataAsd[0],
        dataAsd[1],
        dataAsd[2],
        dataAsd[3]?.split("=")[1],
        parts.slice(1).join("="),
      );
    }
  }, [handleGetAdhaarKycStatus, location?.search]);

  const hanldeShowYield = useCallback(() => {}, []);

  const calculateAvgAnnualYield = useCallback(
    (aggInterest, investAmount, tenure) => {
      if (!aggInterest || !investAmount || !tenure) {
        return null;
      }
      const yieldValue =
        (Number(aggInterest) / (Number(investAmount) * Number(5.0))) * 100;
      return yieldValue.toFixed(2);
    },
    [],
  );
  console.log("avgAnnualYield", avgAnnualYieldValue);

  useEffect(() => {
    const yieldValue = calculateAvgAnnualYield(
      Order_Summary?.Total_Interest_Earned,
      Order_Summary?.InvestmentAmount,
      Order_Summary?.tenure,
    );
    setAvgAnnualYieldValue(yieldValue);
  }, [Order_Summary, calculateAvgAnnualYield]);

  const [showYield, setShowYield] = useState(false);
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-[#F9FAFB] p-5  outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div
          id="_heading"
          className="semi-bold-text text-xl leading-8 tracking-[-0.3]"
        >
          Average Annual Yield for this scheme is {avgAnnualYieldValue ?? 0}%
        </div>
        <div
          id="_body"
          className="flex flex-col gap-4 rounded-xl border-[0.5px] border-[#D7DFE9] bg-[#F0F3F9] p-5"
        >
          <div className="flex items-center justify-between">
            <p className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
              Interest Rate
            </p>
            <h4 className="medium-text text-sm leading-4 tracking-[-0.2px] text-[#1B1B1B]">
              {Order_Summary?.Interest_Rate ?? 0}p.a.
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <p className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
              Tenure Selected
            </p>
            <h4 className="medium-text text-sm leading-4 tracking-[-0.2px] text-[#1B1B1B]">
              {isNaN(Order_Summary?.tenure / 365.25)
                ? 0
                : (Order_Summary?.tenure / 365.25).toFixed(2)}{" "}
              yr
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <p className="regular-text text-xs leading-4 tracking-[-0.2px] text-[#5E718D]">
              Compounding Frequency
            </p>
            <h4 className="medium-text text-sm leading-4 tracking-[-0.2px] text-[#1B1B1B]">
              Annually
            </h4>
          </div>
        </div>
        <Button
          label="Understood"
          onClick={() => setShowYield(false)}
          className="medium-text mt-2 max-h-12 bg-[#21B546] text-base leading-7 tracking-[-0.3px] text-white"
        />
      </div>
    </div>
  );
  return (
    <>
      {showYield && <PleaseWaitLoader bodyContent={firstModalData} />}
      {/* {true && <PleaseWaitLoader bodyContent={firstModalData} />} */}
      {showPrompt && (
        <SearchEnginePrompt
          recommendationApiResponse={recommendationApiResponse}
          Order_Summary={Order_Summary}
          handleUpgrade={handleUpgrade}
          hanldeSkip={hanldeSkip}
        />
      )}
      <div className="mx-auto mt-6 flex h-fit max-w-[592px] flex-col gap-5 rounded-md p-2 md:mt-8 md:w-[592px] md:rounded-xl md:border md:p-8 md:pb-6">
        <span className="mb-3 md:hidden">
          <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} />
        </span>
        <div id="_first" className="flex flex-col gap-2">
          <Heading
            text="Order Summary"
            type="h3"
            className="bold-text text-xl leading-6 text-[#1B1B1B]"
          />
          <PortfolioInfoText text="Review your investment and choose your action on maturity of your FD" />
        </div>
        <div
          id="_second"
          className="flex flex-col overflow-visible rounded-xl border pb-5"
        >
          <div
            id="_top"
            className="flex flex-col gap-4 bg-slate-200 p-5 md:gap-5 md:rounded-t-xl"
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
              <div
                id="_first"
                className="flex max-h-4 items-center justify-between"
              >
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Investment Amount
                </p>
                <p>
                  <span className="regular-text text-sm leading-4 tracking-[-0.2]">
                    ₹
                  </span>{" "}
                  <span
                    className={`semi-bold-text text-right text-sm leading-4 tracking-[-0.2] `}
                  >
                    {Order_Summary?.InvestmentAmount}
                  </span>
                </p>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Tenure Selected
                </p>
                <p
                  className={` medium-text  text-right text-sm leading-4 tracking-[-0.2]`}
                >
                  {/* {Order_Summary?.tenure.endsWith("Yr")
                    ? Order_Summary?.tenure.replace("Yr", "years")
                    : Order_Summary?.tenure} */}
                  {/* {Order_Summary?.tenure ? Order_Summary?.tenure : ""} */}
                  {isNaN(Order_Summary?.tenure / 365.25)
                    ? 0
                    : (Order_Summary?.tenure / 365.25).toFixed(2)}{" "}
                  yr
                </p>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Interest Rate
                </p>
                <p
                  className={` medium-text text-right text-sm leading-4 tracking-[-0.2]`}
                >
                  {Order_Summary?.Interest_Rate} p.a.
                </p>
              </div>
              {/* =============== */}
              <div id="_first" className="flex items-center justify-between">
                <p className="regular-text flex items-center gap-[5px] text-sm leading-4 tracking-[-0.2]  text-[#5E718D]">
                  <span> Effective Yield</span>{" "}
                  <img
                    src="/images/info.svg"
                    alt="info-icon"
                    className="max-h-3 max-w-3 cursor-pointer"
                    onClick={() => setShowYield(true)}
                  />
                </p>
                <p
                  className={` medium-text text-right text-sm leading-4 tracking-[-0.2]`}
                >
                  {avgAnnualYieldValue ?? 0}% p.a.
                </p>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Maturity Amount
                </p>
                <p
                  className={` semi-bold-text text-right text-sm leading-4 tracking-[-0.2]`}
                >
                  ₹ {Order_Summary?.maturity_amount}
                  {}
                </p>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Interest Payout
                </p>
                <p
                  className={` medium-text text-right text-sm leading-4 tracking-[-0.2]`}
                >
                  {Order_Summary?.payout}
                </p>
              </div>

              {/* <div id="_first" className="flex items-center justify-between">
                <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                  {Order_Summary?.payout} Amount
                </p>
                <p>
                  <span className="regular-text text-right text-sm leading-6 tracking-[-0.2]">
                    ₹
                  </span>{" "}
                  <span className="semi-bold-text text-right text-sm leading-6 tracking-[-0.2]">
                    {
                      Order_Summary?.CalculateFdResponse
                        ?.interestDetails?.[0]?.[
                        Object.keys(
                          Order_Summary?.CalculateFdResponse
                            ?.interestDetails?.[0],
                        )[0]
                      ]?.[1]
                    }
                  </span>
                </p>
              </div> */}
              <div
                id="_first"
                className="flex items-center justify-between md:max-h-4"
              >
                <p className="regular-text text-sm leading-4 tracking-[-0.2] text-[#5E718D]">
                  Total Interest Earned
                </p>
                <p>
                  <span
                    className={`regular-text   text-right text-sm leading-6 tracking-[-0.2] text-[#21B546]`}
                  >
                    ₹
                  </span>{" "}
                  <span
                    className={` semi-bold-text text-right text-sm leading-6 tracking-[-0.2] text-[#21B546]`}
                  >
                    {Order_Summary?.Total_Interest_Earned}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            id="_bottom"
            className="flex flex-wrap items-center justify-between gap-3 p-5 py-4"
          >
            <div
              id="_left"
              className="semi-bold-text flex items-center  gap-2 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] md:gap-2"
            >
              <span className="semi-bold-text text-sm leading-4 tracking-[-0.2] text-[#1B1B1B]">
                Choose Maturity Action
              </span>
              <img src="/images/info-icon.svg" alt="info-icon" />
            </div>
            <div id="_right">
              {getDropDown?.length > 0 && (
                <Select
                  name="Tenure"
                  defaultValue={getDropDown[0]}
                  options={getDropDown || []}
                  onChange={(e) => {
                    console.log(e);
                    setOption(e);
                  }}
                  styles={selectCustomStyle}
                  isSearchable={false}
                  isClearable={false}
                />
              )}
            </div>
          </div>
          <div id="_termAndCondition" className="flex items-start gap-2 px-5">
            <input
              type="checkbox"
              // checked
              checked={isChecked ? true : false}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mt-[2px] h-4 w-4 cursor-pointer accent-[#00a700] md:h-4 md:w-4"
            />
            <span className="regular-text text-xs leading-5 tracking-[-0.2] text-[#1B1B1B]">
              By continuing, you agree to the{" "}
              <span
                className="medium-text cursor-pointer text-[#21B546]"
                onClick={handleGetPdf}
              >
                Terms & Conditions
              </span>{" "}
              of {Order_Summary?.issuer_name && Order_Summary?.issuer_name}.
            </span>
          </div>
        </div>
        {/* // import this components as <HighlightsInfo/> */}
        <div id="_declaration" className="flex flex-col gap-3">
          <h4 className="semi-bold-text text-sm leading-5 tracking-[-0.2]">
            Declaration
          </h4>
          <div
            id="_box"
            className="flex justify-between rounded-xl border-[0.5px] p-5"
          >
            <div
              id="_left"
              className="regular-text text-xs leading-5 tracking-[-0.2] text-[#1B1B1B]"
            >
              Are you a PEP/relative or a non-Indian tax resident?
            </div>
            <div
              id="_right"
              className="flex cursor-pointer items-center rounded-md bg-[#F0F3F9] py-[2px] pl-[6px] pr-2 text-[#5E718D]"
              onClick={() => navigate("/declaration")}
            >
              <span className="medium-text text-xs leading-5 tracking-[-0.2] ">
                {sessionStorage.getItem("question_0") ?? "No"}
              </span>
              <MdOutlineChevronRight />
            </div>
          </div>
        </div>
        {/* <div id="_third" className="flex flex-col gap-2 hidden"> */}
        <div id="_third" className=" hidden flex-col gap-2">
          <p className="semi-bold-text text-sm leading-4 tracking-[-0.2] text-[#1B1B1B]">
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
          disabled={
            !Order_Summary?.CalculateFdResponse?.interestDetails?.[0]?.[
              Object.keys(
                Order_Summary?.CalculateFdResponse?.interestDetails?.[0],
              )[0]
            ]?.[1]
          }
          onClick={() => handleClickNext(option)}
          label="Make Payment"
          className={`medium-text mx-auto ${
            Order_Summary?.CalculateFdResponse?.interestDetails?.[0]?.[
              Object.keys(
                Order_Summary?.CalculateFdResponse?.interestDetails?.[0],
              )[0]
            ]?.[1]
              ? "bg-[#21B546] text-[#fff]"
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } px-5 py-[10px] text-base leading-7 tracking-[-0.3]  duration-300 md:w-[350px] `}
        />{" "}
        <div id="_fifth" className="mx-auto flex items-center gap-2">
          <Image src="/images/secure-icon.svg" alt="icon" />
          <PortfolioInfoText
            text="100% Safe & Secure Payment"
            className="medium-text text-xs leading-5 text-[#8897AE] "
          />
        </div>
      </div>
      <div id="_spacing" className="md:h-8"></div>
    </>
  );
};

export default PreviewMaturityAction;

// {
/* <aside className="relative bg-white">
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
              </aside> */
// }

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate, useParams } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

// atoms
import Image from "../../atoms/Image";
import Button from "../../atoms/button/Button";
import Heading from "../../atoms/headingContent/Heading";
import TextDisplay from "../../atoms/textContent/TextContent";
import TextSmallLight from "../../atoms/textSmallLight";

// molecules
import FDActionSection from "../../molecules/FDActionSection";
import InvestmentBenefits from "../../molecules/InvestmentBenefits";
import SafetyTrustInfo from "../../molecules/SafetyTrustInfo";
import UserAvatarGroup from "../../molecules/userAvatarGroup";

// organism
import FDsComparison from "../../organism/FDsComparison";
import TenureSelection from "../../organism/TenureSelection";
import FaqSection from "../../organism/faqSection";
import FooterSection from "../../organism/footerSection";
import Loader from "../../organism/loader";
import SomethingWentWrong from "../../organism/something-went-wrong";
import SupportSection from "../../organism/supportSection";
import SmallLoader from "../../organism/loader/smallLoader";

//icons
import ChevronNormal from "../../../Icons/Chevron-normal";

//other imports
import axios from "axios";
import {
  fetchInvestDetails,
  fetchSpecialOffer,
} from "../../../redux/actions/investDetails";
import { endpoints } from "../../../services/endpoints";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import { fetchWithWait } from "../../../utils/method";
import WhyInvestWithAltcase from "../../organism/whyInvestWithAltcase";
import InvestDetailsSupportSection from "../../organism/InvestDetailsSupportSection";
import {
  selectCustomStyle2,
  selectCustomStyle3,
} from "../../../utils/selectCustomStyle";
import {
  debounce,
  formatDate,
  formatIndianNumber,
  getLogoUrl,
  getRateOfInterest,
  getUserGender,
  integerToWords,
  isMultipleOfThousand,
  numberConvert,
} from "../../../utils/commonUtils";
import Select from "react-select";
import PleaseWaitLoader from "../../organism/pleaseWaitLoader";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import LeftArrow from "../../../Icons/LeftArrow";
import { fetchFaq } from "../../../redux/actions/dashboard";
import { showAlert } from "../../molecules/sweetAlert";
import FdAlertBox from "../../molecules/fdAlertBox";
// import { formatDate } from "react-datepicker/dist/date_utils";

const formatNumberIndian = (value) => {
  let x = value?.toString().replace(/\D/g, "");
  let lastThree = x.slice(-3);
  let otherNumbers = x.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return result;
};

const InvestDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasShownToast = useRef(false);
  const showAmountToastRef = useRef(true);
  const showMultipleToastRef = useRef(true);
  const [ShowAlert, setShowAlert] = useState(true);

  const { id } = useParams();

  const { id: fdid, scheme_master_id, tag } = useParams();
  const { loading } = useSelector((state) => state?.ApplicationLoader);

  const [calculateFdResponse, setCalculateFdResponse] = useState(null);
  // ================
  const userData = getData("userData");
  const panVerificationInfo = JSON.parse(
    sessionStorage.getItem("panVerificationInfo"),
  );
  const isNotSeniorCitizen = !(
    userData?.is_senior_citizen || panVerificationInfo?.is_senior_citizen
  );
  console.log("isNotSeniorCitizen", isNotSeniorCitizen);

  const [isSeniorCitizen, setIsSeniorCitizen] = useState(
    JSON.parse(sessionStorage.getItem("Order_Summary"))?.isSeniorCitizen ??
      !isNotSeniorCitizen,
  );

  const [InvestmentAmount, setInvestmentAmount] = useState(() => {
    const orderSummary = sessionStorage.getItem("Order_Summary");
    const investmentAmount = orderSummary
      ? JSON.parse(orderSummary)?.InvestmentAmount
      : "100000";
    return Number(investmentAmount);
  });

  const [tenure, setTenure] = useState([]);
  const [selectedTenure, setSelectedTenure] = useState({});

  const [payout, setPayout] = useState([]);
  const [selectedPayout, setSelectedPayOut] = useState(
    JSON.parse(sessionStorage.getItem("Order_Summary"))?.payout ?? payout?.[0],
  );

  const [cardData, setCardData] = useState(null);
  const [extraData, setExtraData] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const [showYield, setShowYield] = useState(false);

  const [activeRow, setActiveRow] = useState(null);

  const {
    cardApiResponse,
    cardApiResponseError,
    selectApiResponse,
    selectApiResponseError,
    tableApiError,
    tableApiResponse,
  } = useSelector((state) => state?.investDetails);

  const handleCard = useCallback(() => {
    const data = {
      display_location: "InvestOne",
      tag: "InvestOne",
      investor_id: getData("userData")?.investor_id,
      fd_id: +fdid,
      scheme_master_id: +scheme_master_id,
    };
    fetchWithWait({ dispatch, action: fetchInvestDetails(data) });
  }, [dispatch, fdid, scheme_master_id]);

  const handleSpecialOffer = useCallback(() => {
    const data = {
      investor_id: getData("userData")?.investor_id
        ? Number(getData("userData")?.investor_id)
        : 0,
      fd_id: Number(id),
    };
    fetchWithWait({ dispatch, action: fetchSpecialOffer(data) });
  }, [dispatch, id]);
  useEffect(() => {
    handleSpecialOffer();
  }, [handleSpecialOffer]);

  const handleChange = (e) => {
    const inputValue = e?.target?.value?.replace(/,/g, "") || "";
    // Validate the input value
    const numericValue = Number(inputValue);
    const maxAmount = cardApiResponse?.[0]?.fd_max_amount;
    // Edge case: if input is empty or non-numeric, handle appropriately
    if (isNaN(numericValue) || inputValue.trim() === "") {
      // Clear the input if it's not a valid number
      setInvestmentAmount("");
      hasShownToast.current = false; // Reset toast flag
      return;
    }
    // Edge case: handle very large numbers
    if (!maxAmount || isNaN(Number(maxAmount))) {
      console.error("Invalid maximum amount");
      return;
    }
    // Check if the numeric value exceeds the maximum amount
    if (numericValue > Number(maxAmount)) {
      // Show the toast only if it has not been shown before
      if (!hasShownToast.current) {
        toast.error("Cannot exceed the maximum amount.");
        hasShownToast.current = true;
      }
    } else {
      // Update the investment amount and reset the toast flag if the input is valid
      setInvestmentAmount(inputValue);
      // Reset the flag when input is valid
      hasShownToast.current = false;
    }
  };

  // //get the faq
  // const handleGetFaq = useCallback(() => {
  //   const data = {
  //     investor_id: Number(getData("userData")?.investor_id) ?? 0,
  //     fd_id: fdid ? Number(fdid) : 0,
  //   };
  //   fetchWithWait({ dispatch, action: fetchFaq(data) });
  // }, [dispatch, fdid]);

  // useEffect(() => {
  //   handleGetFaq();
  // }, [handleGetFaq]);
  const handleCardOnChange = useCallback(
    async (
      tableApiResponse,
      tenure,
      payout,
      InvestmentAmount,
      isSeniorCitizen,
    ) => {
      if (
        Number(InvestmentAmount) <= Number(cardApiResponse?.[0]?.deposit_amount)
      ) {
        return;
      }
      if (!isMultipleOfThousand(Number(InvestmentAmount))) {
        return;
      }

      const dataasda = tableApiResponse?.filter(
        (curval) => curval?.tenure === tenure?.value,
      );
      const selectedData = dataasda?.[0] || {};
      const data = {
        dob: !isSeniorCitizen
          ? formatDate(
              getData("userData")?.birth_date ||
                (sessionStorage.getItem("panVerificationInfo") &&
                  JSON.parse(sessionStorage.getItem("panVerificationInfo"))
                    ?.date_of_birth) ||
                JSON.parse(sessionStorage.getItem("getKycVerificationInfo"))
                  ?.date_of_birth ||
                undefined,
            )
          : "15/07/1960",
        compounding_type: "monthly",
        gender:
          getData("userData")?.gender === "MALE"
            ? "M"
            : getData("userData")?.gender === "FEMALE"
              ? "F"
              : "M",
        tenure_days: selectedData.tenure_days
          ? Number(selectedData.tenure_days)
          : 0,
        // tenor: tenure?.value?.slice(0, 3)
        //   ? Number(tenure?.value?.slice(0, 3))
        //   : 0,
        tenor: (dataasda?.[0]?.min_days / 360).toFixed(1)
          ? Number((dataasda?.[0]?.min_days / 360).toFixed(1))
          : 0,
        tenure_year: selectedData.tenure_years
          ? Number(selectedData.tenure_years)
          : 0,
        tenure_months: selectedData.tenure_months
          ? Number(selectedData.tenure_months)
          : 0,
        fd_id: fdid.toString(),
        investment_amount: Number(InvestmentAmount),
        investor_id: +getData("userData")?.investor_id,
        maturity_type:
          payout?.label === "At Maturity"
            ? "yearly"
            : payout?.label?.toLowerCase(),
        product_type:
          payout?.label === "At Maturity" ? "Cumulative" : "Non-Cumulative",
      };

      try {
        setCalculating(true);
        const response = await axios.post(
          `${endpoints?.baseUrl}/products/calculatefd`,
          data,
        );

        setCalculateFdResponse(response?.data?.data?.data);
      } catch (error) {
        console.log("err", error);
        // toast.error("something went wrong");
      } finally {
        setCalculating(false);
      }
    },
    [fdid, tableApiResponse],
  );

  // const handleCardOnChange = useCallback(
  //   async (
  //     tableApiResponse,
  //     tenure,
  //     payout,
  //     InvestmentAmount,
  //     isSeniorCitizen,
  //   ) => {
  //     const dataasda = tableApiResponse?.filter(
  //       (curval) => curval?.tenure === tenure?.value,
  //     );

  //     // Check if dataasda contains any elements
  //     const minDays = dataasda?.length > 0 ? dataasda[0]?.min_days : 0;
  //     console.log("tenuretenure", dataasda);
  //     const data = {
  //       dob: isSeniorCitizen ? "01-01-1947" : "01-01-2000",
  //       compounding_type: "monthly",
  //       tenure_days: dataasda?.tenure_days ? Number(dataasda.tenure_days) : 0,
  //       tenure_year: tenure?.value?.slice(0, 3)
  //         ? Number(tenure?.value?.slice(0, 3))
  //         : 0,
  //       tenure_months: dataasda?.tenure_months
  //         ? Number(dataasda.tenure_months)
  //         : 0,
  //       fd_id: fdid.toString(),
  //       investment_amount: Number(InvestmentAmount),
  //       investor_id: +getData("userData")?.investor_id,
  //       maturity_type:
  //         payout?.label === "At Maturity"
  //           ? "yearly"
  //           : payout?.label?.toLowerCase(),
  //       // maturity_type: payout,
  //       // product_type: "Cumulative",
  //       product_type:
  //         payout?.label === "At Maturity" ? "Cumulative" : "Non-Cumulative",
  //     };

  //     try {
  //       setCalculating(true);
  //       const response = await axios.post(
  //         `${endpoints?.baseUrl}/products/calculatefd`,
  //         data,
  //       );

  //       setCalculateFdResponse(response?.data?.data?.data);
  //     } catch (error) {
  //       console.log("err", error);
  //     } finally {
  //       setCalculating(false);
  //     }
  //   },
  //   [fdid, tableApiResponse],
  // );

  // ===================== on submit function =============
  console.log(
    "asdfasfdasddddddddfd",
    JSON.parse(sessionStorage.getItem("panVerificationInfo"))
      ?.is_senior_citizen,
  );
  const handleSubmit = () => {
    const userData = getData("userData");
    console.log("userdtas", userData);
    const panVerificationInfo = JSON.parse(
      sessionStorage.getItem("panVerificationInfo"),
    );
    console.log("panVerificationInfo", panVerificationInfo);
    const isNotSeniorCitizen = !(
      userData?.is_senior_citizen || panVerificationInfo?.is_senior_citizen
    );
    console.log("isNotSeniorCitizen", isNotSeniorCitizen);
    if (isNotSeniorCitizen && isSeniorCitizen) {
      showAlert({
        icon: "error",
        title: "Oops...",
        text: "As per your date of birth you are not a senior citizen. kindly uncheck the senior citizen to proceed further",
        customClass: "my-custom-class",
      });

      return;
    }

    const Order_Summary = {
      // tenure: tenure,
      activeRow: activeRow,
      tenure: tableApiResponse?.filter(
        (curVal) => curVal?.tenure === selectedTenure.value,
      )?.[0]?.min_days,
      tenureInYr: selectedTenure.value, //added this for the frontend
      // payout: selectedPayout.label,
      payout: selectedPayout,
      InvestmentAmount: InvestmentAmount,
      Interest_Rate: isSeniorCitizen
        ? activeRow?.rate_of_interest_sc
        : activeRow?.rate_of_interest_r,
      // Interest_Rate:
      //   activeRow?.rate_of_interest_r ??
      //   `${cardApiResponse?.[0]?.rate_of_interest.toFixed(2)}%`,
      Total_Interest_Earned: calculateFdResponse?.aggrigated_interest,
      logo_url: cardApiResponse[0]?.logo_url,
      issuer_name: cardApiResponse[0]?.issuer_name,
      CalculateFdResponse: calculateFdResponse,
      fdid: cardApiResponse[0]?.fd_id,
      scheme_master_id: cardApiResponse?.[0]?.scheme_master_id,
      isSeniorCitizen: isSeniorCitizen,
      maturity_amount:
        selectedPayout.label !== "At Maturity"
          ? Object.values(calculateFdResponse?.interestDetails?.[0] || {})[0]
          : calculateFdResponse?.maturity_amount,
    };

    sessionStorage.removeItem("Order_Summary");
    sessionStorage.setItem("Order_Summary", JSON.stringify(Order_Summary));
    navigate("/preview-maturity-action");
  };

  useEffect(() => {
    handleCard();
  }, [handleCard]);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const orderSummary = JSON.parse(sessionStorage.getItem("Order_Summary"));

    setTenure(
      tableApiResponse.map((el) => {
        return {
          label: el.tenure,
          value: el.tenure,
          scheme_master_id: el?.scheme_master_id,
        };
      }),
    );
    // console.log(
    //   "Tenure,",
    //   tableApiResponse.map((el) => {
    //     return { label: el.tenure, value: el.tenure };
    //   }),
    // );
    // console.log(
    //   "Payout,",
    //   selectApiResponse.map((el) => {
    //     return { label: el.item_value, value: el.item_id };
    //   }),
    // );
    setPayout(
      selectApiResponse.map((el) => {
        return { label: el.item_value, value: el.item_id };
      }),
    );
    if (orderSummary) {
      const alreadySelectTenure = tableApiResponse
        .map((el) => {
          return {
            label: el.tenure,
            value: el.tenure,
            scheme_master_id: el?.scheme_master_id,
          };
        })
        .filter((el) => el.value === orderSummary?.tenureInYr);

      setSelectedTenure(alreadySelectTenure[0]);
      const alreadySelectPayout = selectApiResponse
        .map((el) => {
          return { label: el.item_value, value: el.item_id };
        })
        .filter((el) => el.label === orderSummary?.payout);

      setSelectedPayOut(alreadySelectPayout[0]);
      return;
    }

    const firstTenure = tableApiResponse.map((el) => {
      return {
        label: el.tenure,
        value: el.tenure,
        scheme_master_id: el?.scheme_master_id,
      };
    })[0];
    setSelectedTenure(firstTenure);

    const firstPayout = selectApiResponse.map((el) => {
      return { label: el.item_value, value: el.item_id };
    })[0];
    setSelectedPayOut(firstPayout);
  }, [selectApiResponse, tableApiResponse]);

  const debouncedHandleCardOnChange = useCallback(
    // debounce((tenure, payout, amount, isSeniorCitizen) => {
    //   handleCardOnChange(tenure, payout, amount, handleCardOnChange);
    // }, 100),
    debounce((tableApiResponse, tenure, payout, amount, isSenior) => {
      handleCardOnChange(tableApiResponse, tenure, payout, amount, isSenior);
    }, 200),
    [],
  );
  useEffect(() => {
    if (selectedTenure || selectedPayout || InvestmentAmount) {
      debouncedHandleCardOnChange(
        tableApiResponse,
        selectedTenure,
        selectedPayout,
        InvestmentAmount,
        isSeniorCitizen,
      );
    }
  }, [
    selectedTenure,
    selectedPayout,
    InvestmentAmount,
    debouncedHandleCardOnChange,
    isSeniorCitizen,
    tableApiResponse,
  ]);

  const fetchInvestmentDetails = useCallback(async () => {
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/investment/getfdcontent`,
        { fd_id: Number(fdid) },
      );
      const { data } = response;

      if (data?.status === 200) {
        const filterContent = (type) =>
          data?.data.filter((item) => item?.contenttype === type);
        const colors = ["#FFF9DF", "#FFF5F4", "#E8FFED"];

        const updatedCardData = filterContent("Card").map((item, index) => ({
          ...item,
          bgcolor: colors[index % colors.length],
        }));

        setCardData(updatedCardData);
        setExtraData(filterContent("Extra"));
      }
    } catch (error) {
      console.error("Error fetching investment details:", error);
    }
  }, [fdid]);

  useEffect(() => {
    fetchInvestmentDetails();
  }, [fetchInvestmentDetails]);

  useEffect(() => {
    setSelectedPayOut(
      JSON.parse(sessionStorage.getItem("Order_Summary"))?.payout ??
        payout?.[0],
    );
  }, [payout]);
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-[#F9FAFB] p-5  outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div
          id="_heading"
          className="semi-bold-text text-xl leading-8 tracking-[-0.3px]"
        >
          {/* Effective Yield (EY) */}
          Understanding Effective Yield
        </div>
        <p
          id="text"
          className="regular-text  text-xs leading-5 tracking-[-0.2px] text-[#1B1B1B]"
        >
          <br />
          <strong>Definition:</strong> The average annual simple interest your
          FD will generate as a percentage of your investment. <br /> <br />
          <strong>Purpose:</strong> Helps you to compare the payoff you will
          receive from different FDs. <br /> <br />
          <strong>Good to know:</strong> Higher the compounding frequency,
          higher will be the effective yield.
        </p>
        <button
          className="absolute right-0 ml-auto border-0 p-1 transition hover:opacity-70"
          onClick={() => setShowYield(false)}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );

  // ====================
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   const depositAmount = cardApiResponse?.[0]?.deposit_amount;

  //   if (
  //     InvestmentAmount &&
  //     Number(InvestmentAmount) < depositAmount &&
  //     showAmountToastRef.current
  //   ) {
  //     showAmountToastRef.current = false;
  //     toast.error(`Amount must be more than ${depositAmount}`);
  //   } else if (InvestmentAmount && Number(InvestmentAmount) >= depositAmount) {
  //     showAmountToastRef.current = true;
  //   }
  // }, [InvestmentAmount, cardApiResponse]);
  useEffect(() => {
    const depositAmount = cardApiResponse?.[0]?.deposit_amount;

    if (InvestmentAmount) {
      const investmentNumber = Number(InvestmentAmount);

      if (investmentNumber < depositAmount && showAmountToastRef.current) {
        showAmountToastRef.current = false;
        toast.error(`Amount must be more than ${depositAmount}`);
      } else if (investmentNumber >= depositAmount) {
        showAmountToastRef.current = true;
      }

      if (investmentNumber % 1000 !== 0 && showMultipleToastRef.current) {
        showMultipleToastRef.current = false;
        toast.error("Amount must be a multiple of a thousand");
      } else if (investmentNumber % 1000 === 0) {
        showMultipleToastRef.current = true;
      }
    }
  }, [InvestmentAmount, cardApiResponse]);
  console.log(
    "helllagetUserGender",
    getUserGender() === "female",
    cardApiResponse?.[0]?.issuer_name === "Shriram Capital Ltd",
    isSeniorCitizen,
  );
  return (
    <>
      {ShowAlert &&
        ((getUserGender() === "female" &&
          cardApiResponse?.[0]?.issuer_name === "Shriram Capital Ltd") ||
          isSeniorCitizen) && (
          <FdAlertBox
            setShowAlert={setShowAlert}
            alertData={cardApiResponse?.[0]}
            isSeniorCitizen={isSeniorCitizen}
          />
        )}

      {showYield && <PleaseWaitLoader bodyContent={firstModalData} />}
      {!cardApiResponse?.length ? (
        <Loader />
      ) : (
        <>
          <div
            className="relative h-[224px] bg-gradient-to-l "
            style={{
              background: `linear-gradient(to left, ${cardApiResponse[0]?.fd_end_colour}, ${cardApiResponse[0]?.fd_start_colour})`,
            }}
          />

          <div
            id="_parent"
            className="mx-auto  my-4 mb-[-8%] flex w-[90%] max-w-[1008px]  -translate-y-[140px] flex-col gap-4 md:w-[75%] lg:mb-[-6.5%] lg:-translate-y-[150px] lg:flex-row lg:gap-8"
          >
            <div
              id="_main_left"
              className="flex w-full flex-col  gap-6 lg:mb-[60px] lg:w-[58.73%] lg:gap-[60px]"
            >
              {!cardApiResponse?.length && !cardApiResponseError ? (
                <Loader />
              ) : cardApiResponseError && !loading ? (
                <SomethingWentWrong />
              ) : (
                <>
                  <div
                    id="_top"
                    className="relative flex h-fit w-full flex-col gap-8  rounded-xl border-[0.5px] bg-white"
                  >
                    <span
                      className="absolute top-[-42px] flex cursor-pointer items-center gap-2"
                      onClick={() => navigate(-1)}
                    >
                      <LeftArrow width="20" height="20" color="#fff" />
                      <span className="medium-text  hidden text-sm leading-6 tracking-[-0.2px] text-white lg:inline-block">
                        {" "}
                        Go back
                      </span>
                    </span>
                    <div
                      id="_header"
                      className="flex h-fit justify-between p-8 pb-0"
                    >
                      <div
                        id="bankLogo"
                        className=" flex  h-[60px]  w-[60px]  items-center justify-center  rounded-full border  bg-white lg:h-[80px] lg:w-[80px]"
                      >
                        <Image
                          src={getLogoUrl(
                            cardApiResponse[0]?.logo_url
                              ? cardApiResponse[0]?.logo_url
                              : "",
                          )}
                          alt="bank logo"
                          className="h-[36px] w-[36px] object-contain lg:h-[48px] lg:w-[48px]"
                        />
                      </div>
                      <div
                        id="_middle"
                        className="ml-6 flex flex-1 flex-col gap-4"
                      >
                        <h3 className="bold-text text-2xl leading-8 tracking-[-0.4px]">
                          {cardApiResponse[0]?.issuer_name
                            ? cardApiResponse[0]?.issuer_name
                            : ""}
                        </h3>
                        <div
                          id="badget"
                          className=" flex w-fit gap-[6px] rounded-md bg-[#FFF6ED] px-[6px] py-[2px] lg:gap-[10px] lg:px-2  lg:py-1 "
                        >
                          <Image
                            src="/images/Fire.svg"
                            alt="Popular fire icon"
                          />
                          <TextDisplay
                            className="medium-text text-[12px]    leading-5  tracking-[-0.2px] text-orange-500 lg:text-sm   lg:leading-6"
                            text={tag ?? "-"}
                            elementType="p"
                          />
                        </div>
                      </div>
                      <div
                        id="_right"
                        className="flex h-[38px] w-[38px]  cursor-pointer items-center justify-center rounded-md border p-[10]"
                        onClick={() => {
                          navigator.clipboard
                            .writeText(window.location.href)
                            .then(() => {
                              toast.success("Link copied!");
                            });
                        }}
                      >
                        <img
                          src="/images/shareIcon.svg"
                          alt="share-icon"
                          className="h-[18px] w-[18px] cursor-pointer"
                        />
                      </div>
                    </div>
                    <div
                      id="_earnUptoDetails"
                      className="flex flex-col items-start justify-between gap-5 px-8 sm:flex-row md:gap-0"
                    >
                      <div id="_lefts" className="">
                        <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#455468]">
                          Earn up to
                        </p>
                        <h5 className="bold-text whitespace-nowrap text-4xl leading-[44px] tracking-[-1px] text-[#21B546]">
                          {cardApiResponse[0]?.rate_of_interest?.toFixed(2)}%{" "}
                          <span className="text-2xl leading-8 tracking-[-0.5px]">
                            p.a.
                          </span>
                        </h5>
                      </div>

                      <div
                        id="_right"
                        className="flex w-full flex-[0.7] items-center justify-around gap-2 md:gap-5"
                      >
                        <div id="_right_left" className="flex flex-col gap-2">
                          <p className="regular-text text-center text-sm  leading-4 tracking-[-0.2px] text-[#5E718D]">
                            Minimum Deposit
                          </p>
                          <h3 className="semi-bold-text text-center text-lg leading-6 tracking-[-0.3px]">
                            ₹{" "}
                            {cardApiResponse[0]?.fd_min_amount
                              ? formatNumberIndian(
                                  cardApiResponse[0]?.fd_min_amount,
                                )
                              : 0}
                          </h3>
                        </div>
                        <div
                          id="_vertical-line"
                          className="h-[44px] w-[1px] border-[0.5px] bg-[#AFBACA]"
                        ></div>
                        <div id="_right_right" className="flex flex-col gap-2">
                          <p className="regular-text text-center text-sm  leading-4 tracking-[-0.2px] text-[#5E718D]">
                            Lock-in
                          </p>
                          <h3 className="semi-bold-text text-center text-lg leading-6 tracking-[-0.3px]">
                            {cardApiResponse[0]?.lock_days
                              ? `${cardApiResponse[0].lock_days} `
                              : "0 "}
                            {/* days */}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div id="avatar" className="flex items-center gap-2 px-8">
                      {console.log(
                        "aslfhasdfa",
                        cardApiResponse[0]?.total_investors,
                      )}
                      <TextDisplay
                        className="regular-text  text-[12px] leading-6 tracking-[-0.2px] text-[#5E718D] lg:text-[14px]"
                        text={`Invested by ${cardApiResponse[0]?.total_investors ? formatIndianNumber(cardApiResponse[0]?.total_investors) : 0} investors `}
                        elementType="p"
                      />

                      <div id="avatarGroup" className="relative flex  ">
                        <UserAvatarGroup
                          totolUser={
                            cardApiResponse[0]?.total_investors
                              ? cardApiResponse[0]?.total_investors
                              : 0
                          }
                        />
                      </div>
                    </div>
                    <div
                      id="_bottom"
                      className="flex items-center gap-2 bg-[#E8FFED] px-8 py-4"
                    >
                      <Image src="/images/verifyIcon.svg" alt="verifyIcon" />

                      <TextSmallLight
                        text={
                          cardApiResponse[0]?.fd_heading
                            ? cardApiResponse[0]?.fd_heading
                            : ""
                        }
                        className=" medium-text text-sm leading-6  text-[#21B546]"
                      />
                    </div>
                  </div>
                </>
              )}

              <TenureSelection
                setShowYield={setShowYield}
                selectedTenure={selectedTenure}
                fdid={cardApiResponse[0]?.fd_id}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                tenure={tenure}
                setSelectedTenure={setSelectedTenure}
                selectedPayout={selectedPayout}
                setSelectedPayOut={setSelectedPayOut}
                isSeniorCitizen={isSeniorCitizen}
              />

              <InvestmentBenefits
                cardData={cardData}
                cardApiResponse={cardApiResponse}
              />
              <FDsComparison cardApiResponse={cardApiResponse?.[0]} />
              <SafetyTrustInfo extraData={extraData} />

              <FDActionSection />

              <WhyInvestWithAltcase />

              <InvestDetailsSupportSection />

              <FaqSection className={"mx-0 w-full md:w-full"} />
            </div>
            <div
              id="_main_right"
              className="sticky top-56 flex h-fit w-full flex-col gap-3 lg:w-[38.4%]"
            >
              <div
                id="_right"
                className="flex w-full flex-col  gap-5 rounded-xl border-[0.5px] bg-white p-8 md:gap-4 "
              >
                <div id="_first" className="flex flex-col gap-2">
                  <Heading
                    text="Make Investment"
                    type="h3"
                    className="bold-text text-xl leading-6 sm:leading-6 sm:tracking-[-0.5px]"
                  />

                  <TextSmallLight
                    text="Choose your amount and preferred tenure"
                    className="regular-text text-sm "
                  />
                </div>
                <div id="_second" className="relative flex flex-col gap-[6px]">
                  <TextSmallLight
                    text="Investment Amount"
                    className="medium-text text-sm leading-6 text-[#3D4A5C]"
                  />
                  <label
                    htmlFor="emailInput"
                    className={`medium-text flex w-full items-center rounded-md border bg-white`}
                    disabled={false}
                  >
                    <div className="flex cursor-pointer items-center gap-1 border-r border-[#D7DFE9] px-[14px] py-2 text-[#AFBACA]">
                      <img src="/images/rupessIcon.svg" alt="rupessIcon" />
                    </div>

                    <input
                      id="emailInput"
                      type="email"
                      autoComplete="off"
                      value={formatNumberIndian(InvestmentAmount)}
                      onChange={handleChange}
                      placeholder={`Min : ${
                        cardApiResponse[0]?.fd_min_amount
                          ? formatNumberIndian(
                              cardApiResponse[0]?.fd_min_amount,
                            )
                          : 0
                      }`}
                      className={
                        "medium-text placeholder:regular-text w-full rounded-md border border-none border-[#AFBACA] bg-white  p-2    text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B] outline-none placeholder:text-sm "
                      }
                    />
                  </label>
                  <TextSmallLight
                    text={`${InvestmentAmount ? numberConvert(InvestmentAmount) : ""}`}
                    className="regular-text text-xs "
                  />
                </div>
                <div
                  id="_third_TenureandCompounding"
                  className="flex justify-between gap-5"
                >
                  <div id="_left" className="flex flex-1 flex-col gap-[6px]">
                    <label
                      htmlFor=""
                      className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                    >
                      Tenure
                    </label>
                    {!tableApiError && tenure?.length > 0 && (
                      <Select
                        name="Tenure"
                        value={selectedTenure}
                        options={tenure || []}
                        onChange={(e) => {
                          setSelectedTenure(e);
                        }}
                        styles={selectCustomStyle2(selectedTenure)}
                        isSearchable={false}
                        isClearable={false}
                      />
                    )}
                  </div>
                  <div id="_right" className="flex flex-1 flex-col gap-[6px]">
                    <label
                      htmlFor=""
                      className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                    >
                      Payout
                    </label>
                    {payout?.length && (
                      <Select
                        name="Payout"
                        // defaultValue={selectedPayout}
                        value={selectedPayout}
                        options={payout || []}
                        onChange={(e) => {
                          setSelectedPayOut(e);
                        }}
                        styles={selectCustomStyle3}
                        isSearchable={false}
                        isClearable={false}
                      />
                    )}
                  </div>
                </div>
                <div id="_fourth">
                  <label className="flex cursor-pointer items-center gap-1">
                    <input
                      type="checkbox"
                      value=""
                      disabled={activeRow === null ? true : false}
                      className="peer sr-only"
                      checked={isSeniorCitizen}
                      onChange={(e) => {
                        setIsSeniorCitizen(e.target.checked ? true : false);
                      }}
                    />
                    <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#28BF4E] peer-checked:after:translate-x-full  "></div>
                    <TextSmallLight
                      text="I am a Senior Citizen"
                      className=" medium-text  text-sm  leading-6 text-[#2D3643]"
                    />
                  </label>
                </div>
                <div id="_fifth " className="flex flex-col gap-2">
                  <div
                    id="_first"
                    className="flex items-center justify-between"
                  >
                    <TextSmallLight
                      text="Interest Rate"
                      className="regular-text text-sm leading-6"
                    />
                    {}
                    {calculating ? (
                      <SmallLoader />
                    ) : (
                      <h3 className="bold-text max-h-6 whitespace-nowrap text-right text-2xl leading-6 tracking-[-0.5px] text-[#21B546]">
                        {/* {isSeniorCitizen
                          ? activeRow?.rate_of_interest_sc
                          : activeRow?.rate_of_interest_r}{" "} */}

                        {getRateOfInterest(activeRow, isSeniorCitizen)
                          ?.rate_of_interest
                          ? `${getRateOfInterest(activeRow, isSeniorCitizen).rate_of_interest}%`
                          : "N/A"}
                        <span className=" text-sm leading-5 tracking-[-0.3px]">
                          p.a.
                        </span>
                      </h3>
                    )}
                  </div>
                  <div
                    id="_first"
                    className="flex max-h-6 items-center justify-between"
                  >
                    <TextSmallLight
                      text={` ${selectedPayout?.label} you will get`}
                      className="regular-text text-sm leading-6"
                    />
                    {calculating ? (
                      <SmallLoader />
                    ) : (
                      <Heading
                        // text={`₹ ${
                        //   selectedPayout?.label !== "At Maturity"
                        //     ? Object.values(
                        //         calculateFdResponse?.interestDetails?.[0] || {},
                        //       )[0] ?? 0
                        //     : calculateFdResponse?.maturity_amount
                        //       ? formatIndianNumber(
                        //           calculateFdResponse?.maturity_amount,
                        //         ) || 0
                        //       : 0
                        // }`}
                        text={`₹ ${
                          Number(InvestmentAmount) >
                          cardApiResponse?.[0]?.deposit_amount
                            ? selectedPayout?.label !== "At Maturity"
                              ? Object.values(
                                  calculateFdResponse?.interestDetails?.[0] ||
                                    {},
                                )[0] ?? 0
                              : calculateFdResponse?.maturity_amount
                                ? formatIndianNumber(
                                    calculateFdResponse?.maturity_amount,
                                  ) || 0
                                : 0
                            : 0
                        }`}
                        type="h3"
                        className="bold-text whitespace-nowrap text-base leading-6"
                      />
                    )}
                  </div>
                  <div
                    id="_first"
                    className="flex max-h-6 items-center justify-between"
                  >
                    <TextSmallLight
                      text="Total Interest Earned"
                      className="regular-text text-sm leading-6"
                    />
                    {calculating ? (
                      <SmallLoader />
                    ) : (
                      <h3 className="bold-text whitespace-nowrap text-base leading-6 tracking-[-0.3px] text-[#21B546]">
                        ₹{" "}
                        {/* {calculateFdResponse?.aggrigated_interest
                          ? formatIndianNumber(
                              calculateFdResponse?.aggrigated_interest,
                            )
                          : 0} */}
                        {/* {calculateFdResponse?.aggrigated_interest
                          ? formatIndianNumber(
                              calculateFdResponse?.aggrigated_interest,
                            )
                          : 0} */}
                        {Number(InvestmentAmount) >
                        cardApiResponse?.[0]?.deposit_amount
                          ? calculateFdResponse?.aggrigated_interest
                            ? formatIndianNumber(
                                calculateFdResponse?.aggrigated_interest,
                              )
                            : 0
                          : 0}
                      </h3>
                    )}
                  </div>
                </div>
                <Button
                  disabled={
                    !calculateFdResponse ||
                    calculating ||
                    Number(InvestmentAmount) < cardApiResponse[0]?.fd_min_amount
                  }
                  onClick={handleSubmit}
                  label="Proceed"
                  className={`medium-text mt-2 max-h-12  ${
                    !calculateFdResponse ||
                    calculating ||
                    Number(InvestmentAmount) < cardApiResponse[0]?.fd_min_amount
                      ? "bg-[#F0F3F9] text-[#AFBACA] opacity-60"
                      : "bg-custom-green text-[#fff] opacity-100"
                  }`}
                />
              </div>
              <div
                id="_bottom"
                className="flex  items-center justify-center gap-2"
              >
                <img
                  src="/images/bank-logo.svg"
                  alt="logo"
                  className="h-[1.125rem] w-[1.125rem]"
                />
                <span className="text-sm leading-5 tracking-[-0.2px] text-[#8897AE]">
                  Your funds will go directly into{" "}
                  {cardApiResponse[0]?.issuer_name
                    ? cardApiResponse[0]?.issuer_name
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <FooterSection />
        </>
      )}
    </>
  );
};

export default InvestDetails;

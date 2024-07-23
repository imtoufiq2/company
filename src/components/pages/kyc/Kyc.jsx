import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Email from "../../../Icons/EmailIcons";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";

import Button from "../../atoms/button/Button";
import { validateEmail, validatePanNumber } from "../../../utils/validation";
import { usePost } from "../../../customHooks/usePost";
import {
  getData,
  getLocalStorageData,
  setData,
  setLocalStorageData,
} from "../../../utils/Crypto";
import WatchIcon from "../../../Icons/WatchIcon";
import toast from "react-hot-toast";
import LeftArrow from "../../../Icons/LeftArrow";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch } from "react-redux";
import { savePan, verifyPan } from "../../../redux/actions/kyc";
import axios from "axios";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import Loader from "../../organism/loader";
import LoadingOverlay from "react-loading-overlay";
import { endpoints } from "../../../services/endpoints";
import { makeGlobalPayment } from "../../../utils/globalFunctions";
import useScrollToTop from "../../../customHooks/useScrollToTop";
import { MY_BASE_URL } from "../../../utils/api";
import DatePicker from "react-datepicker";

import { parse, formatISO, getMonth, getYear } from "date-fns";
import range from "lodash/range";
import "react-datepicker/dist/react-datepicker.css";
import "./Kyc.css";
import Verified from "../../atoms/verified";
// import { getMonth, getYear } from "react-datepicker/dist/date_utils";

const Kyc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [panInfo, setPanInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);
  const [checkingKYC, setCheckingKYC] = useState(false);

  const { postData, loading } = usePost();
  const [isPanExistFromDb, setIsPanExistFromDb] = useState(false);
  const [kyc_method, setkyc_method] = useState(null);
  // const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [dobFocused, setdoblFocused] = useState(false);

  const [isDOBFocused, setIsDOBFocused] = useState(false);
  const [pan, setPan] = useState("");
  const [panValid, setIspanValid] = useState(true);
  const [emailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dobEnabled, setDobEnabled] = useState(true);
  const [fullName, setFullName] = useState("");
  const [dgLockerLink, setDgLockerLink] = useState(null);
  const [isPanChanged, setIsPanChanged] = useState(false);
  const [dgLockerReturnData, setDgLockerReturnData] = useState({});
  const [CKYCReturnData, setCKYCReturnData] = useState(null);
  const [entry_id, setEntry_id] = useState(null);
  // const handleFocus = () => {
  //   setIsEmailFocused(true);
  // };
  // localStorage.removeItem("tempPan");
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };
  const handleDobBlur = () => {
    setdoblFocused(false);
  };
  const handleDobFocus = () => {
    setdoblFocused(true);
  };
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };
  console.log("adsfasfdasCKYCReturnDataCKYCReturnData", CKYCReturnData);
  const handleDOBFocus = () => {
    setIsDOBFocused(true);
  };
  // const handleBlur = () => {
  //   setIsEmailFocused(false);
  // };
  const handleDOBBlur = () => {
    setIsDOBFocused(false);
  };
  useEffect(() => {
    if (!dobEnabled) {
      setIsDOBFocused(true);
    }
  }, [dobEnabled]);
  //handleSubmit function
  const handleSubmit = async (e) => {
    console.log("falsafdasd", JSON.parse(sessionStorage.getItem("verifyPan")));
    localStorage.removeItem("tempPan");
    sessionStorage.removeItem("stopVerifyPan");
    // debugger;
    e.preventDefault();
    let data = {
      // kyc_method: kyc_method ? kyc_method : "",
      email_id: email,
      investor_id: getData("userData")?.investor_id,
      investor_name:
        CKYCReturnData?.investor_name ?? dgLockerReturnData?.investor_name,
      pan: CKYCReturnData?.pan_no ?? pan,
      date_of_birth:
        CKYCReturnData?.date_of_birth ?? dgLockerReturnData?.date_of_birth,
      kyc_method: JSON.parse(sessionStorage.getItem("verifyPan"))?.type_name,
      // kyc_method: "Digilocker",

      // is_ckyc_verified:
      //   CKYCReturnData?.is_ckyc_verified ??
      //   dgLockerReturnData?.is_ckyc_verified,

      // is_digilocker_verified: 0,
    };

    try {
      const response = await fetchWithWait({ dispatch, action: savePan(data) });
      console.log("asafd", response);
      // debugger;
      if (response.status === 200) {
        sessionStorage.removeItem("verifyPanCalled");
        if (sessionStorage.getItem("fromWhere") === "preview-maturity-action") {
          const globalRes = await makeGlobalPayment();
          // debugger;
          if (globalRes?.data?.data?.onboarding_status === "Bank") {
            navigate("/add-bank-account");
            return;
          } else if (globalRes?.data?.data?.onboarding_status === "Profile") {
            sessionStorage.removeItem("fromWhere");
            navigate("/personal-info");
            return;
          } else if (globalRes?.data?.data?.onboarding_status === "Nominee") {
            sessionStorage.removeItem("fromWhere");
            navigate("/add-nomination");
            return;
          }
        }
        // if()
        // Default navigation if the condition is not met
        navigate("/add-bank-account");
      }
    } catch (error) {
      // Display an error toast message
      toast.error("Something went wrong");
      console.error("An error occurred during saveAndContinue:", error);
    }
  };

  //dont remove the useCallback from here , because we don't want to recreate Show Popup() again and again
  const toShowPopup = useCallback(() => {
    setLocalStorageData("tempPan", pan);
  }, [dgLockerLink]);

  const handlePan = (e) => {
    const inputValue = e.target.value?.replace(/[^a-zA-Z0-9]/g, "");
    const upperCaseValue = inputValue.toUpperCase();
    setPan(upperCaseValue);
    if (pan?.length !== 10) {
      setIsPanChanged(true);
    }

    setIspanValid(validatePanNumber(upperCaseValue));
  };
  const convertToISO = (dateString) => {
    // Parse the date string from dd/MM/yyyy
    const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());
    // Format the date to ISO 8601
    return formatISO(parsedDate);
  };
  const convertDateFormat = (isoDateString) => {
    // console.log(isoDateString);
    // const date = new Date(isoDateString);

    // // Extract the correct UTC date components
    // const day = String(date.getUTCDate()).padStart(2, "0");
    // const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    // const year = date.getUTCFullYear();

    // return `${day}/${month}/${year}`;
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    console.log(formattedDate);
    return formattedDate;
  };

  const [isDobDisable, setIsDobDisable] = useState(true);
  console.log("dobEnableddobEnableddobEnabled", dobEnabled);
  useEffect(() => {
    console.log("dobEnabled", dobEnabled);
    if (pan.length !== 10 || !dobEnabled) {
      sessionStorage.removeItem("verifyPanCalled");
    }
    const verifyPans = async () => {
      console.log("asfdasdobEnabled", dobEnabled);
      debugger;
      if (
        panValid &&
        pan.length === 10 &&
        !getLocalStorageData("tempPan") &&
        !sessionStorage.getItem("verifyPanCalled") &&
        !sessionStorage.getItem("stopVerifyPan")
        // &&
        // dobEnabled // false but do not have some kyc repose
      ) {
        localStorage.removeItem("entry_id");
        sessionStorage.setItem("verifyPanCalled", true);
        let reqData = {
          investor_id: getData("userData")?.investor_id,
          pan_no: pan,
          mobile_no: getData("userData")?.mobile_no,
          redirection_url: `${MY_BASE_URL}/kyc?`,
          fd_id: +sessionStorage.getItem("fdId") ?? 0,
          ckyc_auth_factor: !dobEnabled ? "dob" : "mobile",
        };

        if (!dobEnabled) {
          reqData["date_of_birth"] = convertDateFormat(dateOfBirth);
        }

        try {
          setLoader(true);
          const response = await axios.post(
            `${endpoints?.baseUrl}/onboarding/verifypan`,
            reqData,
          );
          console.log("res", response);
          debugger;
          if (
            sessionStorage.getItem("fromWhere") &&
            response?.data?.data?.details?.responseKey ===
              "success_uistream_session_generation"
          ) {
            console.log("call teh api for the back from amke payment");
            const dgLockerLink = response?.data?.data?.details?.data?.url;
            sessionStorage.setItem("temporaray", pan);
            debugger;
            window.location.href = dgLockerLink;
          }
          if (
            response?.data?.data?.details?.response_key ===
            "error_invalid_mobile"
          ) {
            toast.success("kindly fill the pan DOB");
            setDobEnabled(false);
          }
          // debugger;
          sessionStorage.setItem(
            "verifyPan",
            JSON.stringify(response?.data?.data),
          );
          setEntry_id(response?.data?.data?.details?.entry_id);
          localStorage.setItem(
            "entry_id",
            response?.data?.data?.details?.entry_id,
          );
          console.log("error", response?.data);

          console.log("ewqerqw", response);
          if (response?.data?.data?.details) {
            sessionStorage.setItem(
              "panVerificationInfo",
              JSON.stringify(response?.data?.data?.details),
            );
          }
          setkyc_method(response?.data?.data?.type_name);

          if (response?.data?.data?.type_name === "CKYC") {
            setCKYCReturnData(response?.data?.data?.details);

            const isoDate = convertToISO(
              response?.data?.data?.details?.date_of_birth,
            );
            setDateOfBirth(new Date(isoDate));
            sessionStorage.setItem("stopVerifyPan", true);
            return;
          } else {
            console.log("asfasfdas", response?.data?.data?.details?.entry_id);
            // debugger;

            if (!dobEnabled) {
              const dgLockerLink =
                response?.data?.data?.details?.data?.authorizationUrl ??
                response?.data?.data?.details?.data?.url;
              setDgLockerLink(dgLockerLink); // Set dgLockerLink here
              const backFromDgLocker = getLocalStorageData("tempPan");
              if (!backFromDgLocker) {
                window.location.href = dgLockerLink;
              }
              if (backFromDgLocker && isPanChanged) {
                window.location.href = dgLockerLink;
              }
              if (response?.data?.details?.status === "FAILURE") {
                toast.error(response?.data?.details?.message);
              }

              if (response.status !== 409) {
                setIsPanExistFromDb(false);
                setPanInfo(response);
              } else {
                setIsPanExistFromDb(true);
                toast.error("This PAN is already registered.");
              }
            }
          }
          // debugger;
          // const dgLockerLink = response?.data?.details?.data?.authorizationUrl;
        } catch (error) {
          console.error("Error:", error);
          // console.log("error", error?.response?.data?.status);
          if (error?.response?.data?.status === 409) {
            toast.error(error?.response?.data?.message);
          } else {
            // toast.error("something went wrong");
          }
          // Handle error (e.g., show an error message)
        } finally {
          // finallyStatements
          setLoader(false);
        }
      }
    };
    verifyPans();
  }, [pan, pan.length, panValid, postData, dateOfBirth]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1990, getYear(new Date()) + 1, 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const handleDOB = (date) => {
    console.log(date);
    setDateOfBirth(date);
  };
  const verifyLater = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postData("/onboarding/skips", {
        investor_id: getData("userData")?.investor_id,
        method_name: "SkipPan",
      });
      console.warn(data);
      if (data?.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("somethings went wrong");
    }
  };

  const handleFullNameChange = (e) => {
    const input = e.target.value;
    if (fullName.length === 0 && input === " ") {
      return;
    }
    const formattedInput = input.replace(/\s+/g, " ");
    setFullName(formattedInput);
  };

  //fix the verify pan, issue .
  const handlePanInfoUpdate = useCallback(() => {
    if (pan.length !== 10) {
      setPanInfo(null);
    }
  }, [pan]);

  // api to save the data in the anaz database

  // api to get to know the status
  const getkycstatus = useCallback(async () => {
    try {
      setCheckingKYC(true);
      const response = await axios.post(
        `${endpoints?.baseUrl}/onboarding/getdigilocker-uistream-status`,
        {
          investor_id: getData("userData")?.investor_id,
          entry_id: Number(localStorage.getItem("entry_id")),
        },
      );
      console.log("kycstatus", response);

      // debugger;
      if (response?.data?.status === 200) {
        if (!response?.data?.data?.is_pan_matching) {
          toast.error(
            "PAN numbers do not match.  Please check both sides and try again.",
          );
          sessionStorage.removeItem("verifyPanCalled");
          return;
        }
        setDgLockerReturnData(response?.data?.data);
        // if (Object.keys(response?.data?.data).length !== 0) {
        //   setDgLockerReturnData(response?.data?.data);
        console.log("kycstatus", response?.data?.data);
        if (response?.data?.data) {
          sessionStorage.setItem(
            "getKycVerificationInfo",
            JSON.stringify(response?.data?.data),
          );
        }
        // }
        const isoDate = convertToISO(response?.data?.data?.date_of_birth);

        setDateOfBirth(new Date(isoDate));
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setCheckingKYC(false);
    }
  }, [entry_id]);

  useEffect(() => {
    const tempPanNumber = getLocalStorageData("tempPan");
    if (tempPanNumber) setPan(tempPanNumber);
  }, []);
  // const callFirstApi = useCallback(async (data) => {
  //   try {
  //     setFirstLoad(true);
  //     const response = await axios.get(
  //       `${endpoints?.baseUrl}/onboarding/digilocker-sso/callback?${data}`,
  //     );
  //     console.log("First API call", response.data);
  //     return response.data; // Return the data to be used later
  //   } catch (error) {
  //     console.error("Error in first API call:", error);
  //   } finally {
  //     setFirstLoad(false);
  //   }
  // }, []);
  // const getkycstatus = useCallback(async () => {
  //   // Define the function to get KYC status here
  //   console.log("call the api to get the status");
  //   // Make your API call here
  // }, []);

  useEffect(() => {
    const checkStatus = async () => {
      if (sessionStorage.getItem("temporaray")) {
        await getkycstatus();
      }
    };
    checkStatus();
  }, [getkycstatus]);
  useEffect(() => {
    const fetchData = async () => {
      const backFromDgLocker = getLocalStorageData("tempPan");
      console.log("asfdasentry_id", entry_id);
      if (backFromDgLocker) {
        console.warn(
          "Calling the first API to save the analysis database",
          entry_id,
        );
        // debugger;
        await getkycstatus();
        // const da = location?.search?.slice(1);

        // if (getLocalStorageData("tempPan") && location?.search?.slice(1)) {
        //   const firstApiResponse = await callFirstApi(
        //     location?.search?.slice(1),
        //   ); // Wait for the first API call to complete
        //   // if (firstApiResponse) {
        //   //   await getkycstatus(firstApiResponse); // Pass the data from the first API call to the second
        //   // }
        // }
      }
    };

    fetchData(entry_id); // Call the fetchData function immediately
  }, [entry_id, getkycstatus]);

  useEffect(() => {
    handlePanInfoUpdate();
  }, [handlePanInfoUpdate, pan.length]);
  useEffect(() => {
    localStorage.setItem(
      "timerStart",
      JSON.stringify({
        one: 0,
        two: 1,
      }),
    );
  }, []);

  //======== this funciton is for the auto scroll to some hegiht of the page =========
  // useEffect(() => {
  //   const scrollTo = (to, duration) => {
  //     const start = window.pageYOffset;
  //     const change = to - start;
  //     const increment = 20;
  //     let currentTime = 0;

  //     const animateScroll = () => {
  //       currentTime += increment;
  //       const val = Math.easeInOutQuad(currentTime, start, change, duration);
  //       window.scrollTo(0, val);
  //       if (currentTime < duration) {
  //         setTimeout(animateScroll, increment);
  //       }
  //     };

  //     animateScroll();
  //   };

  //   Math.easeInOutQuad = function (t, b, c, d) {
  //     t /= d / 2;
  //     if (t < 1) return (c / 2) * t * t + b;
  //     t--;
  //     return (-c / 2) * (t * (t - 2) - 1) + b;
  //   };

  //   scrollTo(140, 200);
  // }, []);

  //this is to open the popup
  useEffect(() => {
    if (dgLockerLink) {
      toShowPopup();
    }
  }, [dgLockerLink, toShowPopup]); //don't change this dependency

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useBackgroundColor();
  useScrollToTop();

  return (
    <>
      {/* <Loader /> */}
      {/* {loader ? } */}
      <LoadingOverlay
        active={loader || firstLoad || checkingKYC}
        spinner
        text=""
      >
        <LoginFormWrapper onSubmit={handleSubmit}>
          <>
            <div
              id="header"
              className="medium-text flex items-baseline  justify-between md:flex-row md:items-center "
            >
              <div
                id="leftIcon"
                className="flex flex-col  items-baseline gap-8 self-start  md:flex-row md:items-center md:gap-4 "
              >
                <LeftArrow
                  width="24"
                  height="24"
                  onClickFun={() => navigate("/verifyMobile")}
                />
                <h2 className="bold-text text-2xl  leading-8 tracking-[-0.5px] text-[#1B1B1B]">
                  KYC Verification
                </h2>
              </div>
              {/* {!(
                CKYCReturnData?.investor_name ??
                dgLockerReturnData?.investor_name
              )  */}
              {!sessionStorage.getItem("fromWhere") &&
                !(
                  CKYCReturnData?.investor_name ??
                  dgLockerReturnData?.investor_name
                ) && (
                  <button
                    type="button"
                    className="flex items-center gap-1 md:gap-2 "
                    onClick={verifyLater}
                  >
                    <WatchIcon />
                    <p className="medium-text text-sm leading-6  tracking-[-0.2px] text-[#455468] md:text-base md:leading-7 md:tracking-[-0.3px]">
                      Verify Later
                    </p>
                  </button>
                )}
            </div>
            <div>
              <p
                id="content"
                className="regular-text -mt-4 text-left text-sm   leading-6 tracking-[-0.2px] text-[#1B1B1B] md:mt-[0.625rem] md:text-base md:leading-7 md:tracking-[-0.3px] md:text-[#1B1B1B]"
              >
                Verify your KYC in 90 seconds to start investing in high rate
                FDs.
              </p>
            </div>
          </>
          {/* // formik */}
          <div
            id="first-input"
            className="mt-4 flex min-h-[4.75rem] flex-col items-start justify-between gap-1 md:mt-0"
          >
            <label
              htmlFor="panInput"
              className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
            >
              PAN
            </label>
            <div
              className={`relative w-full rounded-md bg-white ${
                CKYCReturnData?.investor_name ??
                dgLockerReturnData?.investor_name
                  ? "bg-[#ebeef09c]"
                  : "bg-[#fff]"
              }`}
            >
              <input
                type="text"
                id="panInput"
                maxLength={10}
                autoFocus={dobEnabled ? true : false}
                // disabled={sessionStorage.getItem("temporaray")}
                disabled={
                  CKYCReturnData?.investor_name ??
                  dgLockerReturnData?.investor_name
                    ? true
                    : false
                }
                value={
                  sessionStorage.getItem("temporaray") ??
                  pan ??
                  CKYCReturnData?.pan_no
                }
                onChange={handlePan}
                placeholder="Enter PAN number"
                className={clsx(
                  `medium-text placeholder:medium-text w-full rounded-md border border-[#AFBACA] px-[14px] py-[10px] text-sm leading-6 tracking-[-0.2px] text-[#2D3643] placeholder:text-sm`,
                  {
                    "outline-custom-green": panValid || pan.length !== 10,
                    "border-2 border-red-500 outline-red-500":
                      (!panValid && pan.length === 10) || isPanExistFromDb,
                  },
                  (CKYCReturnData?.investor_name ||
                    dgLockerReturnData?.investor_name) &&
                    "bg-[#F9FAFB] text-[#AFBACA] opacity-60",
                )}
              />

              {(CKYCReturnData?.investor_name ??
                dgLockerReturnData?.investor_name) && <Verified />}
            </div>
            {!panValid && pan.length === 10 && (
              <p className="mt-[-3px] text-[11px]  text-red-600">
                The PAN you entered is not valid. Please check the number.
              </p>
            )}
          </div>
          <div
            id="second-input"
            className="flex min-h-[4.75rem] flex-col items-start justify-between gap-1 md:-my-5"
          >
            <label
              htmlFor="DOBInput"
              className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
            >
              Date of Birth
            </label>
            {console.log("dobEnableddobEnabled", dobEnabled)}
            <div
              className={`relative w-full `}
              // style={{ border: "1px solid " }}
            >
              <label
                htmlFor="DOBInput"
                className={clsx(
                  `medium-text flex w-full items-center rounded-md border  ${
                    CKYCReturnData?.investor_name ??
                    dgLockerReturnData?.investor_name
                      ? "bg-[#F9FAFB]"
                      : "bg-[#fff]"
                  }`,
                  {
                    "border-2 border-custom-green": isDOBFocused,
                    "border-[#AFBACA]": !isDOBFocused,
                  },
                )}
                disabled={false}
                onFocus={handleDobFocus}
                onBlur={handleDobBlur}
              >
                <DatePicker
                  showIcon
                  autoFocus={dobEnabled ? false : true}
                  DatePicker
                  disabled={dobEnabled}
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {"<"}
                      </button>
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {">"}
                      </button>
                    </div>
                  )}
                  className={clsx(
                    `medium-text placeholder:medium-text w-full rounded-md border border-none border-[#AFBACA]  px-[1px]  text-sm leading-6 tracking-[-0.2px] text-[#AFBACA]  outline-none placeholder:text-sm ${
                      CKYCReturnData?.investor_name ??
                      dgLockerReturnData?.investor_name
                        ? "bg-[#F9FAFB]"
                        : "bg-[#fff]"
                    }`,
                    {
                      "py-[9px]": isDOBFocused,
                      "border-[#AFBACA] py-[10px]": !isDOBFocused,
                    },
                  )}
                  selected={dateOfBirth}
                  onChange={handleDOB}
                  onFocus={handleDOBFocus}
                  onBlur={handleDOBBlur}
                  icon={
                    <div
                      id="show-country"
                      className="flex cursor-pointer items-center gap-1 px-[14px] py-2 text-[#AFBACA]"
                    >
                      <img src="/images/Calendar.svg" alt="Calendar" />
                    </div>
                  }
                  dateFormat="dd/MM/yyyy"
                  placeholderText="DD/MM/YYYY"
                />
              </label>
              {dobEnabled &&
                (CKYCReturnData?.investor_name ??
                  dgLockerReturnData?.investor_name) && <Verified />}
            </div>

            {/* <label
              htmlFor="DOBInput"
              className={clsx(
                `medium-text flex w-full items-center rounded-md border bg-[#F9FAFB]`,
                {
                  "border-2 border-custom-green": isDOBFocused,
                  "border-[#AFBACA]": !isDOBFocused,
                },
              )}
              disabled={false}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            >
              <div
                id="show-country"
                className="flex cursor-pointer items-center gap-1 px-[14px] py-2 text-[#AFBACA]"
              >
                <img src="/images/Calendar.svg" alt="Calendar" />
              </div>

              <input
                id="DOBInput"
                disabled={isDobDisable}
                type="text"
                value={
                  CKYCReturnData?.date_of_birth ??
                  dgLockerReturnData?.date_of_birth
                }
                onChange={handleDOB}
                placeholder="DD/MM/YYYY"
                className={clsx(
                  "medium-text placeholder:medium-text w-full rounded-md border border-none border-[#AFBACA] bg-[#F9FAFB] px-[1px]  text-sm leading-6 tracking-[-0.2px] text-[#AFBACA]  outline-none placeholder:text-sm",
                  {
                    "py-[9px]": isDOBFocused,
                    "border-[#AFBACA] py-[10px]": !isDOBFocused,

                    // "border-red-700": !emailValid && emailTouched,
                  },
                )}
                onFocus={handleDOBFocus}
                onBlur={handleDOBBlur}
              />
            </label> */}
          </div>
          <div
            id="third-input"
            className="relative flex min-h-[4.75rem] flex-col items-start justify-between gap-1"
          >
            <label
              htmlFor="nameInput"
              className="medium-text text-sm  leading-6 tracking-[-0.2px] text-[#3D4A5C]"
            >
              Full Name
            </label>
            <div className="relative w-full">
              <input
                id="nameInput"
                // value={fullName}
                value={
                  CKYCReturnData?.investor_name ??
                  dgLockerReturnData?.investor_name
                }
                onChange={handleFullNameChange}
                type="text"
                disabled={true ? true : false}
                placeholder="Enter your full name as on PAN"
                className={`medium-text placeholder:medium-text w-full rounded-md border border-[#AFBACA]  px-[14px] py-[10px] text-sm  leading-6 tracking-[-0.2px] text-[#AFBACA] opacity-[110%] outline-custom-green placeholder:text-sm ${
                  panInfo ? "opacity-60" : "opacity-100"
                } ${
                  CKYCReturnData?.investor_name ??
                  dgLockerReturnData?.investor_name
                    ? "bg-[#F9FAFB]"
                    : "bg-white"
                } `}
              />
              {(CKYCReturnData?.investor_name ??
                dgLockerReturnData?.investor_name) && <Verified />}
            </div>
          </div>
          <div
            id="fourth-input"
            className="flex min-h-[4.75rem] flex-col items-start justify-between gap-1 md:-mb-1 md:-mt-5"
          >
            <label
              htmlFor="emailInput"
              className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
            >
              Email Address
            </label>
            <label
              htmlFor="emailInput"
              className={clsx(
                `medium-text flex w-full items-center rounded-md border bg-white`,
                {
                  "border-2 border-custom-green": isEmailFocused,
                  "border-[#AFBACA]": !isEmailFocused,
                  // "border-red-600 border-2": !emailValid,
                  "border-2 border-[#AFBACA]": emailValid,
                  // "border-red-600 border-2": !emailValid && isFocused,
                },
              )}
              disabled={false}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
            >
              <div
                id="show-country"
                className="flex cursor-pointer items-center gap-1 px-[14px] py-2 text-[#AFBACA]"
              >
                <Email />
              </div>
              <input
                id="emailInput"
                type="email"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleEmail}
                placeholder="Enter your email address"
                className={clsx(
                  "medium-text placeholder:medium-text w-full rounded-md border border-none border-[#AFBACA] bg-white px-[1px]  text-sm leading-6 tracking-[-0.2px]  text-[#1B1B1B] outline-none placeholder:text-sm",
                  {
                    "py-[9px]": isEmailFocused,
                    "border-[#AFBACA] py-[10px]": !isEmailFocused,

                    // "border-red-700": !emailValid && emailTouched,
                  },
                )}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
            </label>
          </div>

          <Button
            onClick={() => {}}
            label="Continue"
            // disabled={!(panValid && emailValid) && !isPanExistFromDb}
            // `w-full h-[50px]  flex justify-center items-center  text-lg leading-[30px] tracking-[-0.3] rounded-md transition-all duration-200 ease-in-out `,

            disabled={!panValid || !emailValid || isPanExistFromDb}
            className={`medium-text mt-7 max-h-12 min-h-14 px-5 py-[0.625rem] text-base leading-7 md:-mt-1   md:py-[0.8125rem] md:text-lg md:leading-[1.875rem] ${
              panValid && emailValid && !isPanExistFromDb
                ? "bg-custom-green text-[#fff]"
                : "bg-[#F0F3F9] text-[#AFBACA] "
            } ${loading ? "opacity-60" : "opacity-100"}`}
          />
        </LoginFormWrapper>
      </LoadingOverlay>
      <div id="spacing" className="h-16 bg-white md:bg-[#F9FAFB]"></div>
    </>
  );
};

export default Kyc;

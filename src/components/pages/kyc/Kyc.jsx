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
  setLocalStorageData,
} from "../../../utils/Crypto";
import WatchIcon from "../../../Icons/WatchIcon";
import toast from "react-hot-toast";
import LeftArrow from "../../../Icons/LeftArrow";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch } from "react-redux";
import { savePan, verifyPan } from "../../../redux/actions/kyc";
import axios from "axios";

const Kyc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [panInfo, setPanInfo] = useState(null);
  const { postData, loading } = usePost();
  const [isPanExistFromDb, setIsPanExistFromDb] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isDOBFocused, setIsDOBFocused] = useState(false);
  const [pan, setPan] = useState("");
  const [panValid, setIspanValid] = useState(true);
  const [emailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [fullName, setFullName] = useState("");
  const [dgLockerLink, setDgLockerLink] = useState(null);
  const [isPanChanged, setIsPanChanged] = useState(false);
  const [dgLockerReturnData, setDgLockerReturnData] = useState({});

  // const handleFocus = () => {
  //   setIsEmailFocused(true);
  // };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handleDOBFocus = () => {
    setIsDOBFocused(true);
  };
  // const handleBlur = () => {
  //   setIsEmailFocused(false);
  // };
  const handleDOBBlur = () => {
    setIsDOBFocused(false);
  };
  //handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email_id: email,
      investor_id: getData("userData")?.investor_id,
      investor_name: panInfo?.data?.name,
      org_id: "AC01",
      pan: pan,
    };

    try {
      fetchWithWait({ dispatch, action: savePan(data) }).then((response) => {
        // Your code handling the response
        console.log("response", response);
        if (response.status === 200) {
          navigate("/add-bank-account");
        }
      });
    } catch (error) {
      toast.error("somethings went wrong");
    }
  };

  //dont remove the useCallback from here , because we don't want to recreate Show Popup() again and again
  const toShowPopup = useCallback(() => {
    // console.log("hello toShowPopup");
    setLocalStorageData("tempPan", pan);
    // if (dgLockerLink) {
    //   const width = window.innerWidth;
    //   const height = window.innerHeight;
    //   const popup = window.open(
    //     dgLockerLink,
    //     "altcase",
    //     `left=0,top=0,width=${width},height=${height},toolbar=0,scrollbars=0,status=0`,
    //   );

    //   // Listen for messages from the popup
    //   window.addEventListener("message", (event) => {
    //     if (event.origin === "http://localhost:3000") {
    //       console.log("Popup message received:", event.data);
    //       // Perform actions based on the message from the popup
    //     }
    //     console.log("insdide the message");
    //   });

    //   // Check if the popup is closed
    //   const checkPopupClosed = setInterval(() => {
    //     if (!popup || popup.closed) {
    //       clearInterval(checkPopupClosed);
    //       console.log("Popup is closed.");
    //       // Perform actions when the popup is closed
    //     }
    //     console.log("insdide the checkPopupClosed");
    //   }, 1000);
    // }
  }, [dgLockerLink]);

  const handlePan = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    const upperCaseValue = inputValue.toUpperCase();
    setPan(upperCaseValue);
    if (pan?.length !== 10) {
      setIsPanChanged(true);
    }

    setIspanValid(validatePanNumber(upperCaseValue));
  };

  useEffect(() => {
    const verifyPans = async () => {
      if (panValid && pan.length === 10) {
        // const aa = `"http://localhost:3000/success"`;
        // try {
        //   fetchWithWait({
        //     dispatch,
        //     action: verifyPan({
        //       // investor_id: 580,
        //       // pan_no: "DMWPK2056M",
        //       // redirection_url: "https://www.google.com",
        //       investor_id: 580,
        //       pan_no: "DMWPK2006M",
        //       redirection_url: "http://localhost:3000/success",
        //     }),
        //   }).then((response) => {
        //     const dgLockerLink =
        //       response?.data?.details?.data?.authorizationUrl;
        //     setDgLockerLink(dgLockerLink); // Set dgLockerLink here

        //     // Call toShowPopup after dgLockerLink is set
        //     // toShowPopup();
        //     if (response?.data?.details?.status === "FAILURE") {
        //       toast.error(response?.data?.details?.message);
        //     }

        //     if (response.status !== 409) {
        //       setIsPanExistFromDb(false);
        //       setPanInfo(response);
        //     } else {
        //       setIsPanExistFromDb(true);
        //       toast.error("This PAN is already registered.");
        //     }
        //   });
        // } catch (error) {
        //   setIsPanExistFromDb(true);
        //   setPanInfo(null);
        //   toast.error("This PAN is already registered.");
        // }

        try {
          const response = await axios.post(
            "https://altcaseinvestor.we3.in/api/v2/onboarding/web/verifypan",
            {
              investor_id: getData("userData")?.investor_id,
              pan_no: pan,
              redirection_url: "http://localhost:3000/kyc",
            },
          );

          // const dgLockerLink = response?.data?.details?.data?.authorizationUrl;
          const dgLockerLink =
            response?.data?.data?.details?.data?.authorizationUrl;
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
        } catch (error) {
          console.error("Error:", error);
          // Handle error (e.g., show an error message)
        }
      }
    };
    verifyPans();
  }, [pan, pan.length, panValid, postData]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const handleDOB = (e) => {
    setDateOfBirth(e.target.value);
  };
  const verifyLater = async (e) => {
    e.preventDefault();

    try {
      // console.warn("lalalla", getData("userData")?.access_token);
      const { data } = await postData("/onboarding/skips", {
        investor_id: getData("userData")?.investor_id,
        method_name: "SkipPan",
      });
      console.warn(data);
      if (data?.status === 200) {
        navigate("/add-bank-account");
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
  const getkycstatus = async () => {
    // console.log("getkycstatus")
    try {
      const response = await axios.post(
        "https://altcaseinvestor.we3.in/api/v2/onboarding/getkycstatus",
        {
          investor_id: getData("userData")?.investor_id,
        },
      );
      console.log("dataresponse", response);
      if (response?.data?.status === 200) {
        console.log("responsesss", response?.data?.data);
        setDgLockerReturnData(response?.data?.data);
        if (!response?.data?.data?.is_pan_matching) {
          toast.error(
            "PAN numbers do not match.  Please check both sides and try again.",
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  useEffect(() => {
    const tempPanNumber = getLocalStorageData("tempPan");
    if (tempPanNumber) setPan(tempPanNumber);
  }, []);
  const callFirstApi = useCallback(async (data) => {
    try {
      const response = await axios.post(
        `http://altcaseinvestor.we3.in/api/v2/onboarding/digilocker-sso/callback?${data}`,
      );
      console.log("First API call", response.data);
      return response.data; // Return the data to be used later
    } catch (error) {
      console.error("Error in first API call:", error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const backFromDgLocker = getLocalStorageData("tempPan");
      if (backFromDgLocker) {
        console.warn("Calling the first API to save the analysis database");
        // console.log(location?.search?.slice(1));
        // const da = location?.search?.slice(1);
        console.log("before coming into if block for the main part");
        if (getLocalStorageData("tempPan") && location?.search?.slice(1)) {
          const firstApiResponse = await callFirstApi(
            location?.search?.slice(1),
          ); // Wait for the first API call to complete
          if (firstApiResponse) {
            console.log(
              "Received response from first API, calling the second API.",
            );
            getkycstatus(firstApiResponse); // Pass the data from the first API call to the second
          }
        }
      }
    };

    fetchData(); // Call the fetchData function immediately
  }, []);

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

  useEffect(() => {
    const scrollTo = (to, duration) => {
      const start = window.pageYOffset;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    };

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    scrollTo(140, 200);
  }, []);

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
  const location = useLocation();
  const [decentroRedirectURL, setDecentroRedirectURL] = useState("");

  useEffect(() => {
    // const queryParams = new URLSearchParams(location.search);
    // const transactionId = queryParams.get("initiation_decentro_transaction_id");
    // console.log(location?.search?.slice(1));
    // console.log("transactio nId", transactionId);
    // setDecentroRedirectURL(transactionId);
    // if (transactionId) {
    //   console.warn("call ansz api");
    // }
  }, []);

  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <>
          <div
            id="header"
            className="medium-text flex flex-col items-end justify-between md:flex-row md:items-center"
          >
            <div
              id="leftIcon"
              className="flex items-center  gap-2 self-start md:gap-4 "
            >
              <LeftArrow
                width="24"
                height="24"
                onClickFun={() => navigate("/verifyMobile")}
              />
              <h2 className="bold-text text-[22px] font-bold leading-8 tracking-[-0.5] text-[#1B1B1B]">
                KYC Verification
              </h2>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 md:gap-2 "
              onClick={verifyLater}
            >
              <WatchIcon />
              <p className="medium-text  leading-7 tracking-[-0.3] text-[#455468]">
                Verify Later
              </p>
            </button>
          </div>
          <div>
            <p
              id="content"
              className="regular-text text-left font-normal   leading-7 tracking-[-0.3] text-[#1B1B1B]"
            >
              To make you investment ready we need to do your KYC. <br /> Please
              enter your PAN.
            </p>
          </div>
        </>

        <div id="first-input" className="flex flex-col items-start gap-1 ">
          <label
            htmlFor="panInput"
            className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
          >
            PAN
          </label>

          <input
            type="text"
            id="panInput"
            maxLength={10}
            disabled={false}
            autoFocus
            value={pan}
            onChange={handlePan}
            placeholder="Enter PAN number"
            className={clsx(
              `medium-text placeholder:medium-text w-full rounded-md border border-[#AFBACA] px-[14px] py-[10px]  text-sm leading-6 tracking-[-0.2] placeholder:text-[15px]`,
              {
                "outline-custom-green": panValid || pan.length !== 10,
                "border-2 border-red-500 outline-red-500":
                  (!panValid && pan.length === 10) || isPanExistFromDb,
              },
            )}
          />
          {!panValid && pan.length === 10 && (
            <p className="mt-[-3px] text-[11px]  text-red-600">
              The PAN you entered is not valid. Please check the number.
            </p>
          )}
        </div>
        <div id="second-input" className="flex flex-col items-start gap-1">
          <label
            htmlFor="DOBInput"
            className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
          >
            Date of Birth
          </label>
          <label
            htmlFor="DOBInput"
            className={clsx(
              `medium-text flex w-full items-center rounded-md border bg-[#F9FAFB]`,
              {
                "border-2 border-custom-green": isDOBFocused,
                "border-[#AFBACA]": !isDOBFocused,
                // "border-red-600 border-2": !emailValid,
                // "border-2 border-[#AFBACA]": emailValid,
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
              <img src="/images/Calendar.svg" alt="" />
            </div>
            <input
              id="DOBInput"
              disabled
              type="text"
              value={""}
              onChange={handleDOB}
              placeholder="DD/MM/YYYY"
              className={clsx(
                "medium-text placeholder:medium-text w-full rounded-md border border-none border-[#AFBACA] bg-[#F9FAFB] px-[1px]  text-sm leading-6 tracking-[-0.2]  outline-none placeholder:text-[15px]",
                {
                  "py-[9px]": isDOBFocused,
                  "border-[#AFBACA] py-[10px]": !isDOBFocused,

                  // "border-red-700": !emailValid && emailTouched,
                },
              )}
              onFocus={handleDOBFocus}
              onBlur={handleDOBBlur}
            />
          </label>
        </div>
        <div id="third-input" className="flex flex-col items-start gap-1">
          <label
            htmlFor="nameInput"
            className="medium-text text-sm  leading-6 tracking-[-0.2] text-[#3D4A5C]"
          >
            Full Name
          </label>
          <input
            id="nameInput"
            // value={fullName}
            value={panInfo?.data?.name ? panInfo?.data?.name : fullName}
            onChange={handleFullNameChange}
            type="text"
            disabled={true ? true : false}
            placeholder="Enter your full name as on PAN"
            className={`medium-text placeholder:medium-text w-full rounded-md border border-[#AFBACA] bg-white px-[14px] py-[10px]  text-sm leading-6 tracking-[-0.2] outline-custom-green placeholder:text-[15px] ${
              panInfo ? "opacity-60" : "opacity-100"
            } `}
          />
        </div>
        <div id="fourth-input" className="flex flex-col items-start gap-1">
          <label
            htmlFor="emailInput"
            className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
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
                "medium-text placeholder:medium-text w-full rounded-md border border-none border-[#AFBACA] bg-white px-[1px]  text-sm leading-6 tracking-[-0.2]  outline-none placeholder:text-[15px]",
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
          disabled={!panValid || !emailValid || isPanExistFromDb}
          className={`medium-text mt-3 md:mt-4 ${
            panValid && emailValid && !isPanExistFromDb
              ? "bg-custom-green text-[#fff]"
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } ${loading ? "opacity-60" : "opacity-100"}`}
        />
      </LoginFormWrapper>

      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Kyc;

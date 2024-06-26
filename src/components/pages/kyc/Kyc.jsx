import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import Email from "../../../Icons/EmailIcons";

import { useNavigate } from "react-router-dom";
import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";

import Button from "../../atoms/button/Button";
import { validateEmail, validatePanNumber } from "../../../utils/validation";
import { usePost } from "../../../customHooks/usePost";
import { getData } from "../../../utils/Crypto";
import WatchIcon from "../../../Icons/WatchIcon";
import toast from "react-hot-toast";
import LeftArrow from "../../../Icons/LeftArrow";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch } from "react-redux";
import { savePan, verifyPan } from "../../../redux/actions/kyc";

const Kyc = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [panInfo, setPanInfo] = useState(null);
  const { postData, loading } = usePost();
  const [isPanExistFromDb, setIsPanExistFromDb] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [pan, setPan] = useState("");
  const [panValid, setIspanValid] = useState(true);
  const [emailValid, setIsEmailValid] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
    function returnToken() {
      return getData("userData")?.access_token;
    }
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
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // const handlePan = (e) => {
  //   const inputValue = e.target.value.replace(/\s/g, "");
  //   const upperCaseValue = inputValue.toUpperCase();
  //   setPan(upperCaseValue);

  //   setIspanValid(validatePanNumber(upperCaseValue));
  // };
  const handlePan = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    const upperCaseValue = inputValue.toUpperCase();
    setPan(upperCaseValue);

    setIspanValid(validatePanNumber(upperCaseValue));
  };

  useEffect(() => {
    const verifyPans = async () => {
      if (panValid && pan.length === 10) {
        try {
          fetchWithWait({ dispatch, action: verifyPan({ pan_no: pan }) }).then(
            (response) => {
              // Your code handling the response
              console.log("helo worolssd , ", response);
              if (response.status !== 409) {
                setIsPanExistFromDb(false);
                setPanInfo(response);
              } else {
                setIsPanExistFromDb(true);
                toast.error("This PAN is already registered.");
              }
            },
          );
        } catch (error) {
          console.log(error?.response?.data?.message);
          setIsPanExistFromDb(true);
          setPanInfo(null);
          toast.error("This PAN is already registered.");
        }
      }
    };

    verifyPans();
  }, [pan, pan.length, panValid, postData]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };
  const verifyLater = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postData(
        "/ob/skipprofile",
        { investor_id: getData("userData")?.investor_id },
        getData("userData")?.access_token,
      );

      if (data?.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("somethings went wrong");
    }
  };
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
  const handleFullNameChange = (e) => {
    const input = e.target.value;
    if (fullName.length === 0 && input === " ") {
      return;
    }
    const formattedInput = input.replace(/\s+/g, " ");
    setFullName(formattedInput);
  };
  console.log("emailValid", emailValid);
  useEffect(() => {
    localStorage.setItem(
      "timerStart",
      JSON.stringify({
        one: 0,
        two: 1,
      }),
    );
  }, []);

  console.log(getData("userData")?.access_token);

  //fix the verify pan, issue .
  const handlePanInfoUpdate = useCallback(() => {
    if (pan.length !== 10) {
      setPanInfo(null);
    }
  }, [pan]);

  useEffect(() => {
    handlePanInfoUpdate();
  }, [handlePanInfoUpdate, pan.length]);

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
            disabled={panInfo?.data?.name ? true : false}
            placeholder="Enter your full name as on PAN"
            className={`medium-text placeholder:medium-text w-full rounded-md border border-[#AFBACA] px-[14px] py-[10px]  text-sm leading-6 tracking-[-0.2] outline-custom-green placeholder:text-[15px] ${
              panInfo ? "opacity-60" : "opacity-100"
            } `}
          />
        </div>
        <div id="third-input" className="flex flex-col items-start gap-1">
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
                "border-2 border-custom-green": isFocused,
                "border-[#AFBACA]": !isFocused,
                // "border-red-600 border-2": !emailValid,
                "border-2 border-[#AFBACA]": emailValid,
                // "border-red-600 border-2": !emailValid && isFocused,
              },
            )}
            disabled={false}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
                  "py-[9px]": isFocused,
                  "border-[#AFBACA] py-[10px]": !isFocused,

                  // "border-red-700": !emailValid && emailTouched,
                },
              )}
              onFocus={handleFocus}
              onBlur={handleBlur}
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

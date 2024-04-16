import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import toast from "react-hot-toast";

import Header from "./components/Header";
import TermsOfService from "./components/TermsOfService";

import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";
import Button from "../../atoms/button/Button";
import { usePost } from "../../../customHooks/usePost";
import { getData, setData } from "../../../utils/Crypto";
import { showToastWithCopy } from "../../../utils/toastNotifications";

const Login = () => {
  const { postData, loading, error } = usePost();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // const handleMobileNumberChange = (event) => {
  //   const inputNumber = event.target.value;

  //   const regex = /^[1-9]\d*$/;

  //   if (regex.test(inputNumber) && inputNumber.length <= 10) {
  //     setMobileNumber(inputNumber);
  //     setIsValid(inputNumber.length === 10 && /^\d+$/.test(inputNumber));
  //   } else if (inputNumber === "") {
  //     setMobileNumber(inputNumber);
  //     setIsValid(false);
  //   }
  // };

  const handleMobileNumberChange = useCallback(
    ({ target: { value: inputNumber } }) => {
      const regex = /^[1-9]\d*$/;

      if (regex.test(inputNumber) && inputNumber.length <= 10) {
        setMobileNumber(inputNumber);
        setIsValid(inputNumber.length === 10 && /^\d+$/.test(inputNumber));
      } else if (inputNumber === "") {
        setMobileNumber(inputNumber);
        setIsValid(false);
      }
    },
    [setMobileNumber, setIsValid]
  );

  const handleContinueClick = useCallback(
    async (e) => {
      e.preventDefault();
      setMobileNumber("");
      try {
        const response = await postData("/login/sendotp", {
          country_code: "91",
          mobile_no: mobileNumber,
          org_id: "web",
          request_source: "AC01",
        });

        setData("mobile", mobileNumber);

        if (response?.data?.status === 200) {
          navigate("/verifyMobile");
          localStorage.setItem(
            "timerStart",
            JSON.stringify({
              one: 1,
              two: 1,
            })
          );

          toast.success("OTP sent successfully!");
          showToastWithCopy(response.data?.data?.otp);
        }
      } catch (error) {
        toast.error("somethings went wrong.");
      }
    },
    [mobileNumber, navigate, setData, showToastWithCopy]
  );
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    console.log("first push");
    if (error) {
      toast.error("something went wrong");
    }
  }, []);

  useEffect(() => {
    const number = getData("mobile", mobileNumber);
    setMobileNumber(number);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // if we dont want to enable the button when user  come back to the lgoin page then remove this below useEffect.
  useEffect(() => {
    const storedNumber = getData("mobile", mobileNumber);
    if (storedNumber && /^\d{10}$/.test(storedNumber)) {
      setMobileNumber(storedNumber);
      setIsValid(true); // Enable the button
    } else {
      setMobileNumber("");
      setIsValid(false); // Disable the button
    }
  }, []);

  return (
    <>
      <LoginFormWrapper onSubmit={handleContinueClick}>
        <Header />

        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="mobileInput"
            className=" flex items-center text-sm leading-6 tracking-[-0.2] font-semibold text-[#3D4A5C] w-fit "
          >
            Mobile Number&nbsp;
            <span className="text-red-500 font-bold text-[15px]"> *</span>
          </label>

          <label
            className="flex flex-col gap-3"
            id="focus"
            htmlFor="mobileInput"
          >
            <div
              className={clsx("flex items-center rounded-md border ", {
                "border-custom-green  border-2": isFocused,

                "border-[#AFBACA] ": !isFocused,
              })}
            >
              <div
                id="show-country "
                className={clsx(
                  " px-[14px] flex gap-1 items-center cursor-pointer text-[#555a61] ",
                  {
                    "py-[7px]": isFocused,

                    "py-2 ": !isFocused,
                  }
                )}
              >
                IN <BsChevronDown />
              </div>

              <input
                ref={inputRef}
                type="text"
                id="mobileInput"
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={10}
                value={mobileNumber}
                pattern="/[0-9]/"
                placeholder="Enter mobile number"
                onChange={handleMobileNumberChange}
                className="placeholder:font-medium placeholder:text-[15px] flex-1 rounded-r-md text-custom-text-gray no-spinner outline-none font-semibold"
              />
            </div>
            <p
              id="content"
              className="text-custom-text-light-gray font-normal text-[13px] leading-6 tracking-[-0.2]"
            >
              You’ll receive an SMS with an OTP to verify your mobile number
            </p>
          </label>
        </div>

        <TermsOfService />

        <Button
          onClick={handleContinueClick}
          label="Continue"
          disabled={!isValid || loading}
          className={`${
            isValid
              ? "bg-custom-green text-[#fff] "
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } ${loading ? "opacity-60 " : "opacity-100 "}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Login;

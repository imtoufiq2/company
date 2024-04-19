import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TermsOfService from "../../organism/TermsAndConditions";

import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";
import Button from "../../atoms/button";
import { usePost } from "../../../customHooks/usePost";
import { getData, setData } from "../../../utils/Crypto";
import { showToastWithCopy } from "../../../utils/toastNotifications";
import { useSelector, useDispatch } from "react-redux";
import TextDisplay from "../../atoms/textContent/TextContent";
import CustomInput from "../../atoms/customInput";
import LoginBoxHeader from "../../organism/loginBoxHeader";
import CountrySelector from "../../molecules/countrySelector";
import { fetchWithWait } from "../../../utils/method";
import { REQUEST_OTP_FOR_MOBILE } from "../../../redux/types/login";
import { requestOtpForMobile } from "../../../redux/actions/login";

const Login = () => {
  const { loading, error } = usePost();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const globalMobileNumber = useSelector(
    (state) => state.loginPage.mobileNumber,
  );
  // console.log("hey-->", globalMobileNumber);

  const handleMobileNumberChange = useCallback(
    ({ target: { value: inputNumber } }) => {
      const regex = /^[6-9]\d*$/;

      if (regex.test(inputNumber) && inputNumber.length <= 10) {
        setMobileNumber(inputNumber);
        setIsValid(inputNumber.length === 10 && /^\d+$/.test(inputNumber));
      } else if (inputNumber === "") {
        setMobileNumber(inputNumber);
        setIsValid(false);
      }
    },
    [setMobileNumber, setIsValid],
  );

  const handleContinueClick = useCallback(
    async (e) => {
      e.preventDefault();

      // dispatch(getMobileNumber(mobileNumber));

      try {
        // const response = await postData("/login/sendotp", {
        //   country_code: "91",
        //   mobile_no: mobileNumber,
        //   org_id: "web",
        //   request_source: "AC01",
        // });

        let data = {
          country_code: "91",
          mobile_no: mobileNumber,
          org_id: "web",
          request_source: "AC01",
        };

        fetchWithWait({ dispatch, action: requestOtpForMobile(data) }).then(
          (response) => {
            // Your code handling the response
            console.log("rs=================uuuuuuuuuuuuu", response);
            if (response?.status === 200) {
              navigate("/verifyMobile");
              localStorage.setItem(
                "timerStart",
                JSON.stringify({
                  one: 1,
                  two: 1,
                }),
              );

              toast.success("OTP sent successfully!");
              showToastWithCopy(response?.data?.otp);
            }
          },
        );

        setData("mobile", mobileNumber);
        setMobileNumber("");
      } catch (error) {
        toast.error("somethings went wrong.");
      }
    },
    [mobileNumber, navigate, setData, showToastWithCopy],
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
    // console.log("first push");
    if (error) {
      toast.error("something went wrong");
    }
  }, []);

  useEffect(() => {
    const number = getData("mobile", mobileNumber);
    setMobileNumber(globalMobileNumber);
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
        <LoginBoxHeader />
        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="mobileInput"
            className=" flex w-fit items-center text-sm font-semibold leading-6 tracking-[-0.2] text-[#3D4A5C] "
          >
            Mobile Number&nbsp;
            <span className="text-[15px] font-bold text-red-500"> *</span>
          </label>

          <label
            className="flex flex-col gap-3"
            id="focus"
            htmlFor="mobileInput"
          >
            <div
              className={clsx("flex items-center rounded-md border ", {
                "border-2  border-custom-green": isFocused,

                "border-[#AFBACA] ": !isFocused,
              })}
            >
              <CountrySelector isFocused={isFocused} />
              <CustomInput
                inputRef={inputRef}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                maxLength={10}
                value={mobileNumber}
                pattern="/[0-9]/"
                placeholder="Enter mobile number"
                onChange={handleMobileNumberChange}
                className="no-spinner flex-1 rounded-r-md font-semibold text-custom-text-gray outline-none placeholder:text-[15px] placeholder:font-medium"
              />
            </div>

            <TextDisplay
              id="content"
              text="You’ll receive an SMS with an OTP to verify your mobile number"
              elementType="p"
              className="w-full whitespace-normal text-[13px] font-normal leading-6 tracking-[-0.2] text-custom-text-light-gray"
            />
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

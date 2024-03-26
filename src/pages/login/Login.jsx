import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import Header from "./components/Header";
import TermsOfService from "./components/TermsOfService";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const handleMobileNumberChange = (event) => {
    const inputNumber = event.target.value;

    if (inputNumber.length > 10) {
      return;
    }
    setMobileNumber(inputNumber);
    setIsValid(inputNumber.length === 10 && /^\d+$/.test(inputNumber));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // const handleContinueClick = async (e) => {
  //   e.preventDefault();
  //   console.log(mobileNumber);
  //   setMobileNumber("");
  //   setLoading(true); // Set loading to true immediately

  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Replace this with your actual API call
  //     console.log("API call completed");
  //     navigate("/verifyMobile");
  //   } catch (error) {
  //     console.log(error);
  //     // Handle error, e.g., show an error message to the user
  //   } finally {
  //     setLoading(false); // Set loading back to false after the operation is complete
  //   }
  // };

  const handleContinueClick = async (e) => {
    e.preventDefault();
    console.log(mobileNumber);
    setMobileNumber("");
    setLoading(true);
    try {
      // debugger;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      //remove the setTimeout and write the api logic

      navigate("/verifyMobile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  console.log("handleFocus", isFocused);

  const handleBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <LoginFormWrapper onSubmit={handleContinueClick}>
        <Header />

        <div className="flex flex-col gap-[6px]">
          <label
            htmlFor="mobileInput"
            className="text-sm leading-6 tracking-[-0.2] font-semibold text-[#3D4A5C] w-fit "
          >
            Mobile Number
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
                  " px-[14px] flex gap-1 items-center cursor-pointer text-[#AFBACA] ",
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
                type="number"
                id="mobileInput"
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={10}
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className=" flex-1 rounded-r-md text-custom-text-gray no-spinner outline-none font-semibold"
              />
            </div>
            <p
              id="content"
              className="text-custom-text-light-gray font-normal text-sm leading-6 tracking-[-0.2]"
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

import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";

import LeftArrow from "../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";

const VerifyMobile = () => {
  const navigate = useNavigate();
  let numberOfDigits = 6;

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);
  const inputRefs = useRef([]);

  React.useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  // function handlePaste(e, index) {
  //   console.log(e.clipboardData.getData("text"));
  //   // Prevent the default paste behavior
  //   e.preventDefault();

  //   // Get the pasted OTP as a string
  //   const pastedOtp = e.clipboardData.getData("text");

  //   // Check if the pasted OTP is valid (e.g., 6 digits long)
  //   if (pastedOtp.length === numberOfDigits) {
  //     // Split the pasted OTP into an array of digits
  //     const otpDigits = pastedOtp.split("");

  //     // Update the OTP state with the pasted digits
  //     setOtp(otpDigits);

  //     // Focus the next input field if there is one
  //     if (index < numberOfDigits - 1) {
  //       otpBoxReference.current[index + 1].focus();
  //     }
  //   }
  // }
  function handlePaste(e, index) {
    // Prevent the default paste behavior
    e.preventDefault();

    // Get the pasted OTP as a string
    const pastedOtp = e.clipboardData.getData("text");

    // Check if the pasted OTP is exactly 6 digits long
    if (pastedOtp.length === numberOfDigits) {
      // Split the pasted OTP into an array of digits
      const otpDigits = pastedOtp.split("");

      // Update the OTP state with the pasted digits

      setOtp(otpDigits);

      // Focus the next input field if there is one
      if (index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    } else {
      // If the pasted OTP is not 6 digits long, show an alert
      window.alert("Please enter exactly 6 digits for the OTP.");
    }
  }

  function handleChange(value, index) {
    // Check if the value is a single digit or empty
    if (value.length <= 1) {
      let newArr = [...otp];
      newArr[index] = value;
      setOtp(newArr);

      if (value && index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    } else if (value.length > 1) {
      // If more than one character is entered, take the last character
      let newDigit = value.charAt(value.length - 1);
      let newArr = [...otp];
      newArr[index] = newDigit;
      setOtp(newArr);

      if (newDigit && index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    }
  }

  function handleBackspaceAndEnter(e, index) {
    // Check if the backspace key is pressed and the input is empty
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      // Clear the current input field
      otpBoxReference.current[index].value = "";
      // Move the focus to the previous input field
      otpBoxReference.current[index - 1].focus();
    }
    // Check if the enter key is pressed and the input is not empty
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      // Move the focus to the next input field
      otpBoxReference.current[index + 1].focus();
    }
  }

  let correctOTP = "123456";
  useEffect(() => {
    if (otp.join("") !== "" && otp.join("") !== correctOTP) {
      setOtpError("❌ Wrong OTP Please Check Again");
    } else {
      setOtpError(null);
    }
  }, [correctOTP, otp]);

  const isOtpValid = useMemo(() => {
    const otps = otp.filter((cur) => cur !== "");
    if (otps.length === 6) return true;
    return false;
  }, [otp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    navigate("/kyc");
  };
  useEffect(() => {
    if (otpBoxReference.current.length > 0) {
      otpBoxReference.current[0].focus();
    }
  }, []);
  return (
    <>
      <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white">
        <form
          className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px]"
          onSubmit={handleSubmit}
        >
          <h3 className=" leading-8  flex gap-2 items-center">
            <LeftArrow
              width="24"
              height="24"
              onClickFun={() => navigate("/login")}
            />
            <span className="text-[24px] font-bold leading-8 tracking-[-0.5] text-[##B1B1B] ">
              Verify Mobile
            </span>
          </h3>

          <div id="edit" className="flex  justify-between">
            <div id="left" className="tracking-[-0.3] text-[#1B1B1B]">
              <p className="font-normal  text-base leading-7 ">
                Please enter the OTP sent on
              </p>
              <h4 className=" text-[20px] font-semibold leading-8 ">
                +91 98765 43210
              </h4>
            </div>

            <img
              src="/images/pencil-Button.svg"
              alt="edit icon"
              className="cursor-pointer"
            />
          </div>
          <div
            id="input libray"
            className="font-normal text-sm leading-6 tracking-[-0.2] flex gap-3"
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                type="number"
                value={digit}
                inputMode="numeric"
                maxLength={1}
                placeholder="•"
                onPaste={(e) => handlePaste(e, index)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                ref={(reference) =>
                  (otpBoxReference.current[index] = reference)
                }
                className="w-[58px] focus:outline-[#AFBACA] no-spinner h-[56px] border rounded-md text-center text-[20px] tracking-[-0.3] font-medium leading-8"
              />
            ))}
          </div>
          {/* ======== */}

          <div
            id="didnt-recieved"
            className="flex justify-between items-center mt-3"
          >
            <p className="font-normal tracking-[-0.3] leading-7 text-[#5E718D]">
              Didn’t receive OTP?
            </p>

            {true ? (
              <p className="font-normal  tracking-[-0.3]">
                Resend in <span className="font-bold">00:30</span>
              </p>
            ) : (
              <button className="px-[15px] py-2 text-sm border  rounded-md text-[#55D976] leading-6 tracking-[-0.2] ">
                Resend OTP
              </button>
            )}
          </div>
          <button
            type="submit"
            className={clsx(
              "w-full h-[56px] flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md bg-[#F0F3F9] text-[#AFBACA] ",
              isOtpValid
                ? "bg-custom-green text-[#fff] cursor-pointer"
                : "bg-[#F0F3F9] text-[#AFBACA] cursor-no-drop"
            )}
          >
            Verify
          </button>
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default VerifyMobile;

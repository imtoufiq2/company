import React, { useEffect, useMemo, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import Header from "./components/Header";
import Button from "../../components/Button";
import MobileInfo from "./components/MobileInfo";
import { usePost } from "../../hooks/usePost";
import toast from "react-hot-toast";
import { getData, setData } from "../../utils/Crypto";

const VerifyMobile = () => {
  let numberOfDigits = 6;
  const navigate = useNavigate();
  const { postData, loading, error } = usePost();

  const localStorageData = JSON.parse(localStorage.getItem("timerStart"));

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));

  const otpBoxReference = useRef([]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  function handlePaste(e, index) {
    e.preventDefault();

    const pastedOtp = e.clipboardData.getData("text").trim();

    if (/^\d+$/.test(pastedOtp)) {
      if (pastedOtp.length === numberOfDigits) {
        const otpDigits = pastedOtp.split("");

        setOtp(otpDigits);

        if (index < numberOfDigits - 1) {
          otpBoxReference.current[index + 1].focus();
        }
      } else {
        toast("Please enter exactly 6 digits for the OTP", {
          icon: "⚠️",
          iconTheme: {
            primary: "#FFA500",
            secondary: "#000000",
          },
          style: {
            borderRadius: "10px",
            background: "#FFA500",
            color: "#fff",
          },
        });
      }
    } else {
      toast("Please enter only numeric characters for the OTP", {
        icon: "⚠️",
        iconTheme: {
          primary: "#FFA500",
          secondary: "#000000",
        },
        style: {
          borderRadius: "10px",
          background: "#FFA500",
          color: "#fff",
        },
      });
    }
  }

  console.log("re render");
  function handleChange(value, index) {
    if (value.length <= 1 && !isNaN(value) && value !== "e") {
      let newArr = [...otp];
      newArr[index] = value;
      setOtp(newArr);

      if (value && index < numberOfDigits - 1) {
        otpBoxReference.current[index + 1].focus();
      }
    } else if (value.length > 1) {
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
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index].value = "";
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  const isOtpValid = useMemo(() => {
    const otps = otp.filter((cur) => cur !== "");
    if (otps.length === 6) return true;
    return false;
  }, [otp]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postData("/login/verifyotp", {
        country_code: "91",
        mobile_no: getData("mobile"),
        org_id: "AC01",
        otp: otp.join(""),
      });
      console.log("==========", data);
      //       {
      //     "status": 200,
      //     "message": "success, investor verified",
      //     "data": {
      //         "investor_id": 16,
      //         "is_profile_skipped": 1,
      //         "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiZXhwIjoxNzExNjA4NDI4fQ.X370w68waNv636my2JF27JFHjSlKKfjRrETgHohlEXg",
      //         "refresh_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiZXhwIjoxNzExNjEyMDI4fQ.W68TRAscqeh0LQJDs8Ej8gL_UVdqMn3TlAsiaEa4_30"
      //     }
      // }

      // ==============
      // {
      //     "status": 200,
      //     "message": "success, investor verified",
      //     "data": {
      //         "investor_id": 119,
      //         "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTksImV4cCI6MTcxMTYwODQ4N30.uFWf5JfKVBYJbSCWeBrTwjOFubhamuIYPoV-OepndpY",
      //         "refresh_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMTksImV4cCI6MTcxMTYxMjA4N30.UaNeuZPne9pcWfMKfE0ne6pdIHfJIdq7b6pSRc6VRNc"
      //     }
      // }
      if (
        (data?.status === 200 || data?.status === 201) &&
        data.data?.is_profile_skipped
      ) {
        toast.success(data?.message);
        console.log(data?.data);
        setData("userData", data?.data);
        navigate("/");
        localStorage.setItem(
          "timerStart",
          JSON.stringify({
            one: 0,
            two: 1,
          })
        );
      }
      if (
        (data?.status === 200 || data?.status === 201) &&
        !data.data?.is_profile_skipped
      ) {
        toast.success(data?.message);
        console.log(data?.data);
        setData("userData", data?.data);
        navigate("/kyc");
        localStorage.setItem(
          "timerStart",
          JSON.stringify({
            one: 0,
            two: 1,
          })
        );
      }
    } catch (error) {
      setOtp(new Array(numberOfDigits).fill(""));
      toast.error("OTP Invalid / Expired. Request a new one.");
    }
  };
  useEffect(() => {
    if (otpBoxReference.current.length > 0) {
      otpBoxReference.current[0].focus();
    }
  }, []);

  const [timer, setTimer] = useState(30);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    let interval;
    if (showTimer && timer > 0 && localStorageData.one === 1) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowTimer(false);
    }
    return () => clearInterval(interval);
  }, [localStorageData.one, showTimer, timer]);

  const formattedTimer = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, [timer]);

  const handleResendClick = async (e) => {
    e.preventDefault();
    setOtp(new Array(numberOfDigits).fill(""));

    try {
      const { data } = await postData("/login/resendotp", {
        country_code: "91",
        mobile_no: getData("mobile"),
        org_id: "AC01",
        otp: "454567",
      });

      if (data.status === 200) {
        toast.success("OTP has been resent successfully!");
        // toast.success(data?.data?.otp);
        localStorage.setItem(
          "timerStart",
          JSON.stringify({
            one: 1,
            two: 1,
          })
        );
        toast(
          (t) => (
            <span>
              {data?.data?.otp}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(data?.data?.otp);
                  toast.dismiss(t.id);
                }}
                className="border-2 border-gray-300 rounded-md ml-2 px-2"
              >
                Copy
              </button>
            </span>
          ),
          {
            duration: 5000,
          }
        );
      }
      setTimer(30);
      setShowTimer(true);
    } catch (error) {}
  };

  useEffect(() => {
    if (error) {
      toast.error("something went wrong");
    }
  }, [error]);

  useEffect(() => {
    console.log("hello", getData("mobile"));
    if (!getData("mobile")) {
      return navigate("/login");
    }
  }, []);
  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <Header />

        <div id="edit" className="flex  justify-between">
          <MobileInfo mobileNumber={`+91 ${getData("mobile")}`} />

          <img
            src="/images/pencil-Button.svg"
            alt="edit icon"
            className="cursor-pointer"
            onClick={() => {}}
          />
        </div>
        <div
          id="input libray"
          className="font-normal text-sm leading-6 tracking-[-0.2] flex gap-1 md:gap-3 items-center  justify-between"
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
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              className="placeholder:text-sm max-w-[58px] w-full focus:outline-[#AFBACA] no-spinner h-[53px] border rounded-md text-center text-[20px] tracking-[-0.3] font-medium leading-8"
            />
          ))}
        </div>

        <div
          id="didnt-recieved"
          className="flex justify-between items-center mt-3"
        >
          <p className="font-normal text-[14px] tracking-[-0.3] leading-7 text-[#5E718D]">
            Didn’t receive OTP?
          </p>

          {!!timer && localStorageData.one === 1 ? (
            //logic to reset  timer
            <p
              className="font-normal  tracking-[-0.3] text-[14px] "
              onClick={() => {}}
            >
              Resend in <span className="font-bold">{formattedTimer}</span>
            </p>
          ) : (
            <button
              onClick={(e) => handleResendClick(e)}
              className="px-[13px] py-[6px] text-sm border  rounded-md text-[#55D976] leading-6 tracking-[-0.2] "
            >
              Resend OTP
            </button>
          )}
        </div>

        <Button
          label="Verify"
          disabled={!isOtpValid || loading}
          className={`bg-[#F0F3F9] text-[#AFBACA] ${
            isOtpValid ? "bg-custom-green text-[#fff]" : ""
          } ${loading ? "opacity-60" : "opacity-100"}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default VerifyMobile;

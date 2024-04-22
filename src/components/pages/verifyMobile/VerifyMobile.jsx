import React, { useEffect, useMemo, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";
import Header from "../../organism/verifyMobileHeader";
import Button from "../../atoms/button/Button";
import MobileInfo from "../../organism/mobileInfo";
import { usePost } from "../../../customHooks/usePost";
import toast from "react-hot-toast";
import { getData, setData } from "../../../utils/Crypto";
import Image from "../../atoms/Image";
import VerifyMobileApi from "../../../services/verifyMobileApi";
import { useSelector, useDispatch } from "react-redux";
import {
  verifyMobileResendOtp,
  verifyMobileWithOtp,
} from "../../../redux/actions/verifyMobile";
import { fetchWithWait } from "../../../utils/method";
import LoginResentOtp from "../../organism/loginResentOtp";

let VerifyApi = new VerifyMobileApi();

const VerifyMobile = () => {
  let numberOfDigits = 6;
  const navigate = useNavigate();
  const { postData, loading, error } = usePost();

  const localStorageData = JSON.parse(localStorage.getItem("timerStart"));

  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));

  const otpBoxReference = useRef([]);
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const resendOtpData = useSelector((state) => state);

  // useEffect(() => {
  //   let data = {
  //     country_code: "91",
  //     mobile_no: getData("mobile"),
  //     org_id: "AC01",
  //     otp: "454567",
  //   };
  //   dispatch(verifyMobileResendOtp(data));
  // }, []);

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
      // const { data } = await postData("/login/verifyotp", {
      //   country_code: "91",
      //   mobile_no: getData("mobile"),
      //   org_id: "AC01",
      //   otp: otp.join(""),
      // });
      let data = {
        country_code: "91",
        mobile_no: getData("mobile"),
        org_id: "AC01",
        otp: otp.join(""),
      };

      fetchWithWait({ dispatch, action: verifyMobileWithOtp(data) }).then(
        (response) => {
          console.log("response--verifyMobileWithOtp>", response?.data);
          if (
            (response?.status === 200 || response?.status === 201) &&
            response.data?.is_profile_skipped
          ) {
            toast.success(response?.message);
            setData("userData", response?.data);
            navigate("/");
            localStorage.setItem(
              "timerStart",
              JSON.stringify({
                one: 0,
                two: 1,
              }),
            );
          }
          if (
            (response?.status === 200 || response?.status === 201) &&
            !response.data?.is_profile_skipped
          ) {
            toast.success(response?.message);

            setData("userData", response?.data);
            navigate("/kyc");
            localStorage.setItem(
              "timerStart",
              JSON.stringify({
                one: 0,
                two: 1,
              }),
            );
          }
          if (response.status !== (200 || 2001)) {
            toast.error(response.message);
          }
        },
      );
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
      let data = {
        country_code: "91",
        mobile_no: getData("mobile"),
        org_id: "AC01",
        otp: "454567",
      };
      //api call using redux through saga
      fetchWithWait({ dispatch, action: verifyMobileResendOtp(data) })
        .then((response) => {
          if (response.status === 200) {
            toast.success("OTP has been resent successfully!");
            // toast.success(data?.data?.otp);
            // we will remove this line after setting the get call in the backend
            localStorage.setItem(
              "timerStart",
              JSON.stringify({
                one: 1,
                two: 1,
              }),
            );
            // this code also we will remove after getting the otp on the mobile .
            toast(
              (t) => (
                <span>
                  {response?.data?.otp}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(response?.data?.otp);
                      toast.dismiss(t.id);
                    }}
                    className="ml-2 rounded-md border-2 border-gray-300 px-2"
                  >
                    Copy
                  </button>
                </span>
              ),
              {
                duration: 5000,
              },
            );
          }
        })
        .catch((error) => {
          console.error("Error->", error);
        });

      // Here we can call API directly without redux
      // VerifyApi.verifyMobileResendOtp(data).then((response) => {
      //   console.log("response-->", response.data);
      //   if (response.status === 200) {
      //     toast.success("OTP has been resent successfully!");
      //     // toast.success(data?.data?.otp);
      //     localStorage.setItem(
      //       "timerStart",
      //       JSON.stringify({
      //         one: 1,
      //         two: 1,
      //       })
      //     );
      //     toast(
      //       (t) => (
      //         <span>
      //           {response?.data?.otp}
      //           <button
      //             onClick={() => {
      //               navigator.clipboard.writeText(response?.data?.otp);
      //               toast.dismiss(t.id);
      //             }}
      //             className="border-2 border-gray-300 rounded-md ml-2 px-2"
      //           >
      //             Copy
      //           </button>
      //         </span>
      //       ),
      //       {
      //         duration: 5000,
      //       }
      //     );
      //   }
      // });

      // Basic api call
      // const { data } = await postData("/login/resendotp", {
      //   country_code: "91",
      //   mobile_no: getData("mobile"),
      //   org_id: "AC01",
      //   otp: "454567",
      // });

      // if (data.status === 200) {
      //   toast.success("OTP has been resent successfully!");
      //   // toast.success(data?.data?.otp);
      //   localStorage.setItem(
      //     "timerStart",
      //     JSON.stringify({
      //       one: 1,
      //       two: 1,
      //     })
      //   );
      //   toast(
      //     (t) => (
      //       <span>
      //         {data?.data?.otp}
      //         <button
      //           onClick={() => {
      //             navigator.clipboard.writeText(data?.data?.otp);
      //             toast.dismiss(t.id);
      //           }}
      //           className="border-2 border-gray-300 rounded-md ml-2 px-2"
      //         >
      //           Copy
      //         </button>
      //       </span>
      //     ),
      //     {
      //       duration: 5000,
      //     }
      //   );
      // }
      setTimer(30);
      setShowTimer(true);
    } catch (error) {}
  };

  useEffect(() => {
    if (!getData("mobile")) {
      return navigate("/login");
    }
  }, []);
  const handleEditIconClick = () => {
    navigate("/login");
  };
  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit}>
        <Header />

        <div id="edit" className="flex  justify-between">
          <MobileInfo mobileNumber={`+91 ${getData("mobile")}`} />
          <Image
            src={"/images/pencil-Button.svg"}
            alt="edit icon"
            className="cursor-pointer"
            onClick={handleEditIconClick}
          />
        </div>
        <div
          id="input libray"
          className="flex items-center justify-between gap-1 text-sm font-normal leading-6 tracking-[-0.2]  md:gap-3"
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
              className="no-spinner h-[53px] w-full max-w-[58px] rounded-md border text-center text-[20px] font-medium leading-8 tracking-[-0.3] placeholder:text-sm focus:outline-[#AFBACA]"
            />
          ))}
        </div>
        <LoginResentOtp
          timer={timer}
          localStorageData={localStorageData}
          formattedTimer={formattedTimer}
          handleResendClick={handleResendClick}
        />
        <Button
          label="Verify"
          disabled={!isOtpValid || loading}
          className={`mt-2 bg-[#F0F3F9] text-[#AFBACA] ${
            isOtpValid ? "bg-custom-green text-[#fff]" : ""
          } ${loading ? "opacity-60" : "opacity-100"}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default VerifyMobile;

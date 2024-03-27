import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import Header from "./components/Header";
import TermsOfService from "./components/TermsOfService";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import Button from "../../components/Button";
import { usePost } from "../../hooks/usePost";
import toast from "react-hot-toast";
import { setData } from "../../utils/Crypto";

const Login = () => {
  const { postData, loading, error } = usePost();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
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

  const handleContinueClick = async (e) => {
    e.preventDefault();

    setMobileNumber("");
    // setLoading(true);
    try {
      // debugger;

      const response = await postData("/login/sendotp", {
        country_code: "91",
        mobile_no: mobileNumber,
        org_id: "web",
        request_source: "AC01",
      });

      setData("mobile", mobileNumber);

      if (response?.data?.status === 200) {
        navigate("/verifyMobile");
        toast.success(response.data.message);
        toast.success(response.data?.data?.otp);
      }
    } catch (error) {
      toast.error("somethings went wrong.");
    } finally {
      // setLoading(false);
    }
  };
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

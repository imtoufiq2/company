import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Email from "../../Icons/EmailIcons";

import Header from "./components/Header";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import { validateEmail, validatePanNumber } from "../../utils/validation";
import Button from "../../components/Button";
import toast from "react-hot-toast";

const Kyc = () => {
  const navigate = useNavigate();

  const [panValid, setIspanValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [emailValid, setIsEmailValid] = useState(false);

  const [pan, setPan] = useState("");
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
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("checking");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handlePan = (e) => {
    const upperCaseValue = e.target.value.toUpperCase();
    setPan(upperCaseValue);
    setIspanValid(validatePanNumber(upperCaseValue));
  };
  useEffect(() => {
    if (panValid && pan.length === 10) {
      //CALL THE API FOR THE VERIFY THE PAN NUMBER
    }
  }, [pan.length, panValid]);
  const handleEmail = (e) => {
    // const upperCaseValue = e.target.value.toUpperCase();
    // setPan(upperCaseValue);
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };
  useEffect(() => {
    if (!panValid && pan.length === 10) {
      toast.error("Please enter a valid PAN number.");
      // toast.error(
      //   "Note: We are processing PAN numbers for individuals, not companies."
      // );
    }
  }, [panValid, pan]);
  return (
    <>
      {/* <LoginFormWrapper onSubmit={handleSubmit}> */}
      <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white ">
        <form
          className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px] "
          onSubmit={handleSubmit}
        >
          <Header />

          <div id="first-input" className="flex flex-col items-start gap-1 ">
            <label
              htmlFor="panInput"
              className="font-semibold text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
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
              // onChange={(e) => setPan(e)}
              onChange={handlePan}
              placeholder="Enter PAN number"
              className={clsx(
                `rounded-md border border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2] px-[14px] py-[10px] w-full`,
                {
                  "outline-custom-green": panValid || pan.length !== 10,
                  "outline-red-500": !panValid && pan.length === 10,
                }
              )}
            />
          </div>
          <div id="second-input" className="flex flex-col items-start gap-1">
            <label
              htmlFor="nameInput"
              className="font-semibold text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
            >
              Full Name
            </label>
            <input
              id="nameInput"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              disabled={false}
              placeholder="Enter your full name as on PAN"
              className="rounded-md border border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2] outline-custom-green px-[14px] py-[10px] w-full  "
            />
          </div>
          <div id="third-input" className="flex flex-col items-start gap-1">
            <label
              htmlFor="emailInput"
              className="font-semibold text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
            >
              Email Address
            </label>
            <label
              htmlFor="emailInput"
              className={clsx(
                `flex w-full items-center rounded-md border bg-white`,
                {
                  "border-custom-green border-2": isFocused,
                  "border-[#AFBACA]": !isFocused,
                }
              )}
              disabled={false}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <div
                id="show-country"
                className="py-2 px-[14px] flex gap-1 items-center cursor-pointer text-[#AFBACA]"
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
                  "rounded-md border bg-white border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2] outline-none px-[1px]  w-full border-none ",
                  {
                    "py-[9px]": isFocused,
                    "border-[#AFBACA] py-[10px]": !isFocused,
                    // "border-red-700": !emailValid && emailTouched,
                  }
                )}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
          </div>

          <Button
            onClick={() => {}}
            label="Continue"
            // disabled={!isValid || loading}
            disabled={!(panValid && emailValid && !loading)}
            // disabled={!isValid || loading}
            className={`mt-3 md:mt-4 ${
              panValid && emailValid
                ? "bg-custom-green text-[#fff]"
                : "bg-[#F0F3F9] text-[#AFBACA] "
            } ${loading ? "opacity-60" : "opacity-100"}`}
          />
          {/* </LoginFormWrapper> */}
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Kyc;

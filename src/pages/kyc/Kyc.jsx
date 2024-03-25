import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Email from "../../Icons/EmailIcons";

import { useNavigate } from "react-router-dom";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import Header from "./components/Header";
import Button from "../../components/Button";

const Kyc = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };
  console.log("handleFocus", isFocused);

  const handleBlur = () => {
    setIsFocused(false);
    console.log("");
  };
  //handleSubmit function
  const handleSubmit = () => {
    console.log("checking");
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit}>
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
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            placeholder="Enter PAN number"
            className="rounded-md border  border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2]  px-[14px] py-[10px] w-full outline-custom-green"
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
              "flex w-full items-center rounded-md border bg-white ",
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={clsx(
                "rounded-md border bg-white border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2] outline-none px-[1px]  w-full border-none ",
                {
                  "py-[9px]": isFocused,
                  "border-[#AFBACA] py-[10px]": !isFocused,
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
          disabled={!isValid || loading}
          className={`mt-3 md:mt-4 ${
            false
              ? "bg-custom-green text-[#fff]"
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } ${false ? "opacity-60" : "opacity-100"}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Kyc;

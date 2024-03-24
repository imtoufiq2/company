import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import Email from "../../Icons/EmailIcons";
import WatchIcon from "../../Icons/WatchIcon";
import LeftArrow from "../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";

const Kyc = () => {
  const navigate = useNavigate();
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
  const isValid = useMemo(() => {
    if (pan.length === 10) {
    }
  }, []);
  return (
    <>
      <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white">
        <form
          className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px]"
          onSubmit={handleSubmit}
        >
          <div
            id="header"
            className="flex flex-col md:flex-row items-end md:items-center justify-between"
          >
            <div
              id="leftIcon"
              className="flex self-start  items-center gap-2 md:gap-4 "
            >
              <LeftArrow
                width="24"
                height="24"
                onClickFun={() => navigate(-1)}
              />
              <h2 className="font-bold text-2xl leading-8 tracking-[-0.5] text-[#1B1B1B]">
                KYC Verification
              </h2>
            </div>
            <div className="flex items-center gap-1 md:gap-2 cursor-pointer">
              <WatchIcon />
              <p className="font-semibold  leading-7 tracking-[-0.3] text-[#455468]">
                Verify Later
              </p>
            </div>
          </div>
          <div>
            <p
              id="content"
              className="font-normal leading-7 tracking-[-0.3] text-left text-[#1B1B1B]"
            >
              To make you investment ready we need to do your KYC. <br /> Please
              enter your PAN.
            </p>
          </div>
          {/* font-weight: 600; color: #1B1B1B; font-size: 14px; */}
          <div id="first-input" className="flex flex-col items-start gap-1">
            <label
              htmlFor="panInput"
              className="font-semibold text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
            >
              PAN
            </label>
            <input
              type="text"
              id="panInput"
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
          <button
            className={clsx(
              "w-full h-[56px] mt-3 md:mt-4 flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md ",
              false
                ? "bg-custom-green text-[#fff] cursor-pointer"
                : "bg-[#F0F3F9] text-[#AFBACA] cursor-no-drop"
            )}
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Kyc;

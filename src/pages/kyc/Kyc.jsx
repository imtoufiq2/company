import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Email from "../../Icons/EmailIcons";

import { useNavigate } from "react-router-dom";
import LoginFormWrapper from "../../components/OnBoardingWrapper";
import Header from "./components/Header";
import Button from "../../components/Button";
import { validateEmail, validatePanNumber } from "../../utils/validation";
import { usePost } from "../../hooks/usePost";
import { getData } from "../../utils/Crypto";
import WatchIcon from "../../Icons/WatchIcon";
import toast from "react-hot-toast";
import LeftArrow from "../../Icons/LeftArrow";

const Kyc = () => {
  const navigate = useNavigate();
  const [panInfo, setPanInfo] = useState(null);
  const { postData, loading, error } = usePost();
  // const [loading, setLoading] = useState(false);
  const [isPanExistFromDb, setIsPanExistFromDb] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [pan, setPan] = useState("");
  const [panValid, setIspanValid] = useState(true);
  const [emailValid, setIsEmailValid] = useState(false);
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

    try {
      const data = await postData(
        "/ob/savepan",
        {
          email_id: email,
          investor_id: getData("userData")?.investor_id,
          investor_name: panInfo?.data?.name,
          org_id: "AC01",
          pan: pan,
        },
        getData("userData")?.access_token
      );

      console.log("inversted", data);
      navigate("/dashboard");
    } catch (error) {
      toast.error("somethings went wrong");
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
    const verifyPan = async () => {
      if (panValid && pan.length === 10) {
        try {
          const { data } = await postData(
            "/ob/verifypan",
            { pan_no: pan },
            getData("userData")?.access_token
          );
          setIsPanExistFromDb(false);
          setPanInfo(data);
        } catch (error) {
          const errorMessage = error?.response?.data?.message;
          setIsPanExistFromDb(true);
          setPanInfo(null);
          toast.error(
            errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)
          );
        } finally {
          // debugger;
        }
      }
    };

    verifyPan();
  }, [pan, pan.length, panValid, postData]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));

    // setIspanValid(validatePanNumber(upperCaseValue));
  };
  const verifyLater = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postData(
        "/ob/skipprofile",
        { investor_id: getData("userData")?.investor_id },
        getData("userData")?.access_token
      );
      if (data?.status === 200) {
        navigate("/dashboard");
        toast.success(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.success("somethings went wrong");
    }
  };

  return (
    <>
      <LoginFormWrapper onSubmit={handleSubmit}>
        {/* <Header setPanInfo={setPanInfo} panInfo={panInfo} /> */}
        <>
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
                onClickFun={() => navigate("/verifyMobile")}
              />
              <h2 className="font-bold text-2xl leading-8 tracking-[-0.5] text-[#1B1B1B]">
                KYC Verification
              </h2>
            </div>
            <button
              className="flex items-center gap-1 md:gap-2 "
              onClick={verifyLater}
            >
              <WatchIcon />
              <p className="font-semibold  leading-7 tracking-[-0.3] text-[#455468]">
                Verify Later
              </p>
            </button>
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
        </>

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
                "outline-red-500":
                  (!panValid && pan.length === 10) || isPanExistFromDb,
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
            // value={fullName}
            value={panInfo ? panInfo?.data?.name : fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            disabled={panInfo ? true : false}
            placeholder="Enter your full name as on PAN"
            className={`rounded-md border border-[#AFBACA] font-semibold text-sm leading-6 tracking-[-0.2] outline-custom-green px-[14px] py-[10px] w-full ${
              panInfo ? "opacity-60" : "opacity-100"
            } `}
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
          // disabled={!(panValid && emailValid) && !isPanExistFromDb}
          disabled={!panValid || !emailValid || isPanExistFromDb}
          className={`mt-3 md:mt-4 ${
            panValid && emailValid && !isPanExistFromDb
              ? "bg-custom-green text-[#fff]"
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } ${loading ? "opacity-60" : "opacity-100"}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Kyc;

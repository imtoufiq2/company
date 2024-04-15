
import React, { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import UpiMethod from "./components/UpiMethod";
import Header from "./components/Header";
import Input from "./components/Input";
import bankLogo from "../../assets/images/bank-logo.svg"
import scanner from "../../assets/images/scanner.svg"
import Button from "../../components/Button";
import { upiData } from "../../constants/staticData";
import {
  validateAccountHolderName,
  validateIFSCCode,
  validateAccountNumber,
} from "../../utils/validation";
import upiIcon from "../../assets/images/upi.svg"
const BankAccountDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isAccountNumberValid, setIsAccountNumberValid] = useState(true);
  const [isIfscValid, setIsIfscValid] = useState(true);
  const [isAccountHolderNameValid, setIsAccountHolderNameValid] =
    useState(true);
  const [accountInfo, setAccountInfo] = useState({
    accountHolderName: "",
    ifsc: "",
    accountNumber: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    // Apply regex validation only to the account number field
    if (name === "accountNumber") {
      const regex = /^[1-9]\d*$/;
      if (!regex.test(value)) {
        // If the value doesn't pass the regex validation, clear the input field
        value = "";
      }
    }

    // Update account info state
    setAccountInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate other fields based on their names
    switch (name) {
      case "accountHolderName":
        setIsAccountHolderNameValid(validateAccountHolderName(value));
        break;
      case "ifsc":
        setIsIfscValid(validateIFSCCode(value));
        break;
      case "accountNumber":
        setIsAccountNumberValid(validateAccountNumber(value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white  mb-9">
        <form className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px] w-full ">
          <Header />
          <p className="font-normal text-[16px] leading-7 text-[#1B1B1B] ">
            Securely add your bank account to become{" "}
            <span className="block">investment ready.</span>
          </p>
          <div id="pamentInfo " className="flex flex-col gap-3">
            <fieldset
              className={` rounded-xl border-[0.5px]  ${
                activeIndex !== 0 ? "border" : "border-[#21B546] "
              }`}
            >
              <legend className="text-right bg-[#FFC700] py-[2] px-2 rounded-md text-[12px] font-medium leading-5 tracking-[-0.2] text-white mr-5">
                Recommended
              </legend>
              <div id="parent" className="flex flex-col gap-5 p-5">
                <div
                  id="top"
                  className="flex justify-between items-center"
                  onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
                >
                  <div className="flex gap-2">
                    <div
                      id="logo"
                      className="w-[38px] h-[38px] rounded-md border flex justify-center items-center"
                    >
                      <img src={upiIcon} alt="UPI-icon" />
                    </div>
                    <div id="addUPI">
                      <h3 className="text-sm font-semibold leading-6 tracking-[-0.2] text-[#1B1B1B]">
                        Add Bank via UPI
                      </h3>
                      <p className="font-normal text-[12px] leading-5 text-[#5E718D] tracking-[-0.2]">
                        Fast and automatic verification
                      </p>
                    </div>
                  </div>
                  <div id="icon">
                    {activeIndex === 0 ? (
                      <BsChevronUp color={"#A3ADBC"} size={20} />
                    ) : (
                      <BsChevronDown color={"#A3ADBC"} size={20} />
                    )}
                  </div>
                </div>
                <div
                  id="bot"
                  className={`${
                    activeIndex !== 0 ? "hidden" : "flex"
                  }  flex-col gap-2 transition-all ease-in-out duration-200 `}
                >
                  <div
                    id="text"
                    className="text-[12px] font-medium leading-5 tracking-[-0.2] text-center text-[#5E718D]"
                  >
                    Scan this QR code using your UPI app
                  </div>
                  <div
                    id="bottomDiv"
                    className="flex gap-8 md:gap-3 flex-col md:flex-row"
                  >
                    <div
                      id="scanner"
                      className="min-w-[118px] min-h-[118px] border m-auto"
                    >
                      <img
                        src={scanner}
                        alt="scanner"
                        className="w-full h-full"
                      />
                    </div>
                    <div
                      id="bottom"
                      className="flex items-center justify-between  w-full h-fit m-auto"
                    >
                      {upiData?.map((upiInfo, index) => {
                        return <UpiMethod key={index} upiInfo={upiInfo} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div
              id="bank-info"
              className={`flex flex-col gap-5 p-5 rounded-xl border-[0.5px]  ${
                activeIndex === 0 ? "border" : "border-[#21B546] "
              }`}
            >
              <div
                id="top"
                className="flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
              >
                <div className="flex gap-2">
                  {" "}
                  <div id="logo" className="w-[38px] h-[38px] border">
                    <img
                      src={bankLogo}
                      alt="bank-logo"
                      className="w-full h-full p-2"
                    />
                  </div>
                  <div id="text">
                    <h3 className="font-medium text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
                      Add Bank Account Manually
                    </h3>
                    <p className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
                      Slow and manual verification
                    </p>
                  </div>
                </div>
                <div id="icon">
                  <BsChevronUp color={"#A3ADBC"} size={20} />
                </div>
              </div>

              <div
                id="middle"
                className={`${
                  activeIndex !== 1 ? "hidden" : "flex"
                } flex flex-col gap-3`}
              >
                <Input
                  label="Bank Account Number"
                  placeholder="Enter account number of your bank"
                  value={accountInfo.accountNumber}
                  onChange={handleChange}
                  name="accountNumber"
                  maxLength={17}
                  // pattern="/[0-9]/"
                  isValid={
                    !isAccountNumberValid &&
                    accountInfo.accountNumber.length >= 9
                  }
                />
                <Input
                  label="IFSC Code"
                  placeholder="Enter IFSC code of your bank account"
                  value={accountInfo.ifsc}
                  onChange={handleChange}
                  maxLength={11}
                  name="ifsc"
                  isValid={!isIfscValid}
                />
                <Input
                  label="Account Holder’s Name"
                  placeholder="Enter name of the account holder"
                  value={accountInfo.accountHolderName}
                  onChange={handleChange}
                  name="accountHolderName"
                  isValid={!isAccountHolderNameValid}
                />
              </div>
            </div>

            <Button
              onClick={() => {}}
              label="Save & Continue"
              className={`mt-0 ${
                activeIndex !== 1 ? "hidden" : "flex"
              } md:mt-0 ${
                isAccountHolderNameValid &&
                accountInfo?.accountHolderName.length >= 2 &&
                isIfscValid &&
                accountInfo?.ifsc.length >= 11 &&
                isAccountNumberValid &&
                accountInfo?.accountNumber?.length >= 9
                  ? "bg-custom-green text-[#fff]"
                  : "bg-[#F0F3F9] text-[#AFBACA] "
              } ${false ? "opacity-60" : "opacity-100"}`}
              disabled={
                !(
                  isAccountHolderNameValid &&
                  accountInfo?.accountHolderName.length >= 2 &&
                  isIfscValid &&
                  accountInfo?.ifsc.length >= 11 &&
                  isAccountNumberValid &&
                  accountInfo?.accountNumber?.length >= 9
                ) || false
              }
            />
          </div>
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default BankAccountDetails;

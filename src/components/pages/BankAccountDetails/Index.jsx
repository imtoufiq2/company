import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../../organism/bankHeader";
import Button from "../../atoms/button/Button";
import {
  validateAccountHolderName,
  validateIFSCCode,
  validateAccountNumber,
} from "../../../utils/validation";
import { upiData } from "../../../constants/staticData";
import OnlinePaymentMode from "../../organism/onlinePaymentMode";
import AddBankAccount from "../../organism/addBankAccount";

const BankAccountDetails = () => {
  const location = useLocation();
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the input based on the field name
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

  //checking is previous page exist
  console.log(
    "checking ",
    isAccountHolderNameValid &&
      accountInfo?.accountHolderName >= 2 &&
      isIfscValid &&
      accountInfo?.ifsc >= 11 &&
      isAccountNumberValid &&
      accountInfo?.accountNumber?.length >= 9
  );

  return (
    <>
      <div className="flex m-auto border-2 w-full md:max-w-[592px] justify-center mt-[72px] rounded-md md:rounded-2xl bg-white  mb-9">
        <form className="py-[60px] md:py-[72px] flex flex-col gap-4 md:gap-5 h-fit scale-[0.85] md:scale-100 px-0 md:px-[72px] w-full ">
          <Header />
          <div id="pamentInfo " className="flex flex-col gap-3">
            <OnlinePaymentMode
              upiData={upiData}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
            />
            <AddBankAccount
              handleChange={handleChange}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              accountInfo={accountInfo}
            />
            <Button
              onClick={() => {}}
              label="Save & Continue"
              className={`mt-0 ${
                activeIndex !== 1 ? "hidden" : "flex"
              } md:mt-0 ${
                // panValid && emailValid && !isPanExistFromDb
                isAccountHolderNameValid &&
                accountInfo?.accountHolderName >= 2 &&
                isIfscValid &&
                accountInfo?.ifsc >= 11 &&
                isAccountNumberValid &&
                accountInfo?.accountNumber?.length >= 9
                  ? "bg-custom-green text-[#fff]"
                  : "bg-[#F0F3F9] text-[#AFBACA] "
              } ${false ? "opacity-60" : "opacity-100"}`}
            />
          </div>
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default BankAccountDetails;

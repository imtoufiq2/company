import { useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../organism/bankHeader";
import Button from "../../atoms/button/Button";
import { validateIFSCCode } from "../../../utils/validation";
import { upiData } from "../../../constants/staticData";
import OnlinePaymentMode from "../../organism/onlinePaymentMode";
import AddBankAccount from "../../organism/addBankAccount";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch } from "react-redux";
import { getIfsc } from "../../../redux/actions/addBank";

const BankAccountDetails = () => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [ifscDetails, setIfscDetails] = useState({});

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
    const numberPattern = /^[0-9]*$/;
    const noSpecialCharsPattern = /^[a-zA-Z0-9]+$/;

    switch (name) {
      case "accountHolderName":
        // const cleanedValue = value.replace(/\s+/g, " ");
        const cleanedValue = value.replace(/[^A-Za-z\s]|\s{2,}/g, " ");

        setAccountInfo((prevState) => ({
          ...prevState,
          [name]: cleanedValue,
        }));
        break;

      case "ifsc":
        // If the value is empty, explicitly set it to an empty string
        if (value === "") {
          setAccountInfo((prevState) => ({
            ...prevState,
            [name]: "",
          }));
          setIsIfscValid(false); // Assuming you want to set it to false when the field is empty
        } else if (noSpecialCharsPattern.test(value)) {
          setAccountInfo((prevState) => ({
            ...prevState,
            [name]: value,
          }));
          setIsIfscValid(validateIFSCCode(value));
        } else {
          setIsIfscValid(false); // Set to false if the value does not match the pattern
        }
        break;
      case "accountNumber":
        if (numberPattern.test(value)) {
          setAccountInfo((prevState) => ({
            ...prevState,
            [name]: value,
          }));
          setIsAccountNumberValid(true);
        } else {
          setIsAccountNumberValid(false);
        }
        break;
      default:
        break;
    }
  };
  //calling api for the bank name using ifsc
  // const bankName = useCallback(() => {
  //   let data = {
  //     ifsc: "ABHY0065001",
  //   };

  //   try {
  //     fetchWithWait({ dispatch, action: getIfsc(data) }).then((response) => {
  //       console.warn("response", response);
  //       setIfscDetails(response);
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }, [dispatch]);

  // if (isIfscValid && accountInfo?.ifsc?.length >= 11) {
  //   bankName();
  // }
  const bankName = useCallback(() => {
    let data = {
      ifsc: "ABHY0065001",
    };

    fetchWithWait({ dispatch, action: getIfsc(data) })
      .then((response) => {
        console.warn("response", response);
        setIfscDetails(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  // Use useEffect to call bankName only when isIfscValid and accountInfo.ifsc.length change
  useEffect(() => {
    if (isIfscValid && accountInfo?.ifsc?.length >= 11) {
      bankName();
    }
  }, [isIfscValid, accountInfo?.ifsc, bankName]);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className="m-auto mb-9 mt-[72px] flex w-full justify-center rounded-md border-2 bg-white md:max-w-[592px]  md:rounded-2xl">
        <form className="flex h-fit w-full scale-[0.85] flex-col gap-4 px-0 py-[60px] md:scale-100 md:gap-5 md:px-[72px] md:py-[72px] ">
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
              ifscDetails={ifscDetails}
              validation={{
                isIfscValid,
                isAccountHolderNameValid,
                isAccountNumberValid,
              }}
            />
            <Button
              onClick={() => {}}
              label="Save & Continue"
              className={`mt-0 ${
                activeIndex !== 1 ? "hidden" : "flex"
              } md:mt-0 ${
                // panValid && emailValid && !isPanExistFromDb

                // accountInfo?.accountHolderName >= 2 &&
                // isIfscValid &&
                // isAccountNumberValid &&
                // accountInfo?.accountNumber?.length >= 9
                accountInfo?.accountHolderName?.length >= 2 &&
                isIfscValid &&
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

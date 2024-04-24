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
import { qrCodeGenerator } from "../../../redux/actions/qrGenerator";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch, useSelector } from "react-redux";

const BankAccountDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const [isAccountNumberValid, setIsAccountNumberValid] = useState(true);
  const [isIfscValid, setIsIfscValid] = useState(true);
  const [isAccountHolderNameValid, setIsAccountHolderNameValid] =
    useState(true);
  const [accountInfo, setAccountInfo] = useState({
    accountHolderName: "",
    ifsc: "",
    accountNumber: "",
  });
  useEffect(() => {
    let data = {
      investor_id: 99,
      org_id: "string",
    };
    fetchWithWait({ dispatch, action: qrCodeGenerator(data) })
      .then((response) => {
        let encodedQRcode = response.data.data.encodedDynamicQrCode;
        let getQrDetetails = response.data.data;
        let checkGetQRDetailLength = Object.keys(getQrDetetails).length;
        let thirdPartyUrls = response.data.data.pspUri;
        let GpayUrl, PhonePayUrl, PaytmUrl;

        console.log("checkData", getQrDetetails);
        if (checkGetQRDetailLength > 0) {
          // alert("inside");
          GpayUrl = thirdPartyUrls.gpayUri;
          PhonePayUrl = thirdPartyUrls.phonepeUri;
          PaytmUrl = thirdPartyUrls.paytmUri;
        }

        if (encodedQRcode) {
          const ImgURL = decodeBase64Image(encodedQRcode);
          const cleanedImageUrl = ImgURL.replace(/"/g, "");
          setImageUrl(cleanedImageUrl);
        }
      })

      .catch((Err) => {
        console.log("Error", Err);
      });
  }, [dispatch]);

  const decodeBase64Image = (encodedQRcode) => {
    const binaryString = atob(encodedQRcode);
    const byteArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      byteArray[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  };
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
      accountInfo?.accountNumber?.length >= 9,
  );

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
              qrCode={imageUrl}
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

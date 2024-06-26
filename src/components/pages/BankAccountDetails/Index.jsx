import { useLocation, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../../organism/bankHeader";
import Button from "../../atoms/button/Button";
import { validateIFSCCode } from "../../../utils/validation";
import { upiData } from "../../../constants/staticData";
import OnlinePaymentMode from "../../organism/onlinePaymentMode";
import AddBankAccount from "../../organism/addBankAccount";
import { qrCodeGenerator } from "../../../redux/actions/qrGenerator";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch, useSelector } from "react-redux";
import { getIfsc, verifyBank } from "../../../redux/actions/addBank";
import toast from "react-hot-toast";

const BankAccountDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [paymentOptions, setPaymentOptions] = useState({
    values: {
      Bhim: "",
      GooglePay: "",
      PhonePay: "",
      Paytm: "",
    },
  });
  const [ifscDetails, setIfscDetails] = useState({});
  const [loading, setLoading] = useState(false);
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

        if (checkGetQRDetailLength > 0) {
          GpayUrl = thirdPartyUrls.gpayUri;
          PhonePayUrl = thirdPartyUrls.phonepeUri;
          PaytmUrl = thirdPartyUrls.paytmUri;

          setPaymentOptions((prevState) => ({
            ...prevState,
            values: {
              ...prevState.values,
              PhonePay: PhonePayUrl,
              GooglePay: GpayUrl,
              Paytm: PaytmUrl,
            },
          }));
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

  const bankName = useCallback(() => {
    let data = {
      ifsc: accountInfo?.ifsc,
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
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.warn("Form submitted");
    console.log(accountInfo);
    setAccountInfo((prevAccountInfo) => ({
      ...prevAccountInfo,
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
    }));
    let data = {
      account_number: "38020884926",
      ifsc_code: "SBIN0000331",
      investor_id: 99,
      method: "",
      org_id: "",
    };
    try {
      setLoading(true);
      fetchWithWait({ dispatch, action: verifyBank(data) }).then((response) => {
        // Your code handling the response
        console.log("response", response);
        if (response.status === 200) {
          navigate("/");
        }
      });
      // console.warn("calling api");
    } catch (error) {
      toast.error("somethings went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <div className="m-auto mb-9 mt-[72px] flex w-full justify-center rounded-md border-2 bg-white md:max-w-[592px]  md:rounded-2xl">
        <form
          className="flex h-fit w-full scale-[0.85] flex-col gap-4 px-0 py-[60px] md:scale-100 md:gap-5 md:px-[72px] md:py-[72px] "
          onSubmit={handleSubmit}
        >
          <Header />
          <div id="pamentInfo " className="flex flex-col gap-3">
            <OnlinePaymentMode
              upiData={upiData}
              setActiveIndex={setActiveIndex}
              activeIndex={activeIndex}
              qrCode={imageUrl}
              paymentOptions={paymentOptions}
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
              onClick={handleSubmit}
              label="Save & Continue"
              disabled={
                !(
                  accountInfo?.accountHolderName?.length >= 2 &&
                  isIfscValid &&
                  isAccountNumberValid &&
                  accountInfo?.accountNumber &&
                  !loading
                )
              }
              className={`medium-text mt-0 ${
                activeIndex !== 1 ? "hidden" : "flex"
              } md:mt-0 ${
                accountInfo?.accountHolderName?.length >= 2 &&
                isIfscValid &&
                isAccountNumberValid &&
                accountInfo?.accountNumber?.length >= 9
                  ? "bg-custom-green text-[#fff]"
                  : "bg-[#F0F3F9] text-[#AFBACA] "
              } ${loading ? "opacity-60" : "opacity-100"}`}
            />
          </div>
        </form>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default BankAccountDetails;

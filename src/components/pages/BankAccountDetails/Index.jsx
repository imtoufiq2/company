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
import { clearLocalStorageItem, getData } from "../../../utils/Crypto";
import AddBankAccountLoader from "../../organism/addBankAccountLoader";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { makeGlobalPayment } from "../../../utils/globalFunctions";

const BankAccountDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [continueButtonName, setContinueButtonName] = useState("Verify Bank");

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
  const [showLoader, setShowLoader] = useState(false);
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
        console.error("Error", Err);
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
        // console.warn("responseasfdasdfs", response);
        setIfscDetails(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [accountInfo?.ifsc, dispatch]);

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
  const handleSubmit = useCallback(() => {
    // e.preventDefault();
    console.warn("Form submitted");
    setShowLoader(true);
    // debugger;
    let data = {
      account_number: accountInfo.accountNumber,
      ifsc_code: accountInfo?.ifsc,
      investor_id: Number(getData("userData")?.investor_id),
      method: "",
      org_id: "",
    };

    try {
      fetchWithWait({ dispatch, action: verifyBank(data) }).then((response) => {
        // Your code handling the response

        if (response.status === 200) {
          // navigate("/");
          // debugger;
          setAccountInfo((prevAccountInfo) => ({
            ...prevAccountInfo,
            accountHolderName: response?.data?.beneficiaryName,
          }));
          setContinueButtonName("Save & Continue");

          setShowLoader(false);
        }
        console.log(response);
      });

      debugger;
      // console.warn("calling api");
    } catch (error) {
      setShowLoader(false);
      debugger;
      toast.error("somethings went wrong");
    }
  }, [accountInfo, dispatch]);

  // ========== clear the local storage ===========
  useEffect(() => {
    // setLocalStorageData("tempPan", pan);

    clearLocalStorageItem("tempPan");
  }, []);

  useBackgroundColor();

  // const saveAndContinue = useCallback(async () => {
  //   debugger;
  //   if (sessionStorage.getItem("fromWhere") === "preview-maturity-action") {
  //     // Call the global function
  //     const globalRes = await makeGlobalPayment();
  //     debugger;
  //     if (globalRes?.data?.data?.onboarding_status === "Profile") {
  //       debugger;
  //       sessionStorage.removeItem("fromWhere");
  //       navigate("/personal-info");
  //     }
  //   }
  //   debugger;
  //   navigate("/");
  // }, [navigate]);
  const saveAndContinue = useCallback(async () => {
    try {
      if (sessionStorage.getItem("fromWhere") === "preview-maturity-action") {
        const globalRes = await makeGlobalPayment();
        if (globalRes?.data?.data?.onboarding_status === "Profile") {
          sessionStorage.removeItem("fromWhere");
          navigate("/personal-info");
          return;
        }
      }
      navigate("/");
    } catch (error) {
      console.error("An error occurred during saveAndContinue:", error);
    }
  }, [navigate]);
  return (
    <>
      {showLoader && <AddBankAccountLoader />}
      <div className="m-auto mb-9 flex w-full justify-center rounded-md bg-white md:mt-8 md:max-w-[592px] md:rounded-2xl  md:border-2 ">
        <div
          className="flex h-fit w-full scale-[0.85] flex-col gap-4 px-0 py-[60px] md:scale-100 md:gap-5 md:px-[72px] md:py-[72px] "
          // onSubmit={handleSubmit}
          // onSubmit={() =>
          //   continueButtonName === "Verify Bank" ? handleSubmit : navigate("/")
          // }
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

            <div className="relative ">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#AFBACA]" />
              </div>
              {/* The use of 'relative' here is to position the text above the 'border-t'. */}
              <div className="relative flex justify-center text-sm">
                <span className="regular-text bg-white px-2 text-xs leading-6 tracking-[-0.2] text-[#8897AE] ">
                  or
                </span>
              </div>
            </div>

            <AddBankAccount
              continueButtonName={continueButtonName}
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
            {continueButtonName === "Verify Bank" ? (
              <Button
                // onClick={handleSubmit}
                onClick={handleSubmit}
                // label="Save & Continue"
                label={"Verify Bank"}
                disabled={
                  !(
                    // accountInfo?.accountHolderName?.length >= 2 &&
                    (
                      isIfscValid &&
                      isAccountNumberValid &&
                      accountInfo?.accountNumber &&
                      !loading
                    )
                  )
                }
                className={`medium-text  mt-2 px-5 py-[0.625rem] text-base leading-7 tracking-[-0.3] md:mt-10 md:py-[0.8125rem] md:text-lg ${
                  activeIndex !== 1 ? "hidden" : "flex"
                }  ${
                  // accountInfo?.accountHolderName?.length >= 2 &&
                  isIfscValid &&
                  isAccountNumberValid &&
                  accountInfo?.accountNumber?.length >= 9
                    ? "bg-custom-green text-[#fff] "
                    : "bg-[#F0F3F9] text-[#AFBACA] "
                } ${loading ? "opacity-60" : "opacity-100"}`}
              />
            ) : (
              <Button
                onClick={saveAndContinue}
                label="Save & Continue"
                className={`medium-text  mt-2 px-5 py-[0.625rem] text-base leading-7 tracking-[-0.3] md:mt-10 md:py-[0.8125rem] md:text-lg ${
                  activeIndex !== 1 ? "hidden" : "flex"
                }  ${
                  // accountInfo?.accountHolderName?.length >= 2 &&
                  isIfscValid &&
                  isAccountNumberValid &&
                  accountInfo?.accountNumber?.length >= 9
                    ? "bg-custom-green text-[#fff] "
                    : "bg-[#F0F3F9] text-[#AFBACA] "
                } ${loading ? "opacity-60" : "opacity-100"}`}
              />
            )}
            {/* <Button
              // onClick={handleSubmit}
              onClick={() =>
                continueButtonName === "Verify Bank"
                  ? handleSubmit
                  : navigate("/")
              }
              // label="Save & Continue"
              label={
                !continueButtonName === "Verify Bank"
                  ? "Save & Continue"
                  : "Verify Bank"
              }
              disabled={
                !(
                  // accountInfo?.accountHolderName?.length >= 2 &&
                  (
                    isIfscValid &&
                    isAccountNumberValid &&
                    accountInfo?.accountNumber &&
                    !loading
                  )
                )
              }
              className={`medium-text  mt-2 px-5 py-[0.625rem] text-base leading-7 tracking-[-0.3] md:mt-10 md:py-[0.8125rem] md:text-lg ${
                activeIndex !== 1 ? "hidden" : "flex"
              }  ${
                // accountInfo?.accountHolderName?.length >= 2 &&
                isIfscValid &&
                isAccountNumberValid &&
                accountInfo?.accountNumber?.length >= 9
                  ? "bg-custom-green text-[#fff] "
                  : "bg-[#F0F3F9] text-[#AFBACA] "
              } ${loading ? "opacity-60" : "opacity-100"}`}
            /> */}
          </div>
        </div>
      </div>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default BankAccountDetails;

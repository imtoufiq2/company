import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TermsOfService from "../../organism/TermsAndConditions";

import LoginFormWrapper from "../../../helpers/OnBoardingWrapper";
import Button from "../../atoms/button";
import { usePost } from "../../../customHooks/usePost";
import { getData, setData } from "../../../utils/Crypto";
import { showToastWithCopy } from "../../../utils/toastNotifications";
import { useSelector, useDispatch } from "react-redux";
import TextDisplay from "../../atoms/textContent/TextContent";
import CustomInput from "../../atoms/customInput";
import LoginBoxHeader from "../../organism/loginBoxHeader";
import CountrySelector from "../../molecules/countrySelector";
import { fetchWithWait } from "../../../utils/method";
import { requestOtpForMobile } from "../../../redux/actions/login";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { useLocation } from 'react-router-dom';


const Login = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the relevant parameters from the URL of invite referal
    const urlParams = new URLSearchParams(location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmContent = urlParams.get('utm_content');
    const irRef = urlParams.get('ir_ref');
    const irNotify = urlParams.get('ir_notify');
    const irCo = urlParams.get('ir_co');
  
    // Store the extracted data in the local storage
    localStorage.setItem('utmSource', utmSource);
    localStorage.setItem('utmMedium', utmMedium);
    localStorage.setItem('utmCampaign', utmCampaign);
    localStorage.setItem('utmContent', utmContent);
    localStorage.setItem('irRef', irRef);
    localStorage.setItem('irNotify', irNotify); // campaignID
    localStorage.setItem('irCo', irCo);  // referalCode
    // if (localStorage.getItem('irCo') !=="null"){ 
    //   loadReferrerDetails(irCo, irNotify);  // Fetch referrer details using the API
    // }
  }, [location.search]);

  const { loading, error } = usePost();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  var isReferred = false;

  const dispatch = useDispatch();
  const globalMobileNumber = useSelector(
    (state) => state.loginPage.mobileNumber,
  );
  // console.log("hey-->", globalMobileNumber);

   //function for referal notification popup
   useEffect(() => {
    // get ir_co from local storage
    const irCoFromLocalStorage = localStorage.getItem('irCo');
    // Show referral notification if irCo parameter is present and not null or ""
    if (irCoFromLocalStorage && irCoFromLocalStorage !== "null") {
      toast.success(`Welcome. Using referral code ${irCoFromLocalStorage}`);
      isReferred = true;
      localStorage.setItem('isReferred', isReferred);
      
    }
  }, [location.search]);

  // const loadReferrerDetails = async (referrerCode, campaignId) => {
  //   try {      
  //     const response = await axios.post(
  //       'http://localhost:9090/api/v1/conversion/confirm_referrer_code',
  //     {
  //       referrer_code: referrerCode,
  //       campaign_id: campaignId,
  //     },
  //     {
  //       headers: {
  //         'accept': 'application/json',
  //         'content-type': 'application/json',
  //         // 'x-api-key': '506FE0BBE393F985B84A0350B64F0631',
  //         // 'x-brand-id': '68573',
  //       },
  //     }
  //   );

  //     if (response.status === 200) {
  //       // Store the referrer details in the local storage
  //       localStorage.setItem('referrerDetails', JSON.stringify(response.data.referrer_details));
  //     }
  //   } catch (error) {
  //     console.error('Error fetching referrer details:', error);
  //   }
  // };

  // const addPixelTrackingScript = () => {
  //   setTimeout(() => {
  //     if (window.ir) {
  //       window.ir('track', {
  //         orderID: '6266082018',
  //         event: 'register',
  //         fname: 'This is test referer',
  //         email: '6266082018',
  //         mobile: '6266082018',
  //         order_custom_val: ''
  //       });
  //       window.ir('track', {
  //         orderID: '6266082018',
  //         event: 'sale',
  //         fname: 'This is test referer',
  //         email: '6266082018',
  //         mobile: '6266082018',
  //         purchaseValue: '2000',
  //         order_custom_val: ''
  //       });
  //     } else {
  //       console.error('window.ir is not defined');
  //     }
  //   }, 1000); //
  // }


  // useEffect(() => {
  //   if (isReferred){
  //     addPixelTrackingScript();
  //   }
  // }, []);






  const handleMobileNumberChange = useCallback(
    ({ target: { value: inputNumber } }) => {
      const regex = /^[6-9]\d*$/;

      if (regex.test(inputNumber) && inputNumber.length <= 10) {
        setMobileNumber(inputNumber);
        setIsValid(inputNumber.length === 10 && /^\d+$/.test(inputNumber));
      } else if (inputNumber === "") {
        setMobileNumber(inputNumber);
        setIsValid(false);
      }
    },
    [setMobileNumber, setIsValid],
  );

  const handleContinueClick = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        let data = {
          country_code: "91",
          mobile_no: mobileNumber,
          request_source: "mobile",
        };

        fetchWithWait({ dispatch, action: requestOtpForMobile(data) }).then(
          (response) => {
            if (response?.status === 200) {
              navigate("/verifyMobile");
              localStorage.setItem(
                "timerStart",
                JSON.stringify({
                  one: 1,
                  two: 1,
                }),
              );

              toast.success("OTP sent successfully!");
              showToastWithCopy(response?.data?.otp);
            }
          },
        );

        setData("mobile", mobileNumber);
        setMobileNumber("");
      } catch (error) {
        toast.error("somethings went wrong.");
      }
    },
    [mobileNumber, navigate, setData, showToastWithCopy],
  );
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    // console.log("first push");
    if (error) {
      toast.error("something went wrong");
    }
  }, []);

  useEffect(() => {
    const number = getData("mobile", mobileNumber);
    setMobileNumber(globalMobileNumber);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // if we dont want to enable the button when user  come back to the lgoin page then remove this below useEffect.
  useEffect(() => {
    const storedNumber = getData("mobile", mobileNumber);
    if (storedNumber && /^\d{10}$/.test(storedNumber)) {
      setMobileNumber(storedNumber);
      setIsValid(true); // Enable the button
    } else {
      setMobileNumber("");
      setIsValid(false); // Disable the button
    }
  }, []);
  useBackgroundColor();
  return (
    <>
      <LoginFormWrapper onSubmit={handleContinueClick}>
        <LoginBoxHeader />
        <div className="mt-5 flex flex-col gap-[6px] md:mt-[2px]">
          <label
            htmlFor="mobileInput"
            // className=" flex w-fit items-center text-sm font-semibold leading-6 tracking-[-0.2] text-[#3D4A5C] "
            className="medium-text flex w-fit items-center text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
          >
            Mobile Number&nbsp;
            <span className="text-[15px] font-bold text-red-500"> *</span>
          </label>

          <label
            className="flex flex-col gap-3"
            id="focus"
            htmlFor="mobileInput"
          >
            <div
              className={clsx(
                "flex min-h-[2.875rem] items-center rounded-md border ",
                {
                  "border-2  border-custom-green": isFocused,

                  "border-[#AFBACA] ": !isFocused,
                },
              )}
            >
              <CountrySelector isFocused={isFocused} />
              <CustomInput
                inputRef={inputRef}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                maxLength={10}
                value={mobileNumber}
                pattern="/[0-9]/"
                placeholder="Enter mobile number"
                onChange={handleMobileNumberChange}
                // className="no-spinner medium-text placeholder:medium-text medium-text flex-1 rounded-r-md text-[#2D3643]  outline-none placeholder:text-[15px] placeholder:text-[#8897AE]"
                className="no-spinner medium-text placeholder:medium-text flex-1 text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
              />
            </div>
            {/* `medium-text text-[16px] leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit`, */}
            <TextDisplay
              id="content"
              text="You’ll receive an SMS with an OTP to verify your
              mobile number"
              elementType="p"
              // className="medium-text w-full whitespace-normal  text-[13px] font-normal leading-6 tracking-[-0.2] text-custom-text-light-gray"
              className="regular-text whitespace-normal text-xs leading-5 tracking-[-0.2] text-[#8897AE] md:text-sm md:leading-7"
            />
          </label>
        </div>

        <TermsOfService />

        <Button
          onClick={handleContinueClick}
          label="Continue"
          disabled={!isValid || loading}
          // `w-full h-[50px] flex justify-center items-center font-medium text-lg leading-[30px] tracking-[-0.3] rounded-md transition duration-200 ease-in-out`,

          className={`py-[0.625rem] text-base leading-7 md:py-[0.8125rem] ${
            isValid
              ? "bg-custom-green text-[#fff] "
              : "bg-[#F0F3F9] text-[#AFBACA] "
          } ${loading ? "opacity-60 " : "opacity-100 "}`}
        />
      </LoginFormWrapper>
      <div id="spacing" className="h-16"></div>
    </>
  );
};

export default Login;

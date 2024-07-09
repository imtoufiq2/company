import React, { useCallback, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../atoms/button/Button";
import Modal from "../modal";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { getData } from "../../../utils/Crypto";
import LoadingOverlay from "react-loading-overlay";

const NomineePrompt = ({
  setShowLoader,
  showLoader,
  setIscheckingStatus,
  checkingStatus,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSkip = useCallback(async () => {
    sessionStorage.setItem("showPrompt", true);

    navigate("/fetch-bank-details");
   
  }, [navigate]);


  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div id="_image">
          <img
            // src="/images/NomineePrompt.svg"
            src={`${!sessionStorage.getItem("showErrorPopUp") ? "/images/NomineePrompt.svg" : "/images/payment-failed-alert.svg"}`}
            alt="NomineePrompt"
            className="max-h-[88px] max-w-[88px]"
          />
        </div>
        <h2
          id="_heading"
          className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]"
        >
       {sessionStorage.getItem("showErrorPopUp") ? "Payment Failed":"Add nominee to your account"}  
        </h2>
        <p
          id="_text"
          className="regular-text mb-3 mt-1 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]"
        >
           {sessionStorage.getItem("showErrorPopUp") ? `    We're sorry, but your payment was unsuccessful. Please check your payment details and try again. If the issue persists, contact our support team for assistance.
`:` Enter nominee details, so that the money invested could be easily
          claimed by nominees in the unfortunate event of demise of the
          investor.`} 
         
        </p>
        <div id="_bottons" className="flex flex-col gap-2">
          {
            !sessionStorage.getItem("showErrorPopUp") &&  <Button
            label="Add Nominee"
            onClick={() => {
              sessionStorage.setItem("showPrompt", false);

              setShowLoader(false);
            }}
            className="medium-text bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white active:scale-[0.99]"
          />
          }
         {
          sessionStorage.getItem("showErrorPopUp")  ?  <Button
          // label="Skip for Now"
          label={"Try again"}
          onClick={handleSkip}
          className="medium-text bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white active:scale-[0.99]"
        /> :  <Button
          // label="Skip for Now"
          label={"Skip for Now"}
          onClick={handleSkip}
          className="medium-text  text-base leading-7 tracking-[-0.3] "
        />
         }
         
        </div>
        <button
          className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
          // onClick={() => setShowLoader(false)}
          onClick={()=>navigate("/preview-maturity-action")}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
  return (
    <>
      <LoadingOverlay
        active={checkingStatus ? true : false}
        spinner
        text={checkingStatus && checkingStatus}
      >
        <Modal body={firstModalData} isTable />
      </LoadingOverlay>
    </>
  );
};

export default NomineePrompt;

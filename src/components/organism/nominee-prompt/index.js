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
    localStorage.setItem("showPrompt", false);

    navigate("/fetch-bank-details");
    // try {
    //   // debugger
    //   setIscheckingStatus("please wait")
    //   const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
    //   const investorId = Number(getData("userData")?.investor_id);
    //   const response = await axios.post(`${endpoints?.baseUrl}/invest/updatenominees`, {
    //     fd_investment_id: fdInvestmentId,
    //     investor_id: investorId,
    //     nominee_data_xml: "",
    //     redirection_url: "http://localhost:3000/add-nomination?",
    //   });

    //   const paymentLink = response?.data?.data?.paymentUrl;
    //   if (response?.data?.status === 200 && paymentLink) {
    //     // debugger

    //     window.location.href = paymentLink;
    //     setIscheckingStatus("Redirecting you to the payment page...")
    //   }
    // } catch (error) {
    //   console.error("Error in handleSkip:", error);
    // }
  }, [navigate]);

  // const callApiToCheckPaymentStatus = useCallback(async () => {
  //   try {
  //     setIscheckingStatus("checking status...");
  //     // debugger
  //     const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
  //     const fdId = Number(sessionStorage.getItem("fdId"));
  //     const response = await axios.post(
  //       `${endpoints?.baseUrl}/invest/fd-status`,
  //       {
  //         fd_investment_id: fdInvestmentId,
  //         fd_id: fdId,
  //       },
  //     );

  //     const paymentStatus = response?.data?.data?.payment_status;
  //     if (paymentStatus === "success") {
  //       // debugger
  //       sessionStorage.setItem(
  //         "paymentData",
  //         JSON.stringify(response?.data?.data),
  //       );
  //       navigate("/maturity-action");
  //       setIscheckingStatus(null);
  //     } else if (paymentStatus === "") {
  //       console.warn("Something went wrong with the payment");
  //       setIscheckingStatus(null);
  //     } else {
  //       // navigate to add-nomination
  //       console.warn("Payment failed, please try again");
  //       setIscheckingStatus(null);
  //     }
  //   } catch (error) {
  //     setIscheckingStatus(null);
  //     console.error("Error in callApiToCheckPaymentStatus:", error);
  //   }
  // }, [navigate]);

  // const callApiAfterRedirect = useCallback(
  //   async (query) => {
  //     setIscheckingStatus("checking status...");
  //     // debugger
  //     try {
  //       const response = await axios.get(
  //         `${endpoints?.baseUrl}/invest/verify-payment${query}`,
  //       );
  //       setIscheckingStatus("checking payment status...");
  //       await callApiToCheckPaymentStatus();
  //     } catch (error) {
  //       setIscheckingStatus(null);
  //       console.error("Error in callApiAfterRedirect:", error);
  //     }
  //   },
  //   [callApiToCheckPaymentStatus, setIscheckingStatus],
  // );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (location.search) {
  //       const data = location.search.substring(1).replace(/&/, "?");
  //       await callApiAfterRedirect(data);
  //     }
  //   };

  //   fetchData();
  // }, [callApiAfterRedirect, location.search]);
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div id="_image">
          <img
            src="/images/NomineePrompt.svg"
            alt="NomineePrompt"
            className="max-h-[88px] max-w-[88px]"
          />
        </div>
        <h2
          id="_heading"
          className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]"
        >
          Add nominee to your account
        </h2>
        <p
          id="_text"
          className="regular-text mb-3 mt-1 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]"
        >
          Enter nominee details, so that the money invested could be easily
          claimed by nominees in the unfortunate event of demise of the
          investor.
        </p>
        <div id="_bottons" className="flex flex-col gap-2">
          <Button
            label="Add Nominee"
            onClick={() => setShowLoader(false)}
            className="medium-text bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white active:scale-[0.99]"
          />
          <Button
            label="Skip for Now"
            onClick={handleSkip}
            className="medium-text  text-base leading-7 tracking-[-0.3] "
          />
        </div>
        <button
          className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
          onClick={() => setShowLoader(false)}
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

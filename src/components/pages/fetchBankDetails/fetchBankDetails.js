import React, { useCallback, useEffect, useState } from "react";

import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { getData } from "../../../utils/Crypto";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import TextLoader from "../../organism/loader/textLoader";
import PleaseWaitLoader from "../../organism/pleaseWaitLoader";
import { MY_BASE_URL } from "../../../utils/api";

function FetchBankDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [redirecting, setRedirecting] = useState(false);
  const [checkingRedirectStatus, setCheckingRedirectStatus] = useState(false);
  const [checkingPaymentStatus, setCheckingPaymentStatus] = useState(false);

  const callApiToCheckPaymentStatus = useCallback(async () => {
    try {
      setCheckingPaymentStatus(true);
      // debugger
      const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
      const fdId = Number(sessionStorage.getItem("fdId"));
      const response = await axios.post(
        `${endpoints?.baseUrl}/invest/fd-status`,
        {
          fd_investment_id: fdInvestmentId,
          fd_id: fdId,
        },
      );

      const paymentStatus = response?.data?.data?.payment_status;
      if (paymentStatus === "success") {
        // debugger
        sessionStorage.setItem(
          "paymentData",
          JSON.stringify(response?.data?.data),
        );
        navigate("/maturity-action", { replace: true });
        return;
      } else if (paymentStatus === "") {
        toast.error("Something went wrong with the payment");
        navigate("/add-nomination", { replace: true });
        return;
      } else {
        // navigate to add-nomination
        //   console.warn("Payment failed, please try again");
        toast.error("Payment failed, please try again");
        navigate("/add-nomination", { replace: true });
        return;
      }
    } catch (error) {
      //   console.error("Error in callApiToCheckPaymentStatus:", error);
      toast.error("Error in Payment");
      navigate("/add-nomination", { replace: true });
      return;
    } finally {
      setCheckingPaymentStatus(false);
      return;
    }
  }, [navigate]);
  const [showLastLoader, setShowLastLoader] = useState(false);
  const callApiAfterRedirect = useCallback(
    async (query) => {
      // debugger
      setShowLastLoader(true);
      try {
        setCheckingRedirectStatus(true);

        // Verify Payment - First API call after after payment success
        const response = await axios.get(
          `${endpoints?.baseUrl}/invest/verify-payment${query}`,
        );
        console.log("resonse", response);
        setCheckingRedirectStatus(false);
        setShowLastLoader(false);
        // Payment Status - Second API call after verifying payment
        await callApiToCheckPaymentStatus();
      } catch (error) {
        console.log("my error", error?.response?.data?.status === 500);
        if( error?.response?.data?.status === 500){
          sessionStorage.setItem("showErrorPopUp", true)
        }
        toast.error(error?.message);
        setShowLastLoader(false);
        navigate("/add-nomination");
        console.error("Error in callApiAfterRedirect:", error);
      }
    },
    [callApiToCheckPaymentStatus, navigate],
  );
  useEffect(() => {
    const fetchData = async () => {
      if (location.search) {
        const data = location.search.substring(1).replace(/&/, "?");
        await callApiAfterRedirect(data);
      }
    };

    fetchData();
  }, [callApiAfterRedirect, location.search]);

  useEffect(() => {
    async function getBankDetails() {
      try {
        setRedirecting(true);
        // debugger
        const fdInvestmentId = Number(
          sessionStorage.getItem("fd_investment_id"),
        );
        const investorId = Number(getData("userData")?.investor_id);

        const response = await axios.post(
          `${endpoints?.baseUrl}/invest/updatenominees`,
          {
            fd_investment_id: fdInvestmentId,
            investor_id: investorId,
            nominee_data_xml: "",
            redirection_url: `${MY_BASE_URL}/fetch-bank-details?`,
            // redirection_url: "https://webdev.altcase.com/fetch-bank-details?",
          },
        );
        console.log("responseresponse", response);
        // debugger;
        const paymentLink = response?.data?.data?.paymentUrl;
        if (response?.data?.status === 200 && paymentLink) {
          // debugger;
          console.log("Done");
          window.location.href = paymentLink;
        }
        // debugger;
      } catch (error) {
        navigate("/add-nomination");
        toast.error("Something went wrong");
        console.error("Error in handleSkip:", error);
      } finally {
        setRedirecting(false);
      }
    }
    if (!location.search) {
      getBankDetails();
    }
  }, [location.search]);

  return (
    <>
      {showLastLoader && <PleaseWaitLoader />}
      <div className="fixed left-1/2 top-60 -translate-x-1/2 transform">
        {redirecting && (
          <TextLoader header="Redirecting... Please do not refresh page" />
        )}

        {/* {checkingRedirectStatus && <TextLoader header="Fetching Bank Details" />} */}
        {/* {checkingRedirectStatus && <PleaseWaitLoader />} */}
        {/* {checkingRedirectStatus && <>lOADING</>} */}

        {checkingPaymentStatus && (
          <TextLoader header="Checking Payment Status" />
        )}
      </div>
    </>
  );
}

export default FetchBankDetails;

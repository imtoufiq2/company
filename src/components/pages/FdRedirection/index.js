import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { endpoints } from "../../../services/endpoints";
import { getData } from "../../../utils/Crypto";
import { useNavigate } from "react-router-dom";
import { MY_BASE_URL } from "../../../utils/api";

const FdRedireaction = () => {
    const navigate=useNavigate()
    // const [Order_Summary , setOrder_Summary]=useState(null)
    const startFd = useCallback(async () => {
   const Order_Summary=JSON.parse(sessionStorage.getItem("Order_Summary"))
        const data = {
            fd_id: +Order_Summary?.fdid,
            fd_payout_method_id: "C",
            investment_amount: String(Order_Summary?.InvestmentAmount),
            investor_id: Number(getData("userData")?.investor_id),
            maturity_action_id:0,
            // maturity_action_id: Number(option?.value),
            ifa_id: 1, //for web it is 2 and for mobile it is 1
            interest_rate: String(Order_Summary?.Interest_Rate), //string
            // scheme_id: Number(Order_Summary?.scheme_master_id),
            scheme_id: Number(Order_Summary?.activeRow?.scheme_master_id),
            tenure: String(Order_Summary?.tenure), //string
            total_interest_earn: String(Order_Summary?.Total_Interest_Earned), //string
            is_senior_citizen: Order_Summary?.isSeniorCitizen ? 1 : 0, //send 0 or 1
            maturity_date: String(
              Order_Summary?.CalculateFdResponse?.maturity_date,
            ), //string
            maturity_amount: String(Order_Summary?.maturity_amount), //string
            mkyc_status: getData("userData")?.mkycstatus ?? "",
            redirection_url: `${MY_BASE_URL}/preview-maturity-action?`,
          };
          debugger
        try {
          const response = await axios.post(
            `${endpoints?.baseUrl}/investment/startfd`,
            data,
          );
          console.log("asfdasfdasfd",response)
    if(response?.data?.data?.fd_investment_id){
        sessionStorage.setItem("fd_investment_id",response?.data?.data?.fd_investment_id ?? 0)
    }
         
          if (response?.data?.data?.onboarding_status === "Bank") {
            navigate("/add-bank-account");
            return;
          } else if (response?.data?.data?.onboarding_status === "Profile") {
            sessionStorage.removeItem("fromWhere");
            navigate("/personal-info");
            return;
            
          }
          //i have added
          else if (response?.data?.data?.onboarding_status === "CKYC") {
            // sessionStorage.removeItem("fromWhere");
            navigate("/kyc");
            return;
            
          } else if (response?.data?.data?.onboarding_status === "Nominee") {
            sessionStorage.removeItem("fromWhere");
            navigate("/add-nomination");
            return;
          }
        } catch (error) {}
      }, [navigate]);
  const getkycstatus = useCallback(async () => {
    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/onboarding/getdigilocker-uistream-status`,
        {
          investor_id: getData("userData")?.investor_id,
          entry_id: Number(localStorage.getItem("entry_id")),
        },
      );
      if(response?.data?.status===200){
        await startFd(); 
      }

      console.log("asdfasdfasd", response);
      debugger
    } catch (error) {}
  }, [startFd]);
useEffect(()=>{
    // setOrder_Summary(JSON.parse(sessionStorage.getItem("Order_Summary")))
    console.log("asfdasfdasfdasfd",JSON.parse(sessionStorage.getItem("Order_Summary")) )
},[])
 
  useEffect(() => {
    const fetchDataAndStartFD = async () => {
        // sessionStorage.setItem("isOnceDone", "yes")
      await getkycstatus(); // Wait for getkycstatus to complete
     // Then call startFd
    };
    // && sessionStorage.getItem("isOnceDone")
  if(localStorage.getItem("tempPan") ) fetchDataAndStartFD(); // Execute the async function
  }, [getkycstatus, startFd ] ); 
  
  return <div>FdRedireaction</div>;
};

export default FdRedireaction;

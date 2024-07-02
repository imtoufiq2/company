import { useNavigate } from "react-router-dom";
// Custom Components
import Image from "../../atoms/Image";
import Button from "../../atoms/button/Button";
import ReferralCard from "../referralCard";
import CongratulatoryMessage from "../../molecules/congratulatoryMessage";
import { useEffect, useState } from "react";

const MaturityAction = () => {

  const navigate = useNavigate();
  const [paymentSuccessData, setPaymentSuccessData] = useState(null);

  useEffect(() => {
    const paymentData = sessionStorage.getItem("paymentData");
    if (paymentData) {
      try {
        setPaymentSuccessData(JSON.parse(paymentData));
      } catch (error) {
        console.error("Error parsing paymentData:", error);
      }
    } else {
      console.log("No paymentData found in sessionStorage");
    }
  }, []);
  console.log("paymentSuccessData",paymentSuccessData)
  const isEmptyObject = (obj) => {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
  };
  return (
    <>
    {paymentSuccessData && !isEmptyObject(paymentSuccessData) ? (
     <div className="mx-auto my-6 md:mt-8 md:pb-8 gap-6 md:gap-8 px-5 sm:px-0  flex max-w-[1008px] flex-col  w-full sm:max-w-[592px]">
     <CongratulatoryMessage message="Your FD investment was successful" />
     <div className="flex flex-col gap-5">
       <div  className="rounded-xl p-5 border-[0.5px] bg-white md:p-8">
         <div  className="flex flex-col gap-8">
           <div id="_second_top_first" className="flex items-center gap-4">
             <div
               id="bankLogo"
               className=" flex  h-[60px]  w-[60px]  items-center justify-center  rounded-full border  bg-white lg:h-[60px] lg:w-[60px]"
             >
               <Image
                 src={paymentSuccessData?.logo_url}
                 alt="bank logo"
                 className="h-[36px] w-[36px] lg:h-[36px] lg:w-[36px] object-contain"
               />
             </div>
             <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
             {paymentSuccessData?.fd_name}
             </h3>
           </div>
           <div id="_second_top_second" className="flex justify-between flex-wrap items-center gap-6">
             <div id="_left" className="flex flex-col gap-2">
               <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                 Amount Invested
               </p>
               <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
                 ₹{paymentSuccessData?.investment_amount}
               </h3>
             </div>
             <div id="_middle" className="flex flex-col gap-2">
               <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
               Interest Rate
               </p>
               <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
               {paymentSuccessData?.rate_of_interest}
               </h3>
             </div>
             <div id="_right" className="flex flex-col gap-2">
               <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
               Tenure
               </p>
               <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
               {paymentSuccessData?.tenure}
               </h3>
             </div>
           </div>
           <div
             id="_second_top_third"
             className="flex flex-wrap items-center justify-between gap-2"
           >
             <p className="regular-text text-sm leading-6 tracking-[-0.2]">
               Your FD will mature on
               <span className="semi-bold-text"> {paymentSuccessData?.fd_mature_on }</span>
             </p>
             <p className="regular-text text-right text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]">
               Transaction ID: {paymentSuccessData?.transaction_id}
             </p>
           </div>
         </div>
       </div>
       {/* ============= */}
       <div className="-mt-3">
       <ReferralCard isModify={true} isPayment={true}/>
       </div>
     </div> 
     {/* TODO: ButtonNavigateDashboard use this componts for this */}
     <div
       id="_third"
       className="mx-auto flex cursor-pointer items-baseline gap-2 mt-1 md:mt-0"
       onClick={() => navigate("/")}
     >
       <Image src="/images/home-icon.svg" alt="home" />
       <Button
         onClick={() => {}}
         label="Go to Dashboard"
         className={`medium-text medium-text   text-[#21B546]" mx-auto    h-fit w-fit  text-[16px] text-lg leading-normal tracking-[-0.2] text-[#21B546] duration-300`}
       />
     </div>
   </div>
      ) : (
        <div>No payment data available</div>
      )}</>
    
  );
};

export default MaturityAction;

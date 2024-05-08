import React, { useEffect, useState } from "react";
import Image from "../../atoms/Image";
import Button from "../../atoms/button/Button";
import ReferralCard from "../../organism/referralCard";
import { useNavigate } from "react-router-dom";
import Moadal from "../../organism/modal";
import { AiOutlineClose } from "react-icons/ai";
import MaturityAction from "../../organism/maturityAction";
import PaymentSuccess from "../../molecules/paymentSuccess";
const FDPaymentSummary = () => {
  const navigate = useNavigate();
  const [isModalActive, setIsModalActive] = useState(true);
  const investmentDetails = [
    {
      data: "Investment Amount",
      value: "₹ 5,00,000",
    },
    {
      data: "Tenure Selected",
      value: "3 years",
    },
    {
      data: "Interest Rate",
      value: "9.30% p.a.",
    },
    {
      data: "Interest Payout",
      value: "At maturity",
    },
    {
      data: "Maturity Amount",
      value: "₹ 6,70,920",
    },
    {
      data: "Total Interest Earned",
      value: "₹ 1,70,920",
    },
  ];
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const bankFetchLoader = (
    <div className="relative top-4 flex h-full w-fit  flex-col rounded-lg border-0  bg-[#FCEBC7] p-5 shadow-lg outline-none focus:outline-none lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        {/* header section */}
        <h3 className="bold-text text-xl  tracking-[-0.3] text-[#1B1B1B] md:text-xl md:leading-8">
          <span>
            Verifying Your <br /> Bank Account Details
          </span>
        </h3>
        {/* middle section */}
        <p className="regular-text text-[12px] leading-6 tracking-[-0.2] md:text-sm">
          Please wait while we verify your bank account details. This will take
          a short moment...
        </p>
        {/* footer section */}
        <img
          src="/images/bank-fetch-loader.svg"
          alt="loader"
          className="obje mx-auto h-fit w-fit md:max-h-[191px] md:max-w-[316px] "
        />
        <button
          className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div id="space" className="hidden h-3 md:block"></div>
      {/* this is for the fd summary */}
      {/* <div className="mx-auto flex h-fit max-w-[592px] flex-col gap-5 rounded-md border p-2 md:w-[592px] md:rounded-xl md:p-8">
        <div id="_first">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
            Maturity Action
          </h3>
          <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
            Choose your action on maturity of your FD
          </p>
        </div>
        <div id="_second" className="flex flex-col rounded-md border ">
          <div id="_top" className="bg-[#D7DFE9] p-5">
            <div id="_icon_with_name" className="flex items-center gap-2">
              <div
                id="bankLogo"
                className=" flex  h-[32px]  w-[32px]  items-center justify-center  rounded-full border  bg-white lg:h-[32px] lg:w-[32px]"
              >
                <Image
                  src="/images/SBI-logo.svg"
                  alt="bank logo"
                  className="h-[19.2px] w-[19.2px] lg:h-[19.2px] lg:w-[19.2px]"
                />
              </div>
              <span className="bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
                State Bank of India
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {investmentDetails?.map((curData, index) => {
                return (
                  <div className="flex items-center justify-between">
                    <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                      {curData?.data}
                    </p>
                    <p
                      className={` text-right text-sm leading-6 tracking-[-0.2] ${index === 4 || index === 5 ? "semi-bold-text" : "medium-text"} ${index === 5 ? "text-[#21B546]" : ""}`}
                    >
                      {curData?.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            id="_bottom"
            className="flex items-center justify-between gap-3 p-5"
          >
            <div
              id="_left"
              className="semi-bold-text flex items-center  gap-0 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] md:gap-1"
            >
              <span> Choose Maturity Action</span>
              <img src="/images/info-icon.svg" alt="info-icon" />
            </div>
            <div id="_right">
              <aside className="relative bg-white">
                <select className=" medium-text appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer">
                  <option>Re-invest</option>
                  <option>Re-invest two</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3.5 top-3 hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </aside>
            </div>
          </div>
        </div>
        

        // import this components as <HighlightsInfo/>
        <div id="_third" className="flex flex-col gap-2">
          <p className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            Important Highlights
          </p>
          <p className="flex items-start  gap-2">
            <img src="/images/tick-icon.svg" alt="" />
            <span className="regular-text text-sm leading-6 tracking-[-0.2]">
              Withdraw your money anytime after 7 days
            </span>
          </p>
          <p className="flex items-start gap-2">
            <img src="/images/tick-icon.svg" alt="" />
            <span className="regular-text text-sm leading-6 tracking-[-0.2]">
              Getting additional{" "}
              <span className="semi-bold-text text-[#1B1B1B]">
                0.5% Sr. Citizen Interest
              </span>
            </span>
          </p>
        </div>
        <Button
          onClick={() => {}}
          label="Make Payment"
          className={`medium-text mx-auto  mb-2 w-fit max-w-[350px] bg-[#21B546] px-5 py-[10px] text-[16px] leading-7 tracking-[-0.3] text-[#fff] duration-300 md:w-[350px]`}
        />{" "}
        <div id="_fifth" className="mx-auto flex items-center gap-2">
          <img src="/images/secure-icon.svg" alt="" />{" "}
          <span className="medium-text text-[12px] leading-5 tracking-[-0.2] text-[#8897AE]">
            100% Safe & Secure Payment
          </span>
        </div>
      </div> */}
      {/* this is for the modal */}
      {isModalActive && (
        <Moadal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          body={bankFetchLoader}
        />
      )}

      {/* this is for the maturity action */}

      <MaturityAction />
      {/* <PaymentSuccess /> */}
      <div id="space" className="h-3"></div>
    </>
  );
};

export default FDPaymentSummary;

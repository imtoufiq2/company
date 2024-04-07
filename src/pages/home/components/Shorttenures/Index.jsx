import React from "react";
import BankCard from "./BankCard";
import { useSelector } from "react-redux";

const Index = () => {
  const { data } = useSelector((state) => state?.banks?.banks);

  console.log(data);
  const bankIntrestInfo = [
    {
      bankIcon: "/images/bankLogo.svg",
      bankName: "Bajaj Finserv",
      duration: "1 yr return",
      intrestPercent: "9.10%",
      bg: "#FFF5E4",
    },
    {
      bankIcon: "/images/SBI-logo.svg",
      bankName: "State Bank of India",
      duration: "1 yr return",
      intrestPercent: "9.10%",
      bg: "#E2EEE5",
    },
    {
      bankIcon: "/images/Shriram-finance-icon.svg",
      bankName: "Shriram Finance",
      duration: "1 yr return",
      intrestPercent: "9.10%",
      bg: "#E2EEE5",
    },
    {
      bankIcon: "/images/axis-bank-icon.svg",
      bankName: "Axis Bank",
      duration: "1 yr return",
      intrestPercent: "9.10%",
      bg: "#FFF5E4",
    },
  ];
  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-5  max-w-[1008px]">
      <div id="top" className=" my-4   ">
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3]   text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          Short tenures,{" "}
          <span className="text-custom-green block sm:inline-block ">
            high interest rate
          </span>
        </h2>
      </div>
      <div
        id="bottom"
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {bankIntrestInfo?.map((curBank, index) => {
          return <BankCard key={index} curBank={curBank} />;
        })}

        {/* <BankCard />
        <BankCard />
        <BankCard /> */}
      </div>
    </div>
  );
};

export default Index;

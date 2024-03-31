import React from "react";
import BankCard from "./BankCard";

const Index = () => {
  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-5 border-b max-w-[1008px]">
      <div id="top" className=" my-4   ">
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3]">
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
        <BankCard />
        <BankCard />
        <BankCard />
        <BankCard />
      </div>
    </div>
  );
};

export default Index;

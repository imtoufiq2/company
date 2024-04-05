import React from "react";
import Card from "./components/Card";

const BottomHero = () => {
  const data = [
    {
      titile: "High Returns",
      imgUrl: "/images/HighReturn.svg",
    },
    {
      titile: "Tax Savers",
      imgUrl: "/images/taxSaver.svg",
    },
    {
      titile: "Long Term Fund",
      imgUrl: "/images/longTermFund.svg",
    },
    {
      titile: "High Returns",
      imgUrl: "/images/HighReturn.svg",
    },
    {
      titile: "Tax Savers",
      imgUrl: "/images/taxSaver.svg",
    },
    {
      titile: "Long Term Fund",
      imgUrl: "/images/longTermFund.svg",
    },
   
   
  ];
  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-4 justify-between md:gap-10 max-w-[1008px] ">
      <div id="topContent">
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          <span className="text-[#21B546]">Discover FDs</span> based on your{" "}
         <span className="block"> requirements</span>
        </h2>
      </div>
      {/* mauto */}
      <div id="images" className="flex gap-5">
        <div id="mobileView" className="flex  gap-5 flex-1 sm:hidden">
         
          
          {
            data.slice(0,3).map((curData, index)=>{
              return  <Card key={index} details={curData}/>
            })
          }
        </div>
        <div id="laptopView" className="hidden sm:flex  flex-1 gap-5 max-w-[1008px]">
        {
            data.map((curData, index)=>{
              return  <Card key={index} details={curData}/>
            })
          }
          
         
        </div>
      </div>

      <div
        id="tryFD"
        className="bg-[#15362B] w-full rounded-xl text-white flex justify-between items-center p-6 gap-3"
      >
        <div
          id="left"
          className="flex items-center gap-1  text-sm md:text-xl tracking-[-0.2] md:tracking-[-0.3] leading-6 md:leading-8  font-bold "
        >
          Not sure which FD to invest in?
        </div>
        <button
          id="right"
          className="bg-[#21B546] px-3 md:px-5  py-[6px] md:py-[10px] text-sm text-[16px] font-medium rounded-md tracking-[-0.2] leading-6 md:leading-7 md:tracking-[-0.3] whitespace-nowrap"
        >
          Try FD Finder
        </button>
      </div>
    </div>
  );
};

export default BottomHero;



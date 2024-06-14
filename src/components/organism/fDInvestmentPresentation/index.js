import React, { useMemo, useState } from "react";
import MediaPresentationCard from "../mediaPresentationCard";

const FDInvestmentPresentation = () => {
  const videoCards = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => index + 1);
  }, []);

 
  return (
    <div className="mx-auto  flex w-[90%] max-w-[1008px] flex-col gap-5 md:gap-10 md:w-[75%]">
      <div id="topContent">
       
        <h2 className="bold-text text-xl  leading-8 tracking-[-0.3] text-[#1B1B1B]  md:hidden max-h-[64px]" >
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>

        <h2 className=" medium-text   text-[#1B1B1B] md:text-4xl  md:leading-[44px]  md:tracking-[-0.1] hidden md:block" >
          Learn why this is the{" "}
          <span className="text-[#21B546] bold-text">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="example flex w-full gap-3  overflow-x-scroll sm:gap-6 md:gap-12"
      >
        {videoCards?.map((videoData) => {
          return <MediaPresentationCard key={videoData} />;
        })}
      </div>
    </div>
  );
};

export default FDInvestmentPresentation;

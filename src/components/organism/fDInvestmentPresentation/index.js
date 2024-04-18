import React, { useMemo, useState } from "react";
import MediaPresentationCard from "../mediaPresentationCard";

const FDInvestmentPresentation = () => {
    const videoCards = useMemo(() => {
        return Array.from({ length: 3 }, (_, index) => index + 1);
      }, []);
    
      console.log(videoCards);
  return (
    <div className="my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-4 max-w-[1008px]">
      <div id="topContent">
        {/* <h2> based on your requirements</h2> */}
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="flex gap-3 sm:gap-6 md:gap-11  w-full overflow-x-scroll example"
      >
        {videoCards?.map((videoData) => {
          return <MediaPresentationCard key={videoData} />;
        })}
      </div>
    </div>
  )
}

export default FDInvestmentPresentation

import React, { useMemo, useState } from "react";
import MediaPresentationCard from "../mediaPresentationCard";

const FDInvestmentPresentation = () => {
  const videoCards = useMemo(() => {
    return Array.from({ length: 3 }, (_, index) => index + 1);
  }, []);

  console.log(videoCards);
  return (
    <div className="mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%]">
      <div id="topContent">
        {/* <h2> based on your requirements</h2> */}
        <h2 className="text-[20px] bold-text leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:semi-bold-text md:leading-[44px]  md:tracking-[-0.1]">
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block  ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="example flex w-full gap-3  overflow-x-scroll sm:gap-6 md:gap-11"
      >
        {videoCards?.map((videoData) => {
          return <MediaPresentationCard key={videoData} />;
        })}
      </div>
    </div>
  );
};

export default FDInvestmentPresentation;

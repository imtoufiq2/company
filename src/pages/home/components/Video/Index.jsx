import React from "react";
import VideoCard from "./components/VideoCard";

const Index = () => {
  return (
    <div className="my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-4 max-w-[1008px]">
      <div id="topContent">
        {/* <h2> based on your requirements</h2> */}
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          Learn why this is the{" "}
          <span className="text-[#21B546]">right time</span>{" "}
          <span className=" block sm:inline-block ">to invest in FDs</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="flex gap-3 sm:gap-6 md:gap-11  w-full overflow-x-scroll example"
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import Card from "./components/Card";

const BottomHero = () => {
  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col min-h-[300px] justify-between md:gap-10 max-w-[1008px]">
      <div id="topContent">
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3] text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          <span className="text-[#21B546]">Discover FDs</span> based on your{" "}
          <span className=" block sm:inline-block ">requirements</span>
        </h2>
      </div>
      {/* mauto */}
      <div id="images" className="flex gap-5">
        <div id="mobileView" className="flex sm:hidden gap-5 flex-1">
          <Card />
          <Card />
          <Card />
        </div>
        <div id="laptopView" className="hidden sm:flex gap-5 flex-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div
        id="tryFD"
        className="bg-[#15362B] w-full rounded-xl text-white flex justify-between items-center p-6 gap3"
      >
        <div
          id="left"
          className="text-sm md:text-xl tracking-[-0.2] md:tracking-[-0.3] leading-6 md:leading-8  font-bold "
        >
          Not sure which FD to invest in?
        </div>
        <button
          id="right"
          className="bg-[#21B546] px-3 md:px-5  py-[6px] md:py-[10px] text-sm text-[16px] font-medium rounded-md tracking-[-0.2] leading-6 md:leading-7 md:tracking-[-0.3]"
        >
          Try FD Finder
        </button>
      </div>
    </div>
  );
};

export default BottomHero;

//  <div
//    id="bottom"
//    className="flex justify-between items-center h-[84px] bg-[#15362B] text-white px-3 md:px-6 rounded-xl"
//  >
//    <div
//      id="left"
//      className="text-[20px] tracking-[-0.3] leading-8 font-medium break-words gap-2"
//    >
//      Not sure which FD to invest in?
//    </div>
//    <button
//      id="right"
//      className="bg-[#21B546] py-[10px] px-5 rounded-md text-white leading-7 tracking-[-0.3]"
//    >
//      Try FD Finder
//    </button>
//  </div>;

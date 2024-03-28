import React from "react";

const BottomHero = () => {
  return (
    <div className=" w-[90%] md:w-[75%] mx-auto ">
      {/* <div
        id="top"
        className="font-bold text-4xl leading-[44px] tracking-[-1] text-[#1B1B1B] w-1/2"
      >
        <span className="text-[#21B546]"> Discover FDs</span> based on your
        requirements
      </div>
      <div id="middle">D</div> */}
      <div
        id="bottom"
        className="flex justify-between items-center gap-2 md:gap-5 min-h-[84px] bg-[#15362B] text-white px-3 md:px-6 rounded-xl"
      >
        <div
          id="left"
          className="text-sm tracking-[-0.2] md:text-[20px]    font-bold leading-6  md:tracking-[-0.3] py-3"
        >
          Not sure which FD to invest in?
        </div>
        <button
          id="right"
          className="bg-[#21B546] px-3 py-[6px] md:px-5 md:py-[10px] rounded-md text-white leading-7 tracking-[-0.3]"
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

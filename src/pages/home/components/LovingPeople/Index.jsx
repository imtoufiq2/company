import React from "react";
import Card from "./Card";

const Index = () => {
  return (
    <div className="my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-4 max-w-[1008px]">
      <div id="top" className=" my-4   ">
        <h2 className="font-bold md:font-semibold text-[20px] md:text-4xl leading-8 tracking-[-0.3] md:tracking-[-0.1] md:leading-[44px]">
          People <span className="text-custom-green">love</span> ❤️{" "}
          <span className="text-custom-green">investing</span>{" "}
          <span className=" block sm:inline-block ">in FDs with us</span>
        </h2>
      </div>
      <div
        id="bottom"
        className="flex gap-3 sm:gap-6 md:gap-11  w-full overflow-x-scroll example"
      >
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Index;

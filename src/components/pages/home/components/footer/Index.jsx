import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";

const Footer = () => {
  return (
    <footer className="bg-[#15362B] py-20 mt-5 md:mt-10">
      <div className=" w-[90%]  md:w-[75%] mx-auto flex flex-col lg:flex-row    max-w-[1008px] justify-between gap-5 md:gap-8 lg:gap-16">
        <Left /> <Right />
      </div>
    </footer>
  );
}; 

export default Footer;

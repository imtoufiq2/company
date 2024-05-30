import React from "react";
import Moadal from "../modal";
import TextSmallLight from "../../atoms/textSmallLight";
import ChevronNormal from "../../../Icons/Chevron-normal";
import CompareReturnsTable from "../compareReturnsTable";
import { AiOutlineClose } from "react-icons/ai";

const CompareReturns = ({setShowPopUp}) => {
  const bodyData = (
    <div className="relative top-4 mx-auto flex  h-full w-full max-w-[39.25rem]  flex-col rounded-lg border-0 bg-[#FFF6ED] py-5 shadow-lg outline-none focus:outline-none lg:h-auto pb-0">
      <div className="relative flex   flex-col justify-between gap-5 rounded-t">
        <div id="_header" className="px-5">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
            Compare Returns
          </h3>
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] md:text-sm md:leading-6">
            Compare interest rates of different FDs in a glance
          </p>
        </div>
        {/* this is the middle section */}
        
        <div
          id="_middle"
          className="flex items-center justify-between bg-[#FFEBD8] px-5 min-h-12"
        >
          <div id="_left">
            <label className="flex cursor-pointer items-center gap-1">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#28BF4E] peer-checked:after:translate-x-full  "></div>
              <TextSmallLight
                text="Senior Citizen"
                className=" medium-text text-sm leading-6 tracking-[-0.2] text-[#2D3643]"
              />
            </label>
          </div>
          <div id="_right" className="flex items-center gap-1 md:gap-3" >
            <div id="_first" className="semi-bold-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] hidden md:block">Compounding</div>
            <div id="_second">
              {" "}    
               <aside className="relative scale-[0.8] md:scale-100">
            <select
              className=" medium-text medium-text appearance-none rounded-md border bg-[#F0F3F9] py-1 pl-2 pr-9 text-xs  leading-6 tracking-[-0.2] text-[#5E718D] outline-none hover:cursor-pointer pt-0 max-h-6"
            >
            <option value="maturity">At maturity</option>
                  <option value="monthly">1 yrs</option>
                  <option value="quarterly">2 yrs</option>
            </select>
            <ChevronNormal toCenter/>
          </aside>
            </div>
          </div>
        </div>
        <div id="_table" className="p-5">
          <CompareReturnsTable/></div>
          <button
            className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70 pr-5"
            onClick={() =>{
          
              setShowPopUp(false)
            }}
          >
            <AiOutlineClose size={20} />
          </button>
      </div>
    </div>
  );
  return (
    <div>
      <Moadal body={bodyData} isTable />
    </div>
  );
};

export default CompareReturns;

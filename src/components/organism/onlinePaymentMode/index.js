import React from "react";
import UpiMethod from "../upiMethod/UpiMethod";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "../../atoms/Image";

const OnlinePaymentMode = ({ setActiveIndex, activeIndex, upiData }) => {
  return (
    <>
      <fieldset
        className={` rounded-xl border-[0.5px]  ${
          activeIndex !== 0 ? "border" : "border-[#21B546] "
        }`}
      >
        <legend className="text-right bg-[#FFC700] py-[2] px-2 rounded-md text-[12px] font-medium leading-5 tracking-[-0.2] text-white mr-5">
          Recommended
        </legend>
        <div id="parent" className="flex flex-col gap-5 p-5">
          <div
            id="top"
            className="flex justify-between items-center"
            onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
          >
            <div className="flex gap-2">
              <div
                id="logo"
                className="w-[38px] h-[38px] rounded-md border flex justify-center items-center"
              >
                <Image
                  src={"/images/upi.svg"}
                  className="select_arrow"
                  alt="UPI-icon"
                  width=""
                  height=""
                />
              </div>
              <div id="addUPI">
                <h3 className="text-sm font-semibold leading-6 tracking-[-0.2] text-[#1B1B1B]">
                  Add Bank via UPI
                </h3>
                <p className="font-normal text-[12px] leading-5 text-[#5E718D] tracking-[-0.2]">
                  Fast and automatic verification
                </p>
              </div>
            </div>
            <div id="icon">
              {activeIndex === 0 ? (
                <BsChevronUp color={"#A3ADBC"} size={20} />
              ) : (
                <BsChevronDown color={"#A3ADBC"} size={20} />
              )}
            </div>
          </div>
          <div
            id="bot"
            className={`${
              activeIndex !== 0 ? "hidden" : "flex"
            }  flex-col gap-2 transition-all ease-in-out duration-200 `}
          >
            <div
              id="text"
              className="text-[12px] font-medium leading-5 tracking-[-0.2] text-center text-[#5E718D]"
            >
              Scan this QR code using your UPI app
            </div>
            <div
              id="bottomDiv"
              className="flex gap-8 md:gap-3 flex-col md:flex-row"
            >
              <div
                id="scanner"
                className="min-w-[118px] min-h-[118px] border m-auto"
              >
                <Image
                  src={"/images/scanner.svg"}
                  alt="scanner"
                  className="w-full h-full"
                />
              </div>
              <div
                id="bottom"
                className="flex items-center justify-between  w-full h-fit m-auto"
              >
                {upiData?.map((upiInfo, index) => {
                  return <UpiMethod key={index} upiInfo={upiInfo} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default OnlinePaymentMode;

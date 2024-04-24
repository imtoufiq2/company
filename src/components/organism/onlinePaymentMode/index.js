import React from "react";
import UpiMethod from "../upiMethod/UpiMethod";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Image from "../../atoms/Image";

const OnlinePaymentMode = ({
  setActiveIndex,
  activeIndex,
  upiData,
  qrCode,
}) => {
  return (
    <>
      <fieldset
        className={` rounded-xl border-[0.5px]  ${
          activeIndex !== 0 ? "border" : "border-[#21B546] "
        }`}
      >
        <legend className="mr-5 rounded-md bg-[#FFC700] px-2 py-[2] text-right text-[12px] font-medium leading-5 tracking-[-0.2] text-white">
          Recommended
        </legend>
        <div id="parent" className="flex flex-col gap-5 p-5">
          <div
            id="top"
            className="flex items-center justify-between"
            onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
          >
            <div className="flex gap-2">
              <div
                id="logo"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-md border"
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
                <p className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
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
            }  flex-col gap-2 transition-all duration-200 ease-in-out `}
          >
            <div
              id="text"
              className="text-center text-[12px] font-medium leading-5 tracking-[-0.2] text-[#5E718D]"
            >
              Scan this QR code using your UPI app
            </div>
            <div
              id="bottomDiv"
              className="flex flex-col gap-8 md:flex-row md:gap-3"
            >
              <div
                id="scanner"
                className="m-auto min-h-[118px] min-w-[118px] border"
              >
                <Image
                  src={qrCode}
                  alt="Please wait..."
                  className="h-32 w-32"
                />
              </div>
              <div
                id="bottom"
                className="m-auto flex h-fit  w-full items-center justify-between"
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

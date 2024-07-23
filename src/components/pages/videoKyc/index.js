import React from "react";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button/Button";
const VideoKyc = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="mx-auto  flex w-full max-w-[1008px] flex-col sm:max-w-[592px] md:mt-8 md:overflow-hidden md:rounded-2xl md:border"
        // style={{ border: "2px solid red" }}
      >
        <div
          className=" relative min-h-[373px] w-full px-6 pt-6  md:px-[72px] md:pt-[72px]"
          style={{
            backgroundImage: "url('/images/kyc-bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // border: "2px dotted red",
          }}
        >
          <span className=" mb-6 inline-block md:hidden ">
            <LeftArrow
              width="24"
              height="24"
              color="#fff"
              onClickFun={() => navigate(-1)}
            />
          </span>
          <div id="_parent">
            <div id="_data" className="flex flex-col gap-2 md:gap-8">
              <div id="_first" className="flex items-center gap-6 ">
                <span className=" hidden md:block ">
                  <LeftArrow
                    width="24"
                    height="24"
                    color="#fff"
                    onClickFun={() => navigate(-1)}
                  />
                </span>
                <div
                  id="_right"
                  className="bold-text text-2xl  leading-7 tracking-[-0.5px] text-white"
                >
                  Video KYC
                </div>
              </div>
              <div
                id="_text-data"
                className="regular-text text-sm leading-5 tracking-[-0.2px] text-white md:text-base md:leading-6"
              >
                It is mandatory to complete your Video KYC to invest in{" "}
                <span className="bold-text">Utkarsh Bank </span>
                Fixed Deposit.
              </div>
            </div>

            <img
              className="absolute left-[50%] top-[60%] mx-auto h-[228px] w-[228px] -translate-x-2/4"
              src="/images/aunty-with-card.gif"
              alt="lady"
            />
          </div>
        </div>

        <div
          id="_second"
          className="mb-6 mt-20 flex flex-col gap-4 px-6    md:mb-[72px] md:px-[72px] "
        >
          <div
            id="_headingh3"
            className="bold-text text-sm  leading-5 tracking-[-0.2px] text-[#1B1B1B] md:text-base md:tracking-[-0.3px]"
          >
            Instructions
          </div>
          <div id="_first">
            <span className="regular-text text-xs tracking-[-0.2px] md:text-sm md:leading-5">
              Be present in a{" "}
              <span className="semi-bold-text">well-lit area</span> against a
              light coloured backdrop.
            </span>
          </div>
          <div id="_second">
            <span className="regular-text text-xs tracking-[-0.2px] md:text-sm md:leading-5">
              Keep your <span className="semi-bold-text">Aadhaar card </span>{" "}
              and
              <span className="semi-bold-text"> PAN card </span> handy.
            </span>
          </div>
          <div id="_third">
            <span className="regular-text text-xs tracking-[-0.2px] md:text-sm md:leading-5">
              Keep a <span className="semi-bold-text">blank white paper</span>{" "}
              and a <span className="semi-bold-text">pen</span> with you to
              capture your signature.
            </span>
          </div>
          <Button
            label="Start Video KYC"
            className="medium-text mt-12  bg-[#21B546] px-5 py-[10px]  text-base leading-7 tracking-[-0.3px] text-white md:mt-4 "
          />
        </div>
      </div>

      <div className="md:h-7" />
    </>
  );
};

export default VideoKyc;

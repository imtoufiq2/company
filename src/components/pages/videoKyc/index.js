import React from "react";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/button/Button";
const VideoKyc = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto  flex w-full max-w-[1008px] flex-col sm:max-w-[592px] md:rounded-2xl md:border "
      style={{ border: "2px solid red" }}
    >
      <div
        className=" relative min-h-[373px] w-full "
        style={{
          backgroundImage: "url('/images/kyc-bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border: "2px solid red",
        }}
      >
        <div id="_data">
          <div id="_first" className="flex gap-6 ">
            <span className="hidden md:block">
              <LeftArrow
                width="24"
                height="24"
                onClickFun={() => navigate(-1)}
              />
            </span>

            <div
              id="_right"
              className="bold-text text-2xl  leading-7 tracking-[-0.5] text-white"
            >
              Video KYC
            </div>
          </div>
          <div
            id="_text-data"
            className="regular-text text-sm leading-5 tracking-[-0.2] text-white md:text-base md:leading-6"
          >
            It is mandatory to complete your Video KYC to invest in{" "}
            <span className="bold-text">Utkarsh Bank </span>
            Fixed Deposit.
          </div>
        </div>

        {/* position: absolute;
    bottom: -50%;
    transform: translateY(-50%); */}
        {/* <div id="_gif" className="absolute -bottom-1/2 -translate-y-1/2"> */}
        {/* -bottom-1/2 */}
        <img
          className="absolute  left-2/4 mx-auto h-[228px] w-[228px] -translate-y-1/2"
          src="/images/aunty-with-card.gif"
          alt="lady"
        />
        {/* </div> */}
      </div>

      <div id="_second" className="mt-20">
        <div
          id="_headingh3"
          className="bold-text text-sm leading-5 tracking-[-0.2] text-[#1B1B1B] md:text-base md:tracking-[-0.3]"
        >
          Instructions
        </div>
        <div id="_first">
          <span className="regular-text text-xs tracking-[-0.2]">
            Be present in a{" "}
            <span className="semi-bold-text">well-lit area</span> against a
            light coloured backdrop.
          </span>
        </div>
        <div id="_second">
          <span className="regular-text text-xs tracking-[-0.2]">
            Keep your <span className="semi-bold-text">Aadhaar card </span> and
            <span className="semi-bold-text"> PAN card </span> handy.
          </span>
        </div>
        <div id="_third">
          <span className="regular-text text-xs tracking-[-0.2]">
            Keep a <span className="semi-bold-text">blank white paper</span> and
            a <span className="semi-bold-text">pen</span> with you to capture
            your signature.
          </span>
        </div>
        <Button
          label="Start Video KYC"
          className="medium-text bg-[#21B546] px-5 py-[10px]  text-base leading-7 tracking-[-0.3] text-white "
        />
      </div>
    </div>
  );
};

export default VideoKyc;

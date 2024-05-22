import React from "react";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
// import Button from '../../pages/home/components/HeroSection/components/Button'

import Button from "../../atoms/button/Button";
import UserAvatarGroup from "../../molecules/userAvatarGroup";
import { useNavigate } from "react-router-dom";

const BankInvestmentWidget = ({ apiData }) => {
  const navigate = useNavigate();
  return (
    <div
      id="right"
      //
      // className="mx-auto min-h-[350px] w-[90%] max-w-[320px] -translate-y-[20%] rounded-2xl border-[0.5px] bg-white p-0 pr-0 sm:pr-0 lg:mr-0 lg:h-fit lg:w-[35%] lg:min-w-[320px] lg:translate-y-[47%] lg:p-3 lg:pb-0 lg:pt-0 1039:translate-y-[15%] xl:translate-y-[15%]"
      className="1056:translate-y-[13%] mx-auto min-h-[350px] w-[90%] max-w-[320px] -translate-y-[20%] rounded-2xl border-[0.5px] bg-white p-0 pr-0 sm:pr-0 lg:mr-0 lg:h-fit lg:w-[35%] lg:min-w-[320px] lg:translate-y-[24%] lg:p-3 lg:pb-0 lg:pt-0 1039:translate-y-[24%] xl:translate-y-[14%]"
    >
      <div
        id="bankLogo"
        // -translate-y-1/2
        className="m-auto flex  h-[3.75rem]    w-[3.75rem] -translate-y-1/2 items-center justify-center  rounded-full border border-[#D4FC79] bg-white lg:h-20 lg:w-20"
      >
        <Image
          src={apiData?.logo_url ? apiData?.logo_url : ""}
          alt="bank logo"
          className="h-9 w-9 object-contain lg:h-12 lg:w-12"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 p-5 py-3 pb-4  pt-0 sm:gap-5 sm:py-6  sm:pb-4 sm:pt-0 lg:-translate-y-3 lg:gap-6 lg:p-7 lg:pb-2 lg:pt-0 ">
        <div
          id="badget"
          className="m-auto flex w-fit items-center gap-[6px] rounded-md bg-[#FFF6ED] px-[6px] py-[2px] lg:gap-[10px]  lg:px-2 lg:py-1 -mt-[14px] lg:-mt-2"
        >
          <Image
            src="/images/Fire.svg"
            alt="Popular fire icon"
            className="h-4 w-4"
          />
          <TextDisplay
            className="medium-text text-xs    leading-5   tracking-[-0.2] text-[#FC8415]   lg:text-sm lg:leading-6"
            text="Popular"
            elementType="p"
          />
        </div>
        <Heading
          text={apiData?.issuer_name ? apiData?.issuer_name : "-"}
          type="h3"
          className=" bold-text text-center text-base   leading-7  tracking-[-0.3]  lg:text-xl lg:leading-8"
        />
        <div id="earUpto" className="-mt-1 mb-1">
          <p className="regular-text  text-center text-xs  leading-5 tracking-[-0.2]  lg:text-sm lg:leading-6 text-[#5E718D]">
            Earn up to
          </p>
          <h3 className="bold-text text-center  text-[1.75rem]   leading-9 tracking-[-0.5] text-[#21B546]  lg:text-[2rem] lg:leading-10">
            <span>
              {apiData?.rate_of_interest ? apiData?.rate_of_interest: "-"}<span className="text-2xl lg:leading-8 tracking-[-0.5]">%</span>
            </span>{" "}
            <span className="text-xs lg:text-sm medium-text leading-5 lg:leading-6 tracking-[-0.2]">p.a.</span>
          </h3>
        </div>
        <div id="avatar  " className=" text-center mb-1 lg:mb-2">
          <TextDisplay
            className="regular-text w-full  text-center   text-xs leading-5 lg:text-sm lg:leading-6 ] text-[#5E718D] tracking-[-0.2"
            text="Invested by 12,000+ investors "
            elementType="p"
          />
          <div
            id="avatarGroup"
            className="relative flex items-center justify-center"
          >
            <UserAvatarGroup />
          </div>
        </div>

        <Button
          label="Invest Now"
          className="medium-text max-h-10 md:min-h-12 w-full rounded-md bg-[#21B546] px-[15px] py-2 text-sm lg:text-base  leading-6 lg:leading-7 tracking-[-0.2] lg:tracking-[-0.3] text-[#FFFFFF] transition-all duration-200 ease-in-out active:scale-[0.99] md:px-5 md:py-[10px] md:leading-7 md:tracking-[-0.2]"
          onClick={() => navigate(`/invest/${apiData?.fd_id}`)}
        />
      </div>
    </div>
  );
};

export default BankInvestmentWidget;

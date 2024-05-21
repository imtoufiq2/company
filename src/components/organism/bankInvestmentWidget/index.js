import React from "react";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
// import Button from '../../pages/home/components/HeroSection/components/Button'

import Button from "../../atoms/button/Button";
import UserAvatarGroup from "../../molecules/userAvatarGroup";
import { useNavigate } from "react-router-dom";

const BankInvestmentWidget = ({ apiData }) => {
  const navigate=useNavigate()
  return (
    <div
      id="right"
      //
      className="mx-auto min-h-[350px] w-[90%] max-w-[320px] -translate-y-[20%] rounded-2xl border-[0.5px] bg-white p-0 pr-0 sm:pr-0 lg:mr-0 lg:h-fit lg:w-[35%] lg:min-w-[320px] lg:translate-y-[47%] lg:p-3 lg:pb-0 lg:pt-0 1039:translate-y-[15%] xl:translate-y-[15%]"
    >
      <div
        id="bankLogo"
        // -translate-y-1/2
        className="m-auto flex  h-[60px]    w-[60px] -translate-y-1/2 items-center justify-center  rounded-full border border-[#D4FC79] bg-white lg:h-[80px] lg:w-[80px]"
      >
        <Image
          src={apiData?.logo_url ? apiData?.logo_url : ""}
          alt="bank logo"
          className="h-[36px] w-[36px] object-contain lg:h-[48px] lg:w-[48px]"
        />
      </div>
      <div className="flex flex-col justify-between gap-5 p-5 py-3 pb-4  pt-0 sm:gap-5 sm:py-6  sm:pb-4 sm:pt-0 lg:-translate-y-3 lg:gap-6 lg:p-7 lg:pb-2 lg:pt-0 ">
        <div
          id="badget"
          className="m-auto flex w-fit gap-[6px] rounded-md bg-[#FFF6ED] px-[6px] py-[2px] lg:gap-[10px] lg:px-2  lg:py-1 "
        >
          <Image src="/images/Fire.svg" alt="Popular fire icon" />
          <TextDisplay
            className="medium-text text-[12px]    leading-5  tracking-[-0.2] text-orange-500 lg:text-sm   lg:leading-6"
            text="Popular"
            elementType="p"
          />
        </div>
        <Heading
          text={apiData?.issuer_name ? apiData?.issuer_name : "-"}
          type="h3"
          className=" bold-text text-center text-[16px]   leading-7 tracking-[-0.3] lg:text-[20px]  lg:leading-8"
        />
        <div id="earUpto" className="">
          <p className="regular-text  text-center text-[12px]  font-normal leading-5 tracking-[-0.2]  lg:text-[14px] lg:leading-6">
            Earn up to
          </p>
          <h3 className="bold-text text-center  text-[28px]  leading-9 tracking-[-0.5] text-[#21B546]  lg:text-[32px] lg:leading-10">
            <span>{apiData?.rate_of_interest ? apiData?.rate_of_interest : "-"}%</span> <span className="text-sm">p.a.</span>
          </h3>
        </div>
        <div id="avatar" className=" text-center">
          <TextDisplay
            className="regular-text w-full  text-center   text-[12px] leading-6 tracking-[-0.2] text-[#5E718D] lg:text-[14px]"
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
          className="medium-text w-full rounded-md bg-[#21B546] px-[15px] py-2 text-[16px] text-sm font-medium leading-6 tracking-[-0.2] text-[#FFFFFF] transition-all duration-200 ease-in-out active:scale-[0.99] md:px-5 md:py-[10px] md:leading-7 md:tracking-[-0.2] max-h-12"
          onClick={() => navigate(`/invest/${apiData?.fd_id}`)}

        />
      </div>
    </div>
  );
};

export default BankInvestmentWidget;

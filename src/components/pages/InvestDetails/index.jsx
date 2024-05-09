import React, { useEffect } from "react";
import FooterSection from "../../organism/footerSection";
import SafetyTrustInfo from "../../molecules/SafetyTrustInfo";
import InvestmentBenefits from "../../molecules/InvestmentBenefits";
import FDsComparison from "../../organism/FDsComparison";
import TenureSelection from "../../organism/TenureSelection";
import InvestDetailsHero from "../../organism/InvestDetialsHero";
import Button from "../../atoms/button/Button";
import TextDisplay from "../../atoms/textContent/TextContent";
import UserAvatarGroup from "../../molecules/userAvatarGroup";
import Image from "../../atoms/Image";
import FDActionSection from "../../molecules/FDActionSection";
import RightSection from "../../organism/section/Right";
import AssistanceContainer from "../../organism/assistanceContainer";
import LeftSection from "../../organism/section/Left";
import Heading from "../../atoms/headingContent/Heading";
import FaqSection from "../../organism/faqSection";
import SupportSection from "../../organism/supportSection";
import ChevronNormal from "../../../Icons/Chevron-normal";
import { useNavigate } from "react-router-dom";
import TextSmallLight from "../../atoms/textSmallLight";

const InvestDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <div className="h-[224px] bg-gradient-to-l from-[#0C3483] to-[#6B8CCE]" />
      <div
        id="_parent"
        className="mx-auto  my-4 mb-[-8%] flex w-[90%] max-w-[1008px]  -translate-y-[140px] flex-col gap-4 md:w-[75%] lg:mb-[-6.5%] lg:-translate-y-[150px] lg:flex-row lg:gap-6"
      >
        <div
          id="_main_left"
          // use here also xl
          className="flex w-full flex-col  gap-6 lg:w-[58.73%] lg:gap-10"
        >
          <div
            id="_top"
            className="flex h-fit w-full flex-col gap-8 rounded-xl  border-[0.5px] bg-white "
          >
            <div id="_header" className="flex h-fit justify-between p-8 pb-0">
              <div
                id="bankLogo"
                className=" flex  h-[60px]  w-[60px]  items-center justify-center  rounded-full border  bg-white lg:h-[80px] lg:w-[80px]"
              >
                <Image
                  src="/images/SBI-logo.svg"
                  alt="bank logo"
                  className="h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]"
                />
              </div>
              <div id="_middle" className="ml-6 flex flex-1 flex-col gap-4">
                <h3 className="bold-text text-2xl leading-8 tracking-[-0.4]">
                  State Bank of India
                </h3>
                <div
                  id="badget"
                  className=" flex w-fit gap-[6px] rounded-md bg-[#FFF6ED] px-[6px] py-[2px] lg:gap-[10px] lg:px-2  lg:py-1 "
                >
                  <Image src="/images/Fire.svg" alt="Popular fire icon" />
                  <TextDisplay
                    className="medium-text text-[12px]    leading-5  tracking-[-0.2] text-orange-500 lg:text-sm   lg:leading-6"
                    text="Popular"
                    elementType="p"
                  />
                </div>
              </div>
              <div
                id="_right"
                className="flex h-[38px] w-[38px]  items-center justify-center rounded-md border p-[10]"
              >
                <img
                  src="/images/shareIcon.svg"
                  alt="share-icon"
                  className="h-[18px] w-[18px] cursor-pointer"
                />
              </div>
            </div>
            <div
              id="_earnUptoDetails"
              className="flex items-center justify-between px-8"
            >
              <div id="_lefts" className="">
                <p className="medium-text text-sm leading-6 tracking-[-0.2] text-[#455468]">
                  Earn up to
                </p>
                <h5 className="bold-text text-4xl leading-[44px] tracking-[-1] text-[#21B546]">
                  9.50%{" "}
                  <span className="text-2xl leading-8 tracking-[-0.5]">
                    p.a.
                  </span>
                </h5>
              </div>

              <div id="_right" className="flex gap-2 md:gap-5">
                <div id="_right_left">
                  <p className="regular-text text-center text-sm  leading-6 tracking-[-0.2] text-[#5E718D]">
                    Minimum Deposit
                  </p>
                  <h3 className="semi-bold-text text-center text-lg leading-7 tracking-[-0.3]">
                    D 5,000
                  </h3>
                </div>
                <div
                  id="_vertical-line"
                  className="h-[44px] w-[1px] border-[0.5px] bg-[#AFBACA]"
                ></div>
                <div id="_right_right">
                  <p className="regular-text text-center text-sm  leading-6 tracking-[-0.2] text-[#5E718D]">
                    Lock-in
                  </p>
                  <h3 className="semi-bold-text text-center text-lg leading-7 tracking-[-0.3]">
                    7 days
                  </h3>
                </div>
              </div>
            </div>
            <div id="avatar" className="flex items-center gap-2 px-8">
              <TextDisplay
                className="regular-text     text-[12px] leading-6 tracking-[-0.2] text-[#5E718D] lg:text-[14px]"
                text="Invested by 12,000+ investors "
                elementType="p"
              />
              <div id="avatarGroup" className="relative flex  ">
                <UserAvatarGroup />
              </div>
            </div>
            <div
              id="_bottom"
              className="flex items-center gap-2 bg-[#E8FFED] px-8 py-4"
            >
              <Image src="/images/verifyIcon.svg" alt="verifyIcon" />

              <TextSmallLight
                text="Investments up to 5L insured by DICGC"
                className=" medium-text text-sm leading-6  text-[#21B546]"
              />
            </div>
          </div>

          <TenureSelection />
          <SafetyTrustInfo />
          <FDsComparison />
          <InvestmentBenefits />
          <FDActionSection />
          <SupportSection isDetails={true} />
          <FaqSection className={"mx-0 w-full md:w-full"} />
        </div>
        <div id="_main_right" className="w-full lg:w-[38.4%]">
          <div
            id="_right"
            className="flex w-full flex-col  gap-5 rounded-xl border-[0.5px] bg-white p-8 "
          >
            <div id="_first" className="flex flex-col gap-2">
              <Heading
                text="Make Investment"
                type="h3"
                className="text-xl leading-8 sm:leading-8 sm:tracking-[-0.5]"
              />

              <TextSmallLight
                text="Choose your amount and preferred tenure"
                className="regular-text text-sm leading-6"
              />
            </div>
            <div id="_second" className="flex flex-col gap-[6px]">
              <TextSmallLight
                text="Investment Amount"
                className="medium-text text-sm leading-6 text-[#3D4A5C]"
              />
              <label
                htmlFor="emailInput"
                className={`medium-text flex w-full items-center rounded-md border bg-white`}
                disabled={false}
              >
                <div className="flex cursor-pointer items-center gap-1 border-r border-[#D7DFE9] px-[14px] py-2 text-[#AFBACA]">
                  <img src="/images/rupessIcon.svg" alt="rupessIcon" />
                </div>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="Enter amount"
                  className={
                    "medium-text placeholder:regular-text w-full rounded-md border border-none border-[#AFBACA] bg-white  p-2    text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] outline-none placeholder:text-sm "
                  }
                />
              </label>
            </div>
            <div
              id="_third_TenureandCompounding"
              className="flex justify-between gap-5"
            >
              <div id="_left" className="flex-1">
                <label
                  htmlFor=""
                  className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
                >
                  Tenure
                </label>

                <aside className="relative bg-white">
                  <select className=" medium-text w-full appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer">
                    <option value="maturity">3 yrs</option>
                    <option value="monthly">1 yrs</option>
                    <option value="quarterly">2 yrs</option>
                  </select>
                  <ChevronNormal />
                </aside>
              </div>
              <div id="_right" className="flex-1">
                <label
                  htmlFor=""
                  className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]"
                >
                  Compounding
                </label>

                <aside className="relative bg-white">
                  <select className=" medium-text w-full appearance-none rounded-md border bg-white py-2 pl-3 pr-9 text-sm leading-6 tracking-[-0.2] outline-none hover:cursor-pointer">
                    <option value="maturity">3 yrs</option>
                    <option value="monthly">1 yrs</option>
                    <option value="quarterly">2 yrs</option>
                  </select>
                  <ChevronNormal />
                </aside>
              </div>
            </div>
            <div id="_fourth">
              <label className="flex cursor-pointer items-center gap-1">
                <input type="checkbox" value="" className="peer sr-only" />
                <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#28BF4E] peer-checked:after:translate-x-full  "></div>
                <TextSmallLight
                  text="I am a Senior Citizen"
                  className=" medium-text  text-sm  leading-6 text-[#2D3643]"
                />
              </label>
            </div>
            <div id="_fifth">
              <div id="_first" className="flex items-center justify-between">
                <TextSmallLight
                  text="Interest Rate"
                  className="regular-text text-sm leading-6"
                />
                <h3 className="bold-text text-right text-2xl leading-8 tracking-[-0.5] text-[#21B546]">
                  9.30%{" "}
                  <span className=" text-sm leading-5 tracking-[-0.3]">
                    p.a.
                  </span>
                </h3>
              </div>
              <div id="_first" className="flex items-center justify-between">
                <TextSmallLight
                  text="At maturity you will get"
                  className="regular-text text-sm leading-6"
                />
                <Heading
                  text="₹ 6,70,920"
                  type="h3"
                  className=" text-base leading-7  "
                />
              </div>
              <div id="_first" className="flex items-center justify-between">
                <TextSmallLight
                  text="Total Interest Earned"
                  className="regular-text text-sm leading-6"
                />
                <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#21B546]">
                  9.30% <span className="text-xl tracking-[-0.3]">p.a.</span>
                </h3>
              </div>
            </div>
            <Button
              onClick={() => navigate("/fd-summary")}
              label="Proceed"
              // disabled={!panValid || !emailValid || isPanExistFromDb}
              className={`medium-text mt-3 max-h-12 md:mt-4 ${
                true
                  ? "bg-custom-green text-[#fff]"
                  : "bg-[#F0F3F9] text-[#AFBACA] "
              } ${false ? "opacity-60" : "opacity-100"}`}
            />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default InvestDetails;

// <>
//   {/* this is blue box */}
//   <div className="h-[224px] bg-gradient-to-l from-[#0C3483] to-[#6B8CCE]"></div>
//   <div className="flex flex-col  gap-5 sm:gap-6 md:gap-10 ">
//     <div id="_grid" className="grid grid-cols-1 lg:grid-cols-2">
//       {/* <InvestDetailsHero /> */}
//     </div>
//     <InvestDetailsHero />
//     {/* inside main div */}
//     {/* <div className="] flex w-full  flex-col bg-red-50  ">
//       <TenureSelection />
//       <SafetyTrustInfo />
//       <FDsComparison />
//       <InvestmentBenefits />
//     </div> */}
//   </div>
//   <FooterSection />
// </>

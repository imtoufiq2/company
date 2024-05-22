import React, { useEffect, useState } from "react";
import LeftSection from "../section/Left";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import InvestmentBenefits from "../investmentBenefits";
import {getFirstAndLastName} from "../../../utils/commonUtils"
import { heroData } from "../../../constants/staticData";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import Avatar from "../../molecules/Avatar/index";
const BankInvestmentOverview = ({apiData}) => {
const [ UserLogedIn ,setUserLogedIn]=useState(false)
  useEffect(() => {
    const checkLoginStatus = () => {
      const userData = getData("userData");
      if (userData?.access_token) {
        setUserLogedIn(true);
      } else {
        setUserLogedIn(false);
      }
      setTimeout(checkLoginStatus, 1000);
    };
    checkLoginStatus();

    return () => clearTimeout(checkLoginStatus);
  }, []);
  // console.log("userLogedInddd", UserLogedIn)
  const userInfo=getLocalStorageData("uInfo")
  return (
    <LeftSection className="bg-[#E8FFED] pb-[100px] lg:w-[60%] lg:pb-0">
      <div
        id="left"
        className="lg:pt5 m-auto  flex w-[90%] flex-col    gap-4  pt-3 lg:h-fit    lg:w-full lg:my-0 h-fit xl:pb-[60px]"
      >
        <div id="first" className="flex items-center justify-between ">
          <div
            id="left"
            className="flex items-center gap-1  text-[16px]  regular-text leading-7 tracking-[-0.3] lg:text-[20px] "
          >
            <Image
              src="/images/goodMorning.svg"
              alt="greeting icon"
              className="h-5 w-5 text-[#000]"
            />
            <span className="text-black regular-text text-base leading-7 tracking-[-0.3]">
              Good Morning,{" "}
              <span
                className={`bold-text md:text-xl leading-8 tracking-[-0.3] ${UserLogedIn ? "visible" : "invisible"}`}
              >
                {userInfo?.investor_name ? getFirstAndLastName(userInfo?.investor_name) :""}!
              </span>
            </span>
          </div>

          <span
            className={`md:hidden ${UserLogedIn ? "visible" : "invisible"}`}
          >
            {/* <Avatar2 /> */}
            <Avatar className="h-10 w-10" profileCompleted={userInfo?.profile_completion_score} />
          </span>
        </div>

        <h2
          id="second"
          className=" text-xl bold-text  md:text-5xl md:medium-text leading-8 md:leading-[60px]  tracking-[-0.3] text-[#1B1B1B] lg:text-4xl lg:semi-bold-text  lg:leading-[60px] lg:tracking-[-0.1]  xl:text-[45px] xl:semi-bold-text xl:leading-[60px]  xl:tracking-[-0.1] "
        >
          <span>Invest in fixed deposits and earn </span>
          <span className=" block sm:inline ">
            returns <span className="text-[#21B546]">up to {apiData?.rate_of_interest ? apiData?.rate_of_interest : "-"}%</span>
          </span>
        </h2>
        <div id="third " className="flex flex-col gap-3 lg:pb-10 xl:pb-0">
          <div id="thirtop" className="flex items-center gap-2 text-[#5E718D]">
            <Image
              src="/images/Lightbulb.svg"
              alt="Lightbulb"
              className="h-[18px] w-[18px]"
            />

            <TextDisplay
              className="text-sm medium-text leading-6 tracking-[-0.2]   lg:text-lg lg:leading-[1.875rem]  lg:tracking-[-0.3] whitespace-normal text-[#5E718D]"
              text="Reasons to invest with us"
              elementType="p"
            />
          </div>
          <div
            id="thirdImages"
            className="m-auto flex w-full justify-between gap-1 sm:flex-wrap sm:gap-2 lg:gap-0 mb-6 lg:mb-0 "
          >
            {heroData?.map((data, index) => (
              <InvestmentBenefits key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </LeftSection>
  );
};

export default BankInvestmentOverview;

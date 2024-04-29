import React, { useEffect, useState } from "react";
import LeftSection from "../section/Left";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import InvestmentBenefits from "../investmentBenefits";
import Avatar2 from "../../molecules/Avatar/index";
import { heroData } from "../../../constants/staticData";
import { getData } from "../../../utils/Crypto";
const BankInvestmentOverview = () => {
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
            <span className="text-black">
              Good Morning,{" "}
              <span
                className={`bold-text ${UserLogedIn ? "visible" : "invisible"}`}
              >
                Sameer!
              </span>
            </span>
          </div>

          <span
            className={`md:hidden ${UserLogedIn ? "visible" : "invisible"}`}
          >
            <Avatar2 />
          </span>
        </div>

        <h2
          id="second"
          className=" text-[20px] bold-text leading-8 tracking-[-0.3] text-[#1B1B1B] lg:text-4xl lg:semi-bold-text  lg:leading-[60px] lg:tracking-[-0.1]  xl:text-[45px] xl:semi-bold-text xl:leading-[60px]  xl:tracking-[-0.1] "
        >
          <span>Invest in fixed deposits and earn </span>
          <span className=" block sm:inline-block ">
            returns <span className="text-[#21B546]">up to 9.50%</span>
          </span>
        </h2>
        <div id="third " className="flex flex-col gap-3 ">
          <div id="thirtop" className="flex items-center gap-2 text-[#5E718D]">
            <Image
              src="/images/Lightbulb.svg"
              alt="Lightbulb"
              className="h-[18px] w-[18px]"
            />

            <TextDisplay
              className="text-sm medium-text leading-6   lg:text-lg lg:leading-[30px]  lg:tracking-[-0.3]"
              text="Reasons to invest with us"
              elementType="p"
            />
          </div>
          <div
            id="thirdImages"
            className="m-auto flex w-full justify-between gap-1 sm:flex-wrap sm:gap-2 lg:gap-3"
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

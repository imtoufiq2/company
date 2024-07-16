import React, { useEffect, useState } from "react";
import LeftSection from "../section/Left";
import Image from "../../atoms/Image";
import TextDisplay from "../../atoms/textContent/TextContent";
import InvestmentBenefits from "../investmentBenefits";
import { getFirstAndLastName } from "../../../utils/commonUtils";
import { heroData } from "../../../constants/staticData";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import Avatar from "../../molecules/Avatar/index";
import { useNavigate } from "react-router-dom";
const BankInvestmentOverview = ({ apiData }) => {
  const navigate=useNavigate()
  const [UserLogedIn, setUserLogedIn] = useState(false);
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

  const userInfo = getLocalStorageData("uInfo");
  const digilocker = JSON.parse(
    sessionStorage.getItem("getKycVerificationInfo"),
  );
  const ckyc = JSON.parse(sessionStorage.getItem("panVerificationInfo"));

  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        return 'Good Morning';
      } else if (currentHour < 18) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    };

    setGreeting(getGreeting());
  }, []);
  return (
    <LeftSection className="bg-[#E8FFED] pb-[100px] 1024:h-full 1024:w-[60%] 1024:pb-0 1280:h-full 1280:w-[60%] 1280:pb-0">
      <div
        id="left"
        className="m-auto flex h-fit w-[90%] flex-col gap-4 pt-3 1024:my-0 1024:h-fit 1024:w-full 1024:gap-[1.8rem] 1024:pt-0 1280:my-0 1280:h-fit 1280:w-full 1280:gap-[1.8rem] xl:pb-[0px] xl:pt-0"
      >
        <div className="flex flex-col justify-between gap-[1rem]">
          <div id="first" className="flex items-center justify-between ">
            <div
              id="left"
              className="regular-text flex items-center  gap-1  text-[16px] leading-7 tracking-[-0.3px] lg:text-[20px]"
            >
              <Image
                src="/images/goodMorning.svg"
                alt="greeting icon"
                className="h-5 w-5 text-[#000]"
              />
              <span className="regular-text flex text-base leading-7 tracking-[-0.3px] text-black">
               {greeting}{" "}
                <span
                  className={`bold-text leading-8 tracking-[-0.3px] md:text-xl ${UserLogedIn ? "block" : "hidden"}`}
                >
                  {userInfo?.first_name
                    ? `, ${userInfo.first_name}`
                    : digilocker?.first_name
                      ? `, ${digilocker?.first_name}`
                      : ckyc?.first_name
                        ? `, ${ckyc?.first_name}`
                        : ""}
                </span>
                <span className="bold-text leading-8 tracking-[-0.3px] md:text-xl">
                  !
                </span>
              </span>
            </div>

            <span
              className={`md:hidden ${UserLogedIn ? "visible" : "invisible"}`}
              onClick={()=>navigate("/profile")}
            >
              <Avatar
                className="h-10 w-10"
               
                profileCompleted={userInfo?.profile_completion_score}
                imgUrl={
                  userInfo?.image_base64
                    ? userInfo?.image_base64
                    : digilocker?.image_base64
                      ? digilocker?.image_base64
                      : ckyc?.image_base64
                        ? ckyc?.image_base64
                        : ""
                }
              />
            </span>
          </div>

          <h2
            id="second"
            className=" bold-text md:medium-text  lg:semi-bold-text xl:semi-bold-text text-xl leading-8  tracking-[-0.3px] text-[#1B1B1B] md:text-5xl md:leading-[60px]  lg:text-4xl lg:leading-[60px]  lg:tracking-[-0.1px] xl:text-[45px] xl:leading-[60px]  xl:tracking-[-0.1px] "
          >
            <span>Invest in fixed deposits and earn </span>
            <span className=" block sm:inline ">
              returns{" "}
              <span className="text-[#21B546]">
                up to 9.25%
                {/* {apiData?.rate_of_interest ? apiData?.rate_of_interest : "-"}% */}
              </span>
            </span>
          </h2>
        </div>
        <div id="third " className="flex flex-col gap-[1.5rem] xl:pb-0">
          <div id="thirtop" className="flex items-center gap-2 text-[#5E718D]">
            <Image
              src="/images/Lightbulb.svg"
              alt="Lightbulb"
              className="h-[18px] w-[18px]"
            />

            <TextDisplay
              className="medium-text whitespace-normal text-sm leading-6   tracking-[-0.2px] text-[#5E718D]  lg:text-lg lg:leading-[1.875rem] lg:tracking-[-0.3px]"
              text="Reasons to invest with us"
              elementType="p"
            />
          </div>
          <div
            id="thirdImages"
            className="m-auto mb-6 flex w-full justify-between gap-1 sm:flex-wrap sm:gap-2 lg:mb-0 lg:gap-0 "
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

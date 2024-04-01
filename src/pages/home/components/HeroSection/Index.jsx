import React from "react";
import ImageCard from "./components/ImageCard";
import Avatar from "./components/Avatar";
import Button from "./components/Button";

const Index = () => {
  const heroData = [
    {
      img: "/images/homeIconHero.svg",
      title: "Invest in any bank’s FD",
    },
    {
      img: "/images/heroSecondIcon.svg",
      title: "Regulated by RBI",
    },
    {
      img: "/images/heroThirdIcon.svg",
      title: "Safe & Secure Returns",
    },
  ];
  return (
    <div id="mainParent" className="md:bg-[#C2F2CE] md:mb-[100px] ">
      <div
        id="parent"
        className="max-w-[1008px]  md:w-[75%] mx-auto w-full mb-[10px] flex flex-col md:flex-row"
      >
        <div id="leftParent" className=" bg-[#C2F2CE] pb-[100px] md:w-[60%]">
          <div
            id="left"
            className="w-[90%] md:w-full  flex flex-col gap-4    m-auto  pt-3 md:pt5    md:h-fit "
          >
            <div id="first" className="flex justify-between items-center ">
              <div
                id="left"
                className="font-normal text-[16px] md:text-[20px]  leading-7   tracking-[-0.3] "
              >
                ☀️ Good Morning, <span className="font-bold">Sameer!</span>
              </div>
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-[#21B546] md:hidden"
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="Rounded avatar"
              ></img>
            </div>

            <h2
              id="second"
              className=" font-bold text-[20px] md:text-5xl leading-8 tracking-[-0.3] text-[#1B1B1B]  md:font-semibold md:leading-[60px]  md:tracking-[-0.1]  "
            >
              Invest in fixed deposits and earn{" "}
              <span className=" block sm:inline-block ">
                returns <span className="text-[#21B546]">up to 9.50%</span>
              </span>
            </h2>
            <div id="third " className="flex flex-col gap-3 ">
              <div id="thirtop" className="flex items-center gap-2">
                <img
                  src="/images/Lightbulb.svg"
                  alt="Lightbulb"
                  className="w-[18px] h-[18px]"
                />
                <p className="text-sm font-medium leading-6   md:text-lg md:leading-[30px]  md:tracking-[-0.3]">
                  Reasons to invest with us
                </p>
              </div>
              <div
                id="thirdImages"
                className="flex  gap-3 m-auto w-full sm:flex-wrap"
              >
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </div>
            </div>
          </div>
        </div>
        <div
          id="right"
          //
          className="  w-[90%] p-5 sm:py-6 lg:p-7  mx-auto -translate-y-[20%] min-h-[350px] bg-white rounded-2xl border-[0.5px]    py-3  md:w-[40%]  md:h-fit md:translate-y-[52%] 772:translate-y-[52%] 913:translate-y-[38%] 990:translate-y-[25%] lg:translate-y-[24%] "
        >
          <div
            id="bankLogo"
            // -translate-y-1/2
            className="w-[60px] h-[60px]  m-auto  rounded-full flex justify-center items-center  bg-white md:w-[80px] md:h-[80px]"
          >
            <img
              src="/images/SBI-logo.svg"
              alt=""
              className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]"
            />
          </div>
          <div className="flex flex-col gap-5 sm:gap-5 md:gap-6 justify-between  pt-0">
            <div
              id="badget"
              className="bg-[#FFF6ED] flex m-auto w-fit px-[6px] py-[2px] gap-[6px] md:gap-[10px] md:py-1 md:px-2  rounded-md "
            >
              <img src="/images/fire.svg" alt="Popular fire icon" />
              <p className="font-medium text-[12px]   leading-5  tracking-[-0.2] text-orange-500 md:text-sm   md:leading-6">
                Popular
              </p>
            </div>
            <h3
              id="bankName"
              className="font-bold text-[16px] leading-7  tracking-[-0.3] text-center md:text-[20px]  md:leading-8"
            >
              State Bank of India
            </h3>
            <div id="earUpto" className="">
              <p className="text-[12px]  font-normal leading-5  tracking-[-0.2] text-center md:text-[14px]  md:leading-6">
                Earn up to
              </p>
              <h3 className="font-bold text-[28px] tracking-[-0.5] leading-9  text-[#21B546] text-center md:text-[32px]  md:leading-10">
                <span>9.50% </span> <span className="text-sm">p.a.</span>
              </h3>
            </div>
            <div id="avatar" className=" text-center">
              <p className="font-normal text-[12px]  tracking-[-0.2]  leading-6 text-[#5E718D] md:text-[14px]">
                Invested by 12,000+ investors{" "}
              </p>
              <div
                id="avatarGroup"
                className="flex relative justify-center items-center"
              >
                <Avatar />
              </div>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

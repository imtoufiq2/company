import React from "react";
import BulbIcon from "../../../Icons/BulbIcon";

const Hero = () => {
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
    <div className="max-h-[490px] bg-[#C2F2CE] flex flex-col md:flex-row">
      <div id="left" className="max-h-[370px] my-auto">
        <div id="top">
          <h3 className="text-[20px] leading-8">
            ☀️ Good Morning, <span className="font-bold">Sameer!</span>
          </h3>
          <h2 className="text-5xl leading-[56px] tracking-[-1.75]">
            Invest in fixed deposits and earn returns{" "}
            <span className="text-[#21B546]">up to 9.50% </span>
          </h2>
        </div>
        <div id="bottom">
          <div id="first-row" className="flex">
            <BulbIcon />
            <p>Reasons to invest with us</p>
          </div>
          <div id="secon-row" className="flex">
            {heroData?.map((data) => {
              return (
                <div>
                  <img src={data?.img} alt={data?.title} />
                  <h4>{data?.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="right">asfda</div>
    </div>
  );
};

export default Hero;

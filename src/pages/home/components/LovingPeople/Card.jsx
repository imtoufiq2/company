import React from "react";
import avatarImage from "../../../../assets/images/avatar image.svg"
const Card = () => {
  return (
    <div className="min-w-[272px] min-h-[240px] bg-[#FFF9DF] rounded-xl flex flex-col justify-between">
      <p
        id="top"
        className="font-normal text-sm md:text-[16px] tracking-[-0.2] md:tracking-[-0.3] leading-6 md:leading-7 text-[#1B1B1B] p-5"
      >
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </p>
      <div
        id="bottomBox"
        className="min-h-[76px] bg-[#FFF2C4] rounded-xl flex p-5 gap-3"
      >
        <div id="leftAvatar" className="w-9 h-9">
          <img src={avatarImage} alt="avatar images" />
        </div>

        <div id="rightContent" className="tracking-[-0.2]">
          <h3 className="text-sm font-medium  leading-6 text-[#1B1B1B]">
            Saurabh Awasthi
          </h3>
          <p className="font-normal text-[#5E718D] text-[12px] leading-5 tracking-[-0.2]">
            Mumbai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

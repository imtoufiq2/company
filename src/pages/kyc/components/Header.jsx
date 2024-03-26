import React from "react";
import { useNavigate } from "react-router-dom";
import WatchIcon from "../../../Icons/WatchIcon";
import LeftArrow from "../../../Icons/LeftArrow";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="header"
        className="flex flex-col md:flex-row items-end md:items-center justify-between"
      >
        <div
          id="leftIcon"
          className="flex self-start  items-center gap-2 md:gap-4 "
        >
          <LeftArrow
            width="24"
            height="24"
            onClickFun={() => navigate("/verifyMobile")}
          />
          <h2 className="font-bold text-2xl leading-8 tracking-[-0.5] text-[#1B1B1B]">
            KYC Verification
          </h2>
        </div>
        <button
          className="flex items-center gap-1 md:gap-2 "
          onClick={(e) => e.preventDefault()}
        >
          <WatchIcon />
          <p className="font-semibold  leading-7 tracking-[-0.3] text-[#455468]">
            Verify Later
          </p>
        </button>
      </div>
      <div>
        <p
          id="content"
          className="font-normal leading-7 tracking-[-0.3] text-left text-[#1B1B1B]"
        >
          To make you investment ready we need to do your KYC. <br /> Please
          enter your PAN.
        </p>
      </div>
    </>
  );
};

export default Header;

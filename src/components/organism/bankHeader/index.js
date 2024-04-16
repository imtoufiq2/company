import React from "react";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import WatchIcon from "../../../Icons/WatchIcon";

const BankHeader = () => {
  const navigate = useNavigate();
  const verifyLater = () => {};
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
          <h2 className="font-bold text-[22px] leading-8 tracking-[-0.5] text-[#1B1B1B]">
            Add Bank Account
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 md:gap-2 "
          onClick={verifyLater}
        >
          <WatchIcon />
          <p className="font-semibold  leading-7 tracking-[-0.3] text-[#455468]">
            Verify Later
          </p>
        </button>
      </div>
      <p className="font-normal text-[16px] leading-7 text-[#1B1B1B] ">
        Securely add your bank account to become{" "}
        <span className="block">investment ready.</span>
      </p>
    </>
  );
};

export default BankHeader;

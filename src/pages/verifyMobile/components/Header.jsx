import React from "react";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h3 className=" leading-8  flex gap-2 items-center">
      <LeftArrow width="24" height="24" onClickFun={() => navigate("/login")} />
      <span className="text-[24px] font-bold leading-8 tracking-[-0.5] text-[##B1B1B] ">
        Verify Mobile
      </span>
    </h3>
  );
};

export default Header;

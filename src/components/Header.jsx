import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#FFFFFF] h-[60px] md:h-[80px] flex justify-center items-center  mx-auto border-[0.5px] border-[##D7DFE9] cursor-pointer "
      onClick={() => navigate("/")}
    >
      <img
        src="/images/logo-icon-light.svg"
        className="h-[26px] scale-[0.85] md:scale-100"
        alt="logo icon"
      />
    </div>
  );
};

export default Header;

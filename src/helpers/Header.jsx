import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="mx-auto flex h-[60px] cursor-pointer items-center justify-center  border-[0.5px] border-[##D7DFE9] bg-[#FFFFFF] md:h-[80px] "
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

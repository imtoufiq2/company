import React from "react";
import { navData } from "../../../constants/staticData";
import NavLinkItem from "../../atoms/navLinkItem/Index";

const MobileNavMenu = ({ toggleMenu }) => {
  return (
    <div
      id="mobileView"
      className=" absolute bottom-0 left-0 right-0 top-[80px] z-10 flex items-center justify-center bg-[#F9FAFB] md:hidden"
    >
      <ul className="relative top-1 flex h-[70%] w-full flex-col items-center justify-start gap-6 text-[16px] font-semibold leading-7 tracking-[-0.3px] lg:gap-10">
        {navData.map((data, index) => (
          <NavLinkItem
            key={index}
            to={data?.path}
            isActive={data?.isActive}
            title={data?.title}
            className={"cursor-pointer text-3xl"}
            onClick={() => {
              toggleMenu();
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MobileNavMenu;

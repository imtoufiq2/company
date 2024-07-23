import React from "react";
import NavLinkItem from "../../atoms/navLinkItem/Index";
import { navData } from "../../../constants/staticData";

const DesktopNavMenu = () => {
  return (
    <div id="menu" className="hidden md:block">
      <ul className="relative top-1 flex items-center gap-6 text-[16px] font-semibold leading-7 tracking-[-0.3px] lg:gap-10">
        {navData.map((data, index) => (
          <NavLinkItem
            key={index}
            to={data?.path}
            isActive={data?.isActive}
            title={data?.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavMenu;

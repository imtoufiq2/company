import React, { useState } from "react";

import ChevronIcon from "../../../Icons/Chevron-down";
import { BsChevronDown } from "react-icons/bs";
const Header = () => {
  const navData = ["Dashboard", "Invest", "Portfolio", "Refer & Earn"];
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="flex  gap-4 justify-between border border-red-500 h-20 px-20">
      <img src="/images/homeAltcaseLogo.svg" alt="altcase logo" />
      <div className="my-auto border-rose-500 border hidden md:block">
        <div id="left" className="max-w-fit  flex gap-20 items-center ">
          <ul className="flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-10 items-center">
            {navData.map((data, index) => {
              return (
                <li
                  className={`cursor-pointer ${
                    active === data && "text-[#21B546]"
                  }`}
                  key={index}
                  onClick={() => setActive(data)}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

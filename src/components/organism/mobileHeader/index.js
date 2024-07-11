import React from "react";
import MobileDashBoard from "../../../Icons/MobileDashBoard";
import MobileInvest from "../../../Icons/MobileInvest";
import MobilePortfolio from "../../../Icons/MobilePortfolio";
import MobileReferEarn from "../../../Icons/MobileReferEarn";
import { NavLink, useLocation } from "react-router-dom";

const MobileHeader = () => {
  const location = useLocation();
  const mobileNav = [
    {
      title: "Dashboard",
      icon: <MobileDashBoard active={location.pathname === "/"} />, // Pass active prop based on the current path
      path: "/",
    },
    {
      title: "Invest",
      icon: <MobileInvest active={location.pathname === "/invest"} />,
      path: "/invest",
    },
    {
      title: "Portfolio",
      icon: <MobilePortfolio active={location.pathname === "/portfolio"} />,
      path: "/portfolio",
    },
    {
      title: "Refer & Earn",
      icon: <MobileReferEarn active={location.pathname === "/earnRewards"} />,
      path: "/earnRewards",
    },
  ];

  return (
    <>
      <div className="fixed bottom-0 z-[10] w-full border-t border-[#D7DFE9] bg-white py-3 md:hidden">
        <div
          id="_inner_div"
          className="mx-auto flex w-[90%] items-center justify-between"
        >
          {mobileNav?.map((curVal) => {
            const isActive = location.pathname === curVal.path;

            return (
              <NavLink
                key={curVal.path}
                className="flex flex-col items-center justify-center"
                to={curVal.path}
              >
                <div
                  id="_img-div"
                  className="flex h-6 w-6 items-center justify-center "
                >
                  {curVal.icon}
                </div>
                <h2
                  className={` text-xs leading-5 tracking-[-0.2px] ${isActive ? "semi-bold-text text-green-500" : "regular-text text-black "}`}
                >
                  {curVal.title}
                </h2>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="h-[70px] md:hidden"></div>
    </>
  );
};

export default MobileHeader;

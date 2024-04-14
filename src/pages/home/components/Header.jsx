import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router";
import Example from "./progressProfile/Wrapper";
import { getData } from "../../../utils/Crypto";
import { NavLink } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userLogedIn, setUserLogedIn] = useState(false);

  const navData = [
    {
      title: "Dashboard",
      path: "/",
    },
    {
      title: "Invest",
      path: "/invest",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Refer & Earn",
      path: "/referEarn",
    },
  ];
  const [active, setActive] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isonBoardingPage = location.pathname;
  const accessTokenRef = useRef(getData("userData")?.access_token);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // useEffect(() => {
  //   if (getData("userData")?.access_token) {
  //     setUserLogedIn(true);
  //   } else {
  //     setUserLogedIn(false);
  //   }
  // }, []);
  useEffect(() => {
    const checkLoginStatus = () => {
      const userData = getData("userData");
      if (userData?.access_token) {
        setUserLogedIn(true);
      } else {
        setUserLogedIn(false);
      }
      setTimeout(checkLoginStatus, 1000);
    };
    checkLoginStatus();

    return () => clearTimeout(checkLoginStatus);
  }, []);

  return (
    <>
      {isonBoardingPage === "/login" ||
      isonBoardingPage === "/verifyMobile" ||
      isonBoardingPage === "/kyc" ? (
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
      ) : (
        <div className="flex max-w-screen-xl m-auto gap-2 lg:gap-4 justify-between items-center    h-20 px-5 lg:px-1">
          <div id="left" className="flex  gap-6 lg:gap-10 items-center">
            <img
              src="/images/homeAltcaseLogo.svg"
              alt="altcase logo"
              className="max-w-[114px] h-5 cursor-pointer"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            />

            <div id="menu" className="hidden md:block">
              <ul className="flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-6 lg:gap-10 items-center relative top-1">
                {navData.map((data, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={data?.path}
                      className={({ isActive }) =>
                        `cursor-pointer ${
                          isActive ? "text-[#21B546]" : "text-[#000]"
                        }`
                      }
                    >
                      {data?.title}
                    </NavLink>
                  );
                })}
              </ul>
            </div>

            {/* ================ */}
            {isMenuOpen && (
              <div
                id="mobileView"
                className=" absolute z-10 bg-[#F9FAFB] top-[80px] right-0 bottom-0 left-0 flex justify-center items-center md:hidden"
              >
                <ul className="flex flex-col font-semibold text-[16px] leading-7 tracking-[-0.3] gap-6 lg:gap-10 items-center relative top-1 justify-start w-full h-[70%]">
                  {navData.map((data, index) => {
                    return (
                      <NavLink
                        className={({ isActive }) =>
                          `cursor-pointer text-3xl ${
                            isActive ? "text-[#21B546]" : "text-[#000]"
                          }`
                        }
                        key={index}
                        to={data?.path}
                        onClick={() => {
                          toggleMenu();
                        }}
                      >
                        {data?.title}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div id="profileAndLogin" className="flex items-center gap-2">
            <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <RxCross2 size={25} />
              ) : (
                <RxHamburgerMenu size={25} />
              )}
            </span>
            {!userLogedIn ? (
              <button
                onClick={() => navigate("/login")}
                id="right"
                className="rounded-md font-semibold border px-5 py-[10px] my-auto text-[#55D976]  "
              >
                Login
              </button>
            ) : (
              <div
                id="profile"
                className="  hidden md:flex items-center gap-1 lg:gap-2"
              >
                <div id="avatar">
                  <Example label="Arbitrary content">
                    <CircularProgressbarWithChildren
                      value={60}
                      strokeWidth={5}
                      styles={buildStyles({
                        pathColor: "#21B546",
                      })}
                    >
                      <img
                        style={{
                          width: "82%",
                          height: "82%",
                          borderRadius: "100%",
                          objectFit: "cover",
                        }}
                        src={
                          "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                        }
                        alt="avatar with progress bar"
                      />
                    </CircularProgressbarWithChildren>
                  </Example>
                </div>
                <div
                  id="name"
                  className="font-medium text-[16px] leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit"
                >
                  Sameer Malhotra
                </div>

                <BsChevronDown
                  size={18}
                  color="#5E718D"
                  className="opacity-65"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

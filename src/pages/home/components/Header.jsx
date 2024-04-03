import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";
import Example from "./progressProfile/Wrapper";
export default function Header() {
  const navigate = useNavigate();
  const userLogedIn = false;

  const navData = ["Dashboard", "Invest", "Portfolio", "Refer & Earn"];
  const [active, setActive] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  return (
    <div className="flex max-w-screen-xl m-auto gap-2 lg:gap-4 justify-between items-center    h-20 px-5 lg:px-20">
      <div id="left" className="flex  gap-6 lg:gap-10 items-center">
        <img
          src="/images/homeAltcaseLogo.svg"
          alt="altcase logo"
          className="max-w-[114px] h-5"
        />

        <div id="menu" className="hidden md:block">
          <ul className="flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-6 lg:gap-10 items-center relative top-1">
            {navData.map((data, index) => {
              return (
                <li
                  className={`cursor-pointer ${
                    active === data && "text-[#21B546]"
                  }`}
                  key={index}
                  onClick={() => {
                    setActive(data);
                  }}
                >
                  {data}
                </li>
              );
            })}
          </ul>
        </div>
        {isMenuOpen && (
          <div
            id="mobileView"
            className=" absolute z-10 bg-[#F9FAFB] top-[80px] right-0 bottom-0 left-0 flex justify-center items-center md:hidden"
          >
            <ul className="flex flex-col font-semibold text-[16px] leading-7 tracking-[-0.3] gap-6 lg:gap-10 items-center relative top-1 justify-start w-full h-[70%]">
              {navData.map((data, index) => {
                return (
                  <li
                    className={`cursor-pointer text-3xl ${
                      active === data && "text-[#21B546]"
                    }`}
                    key={index}
                    onClick={() => {
                      setActive(data);
                      toggleMenu();
                    }}
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div id="profileAndLogin" className="flex items-center gap-2">
        <span className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RxCross2 size={25} /> // Assuming CancelButton is a component you've created for the cancel button
          ) : (
            <RxHamburgerMenu size={25} />
          )}
        </span>
        {userLogedIn ? (
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
              {/* <img
                className="w-10 h-10 rounded-full object-cover border-2 border-[#21B546] "
                src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                alt="Rounded avatar"
              ></img> */}
                 {/* <img
         
         className="w-10 h-10 md:w-[30px] md:h-[30px]  border-[#000] rounded-full object-cover    border-2 "
         src={"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"}
         alt=""
       /> */}

<Example label="Arbitrary content">
    <CircularProgressbarWithChildren value={60} strokeWidth={5} styles={buildStyles({
          pathColor: "#21B546",
        })}>
      <img
        style={{
          width: "82%",
          height: "82%",
          borderRadius: "100%",
          objectFit:"cover"
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
              // style={{
              //   whiteSpace: "nowrap",
              //   overflow: "hidden",
              //   width: "fitContent", 
              // }}
            >
              Sameer Malhotra
            </div>

      
              <BsChevronDown size={18} color="#5E718D" className="opacity-65" />
         
          </div>
        )}
      </div>
    </div>
  );
}

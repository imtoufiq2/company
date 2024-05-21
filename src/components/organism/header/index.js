import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "react-circular-progressbar/dist/styles.css";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import Image from "../../atoms/Image";
import ProfileLoginSection from "../../molecules/profileLoginSection";
import MobileNavMenu from "../mobileNavMenu";
import DesktopNavMenu from "../desktopNavMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userLogedIn, setUserLogedIn] = useState(false);
// const [userData, setUserData]=useState()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isonBoardingPage = location.pathname;

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
  // console.log("userLogedInddd", userLogedIn)
 
  return (
  
    <div className="bg-white fixed left-0 right-0 top-0 z-10 opacity-95	border-[0.5px] border-b-[#D7DFE9]">
      {isonBoardingPage === "/login" ||
      isonBoardingPage === "/verifyMobile" ||
      isonBoardingPage === "/kyc" || isonBoardingPage === "/add-bank-account" ? (
        <div
          className="mx-auto flex h-[60px] cursor-pointer items-center justify-center  border-[0.5px] border-[##D7DFE9] bg-[#FFFFFF] md:h-[60px] "
          onClick={() => navigate("/")}
        >
          <Image
            src="/images/logo-icon-light.svg"
            // className=" scale-[0.85] md:scale-100 h-5 w-[7.125rem]"
            className="h-7 w-[9.818125rem] md:h-5 md:w-[7.125rem]"
            alt="logo icon"
          />
         
        </div>
      ) : (
        <div className="m-auto flex h-[3.75rem] max-w-screen-xl items-center justify-between gap-2    px-5 lg:gap-4 lg:px-2">
          <div id="left" className="flex  items-center gap-6 lg:gap-10">
            <Image
              src="/images/homeAltcaseLogo.svg"
              alt="altcase logo"
              className="h-5 max-w-[114px] cursor-pointer"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            />

            <DesktopNavMenu />
            {/* ================ */}
            {isMenuOpen && <MobileNavMenu toggleMenu={toggleMenu} />}
          </div>

          <ProfileLoginSection
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            userLogedIn={userLogedIn}
          />
        </div>
      )}
    </div>
  
  );
};

export default Header;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "react-circular-progressbar/dist/styles.css";
import { getData } from "../../../utils/Crypto";
import Image from "../../atoms/Image";
import ProfileLoginSection from "../../molecules/profileLoginSection";
import MobileNavMenu from "../mobileNavMenu";
import DesktopNavMenu from "../desktopNavMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userLogedIn, setUserLogedIn] = useState(false);

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
  return (
    <>
      {isonBoardingPage === "/login" ||
      isonBoardingPage === "/verifyMobile" ||
      isonBoardingPage === "/kyc" ? (
        <div
          className="mx-auto flex h-[60px] cursor-pointer items-center justify-center  border-[0.5px] border-[##D7DFE9] bg-[#FFFFFF] md:h-[80px] "
          onClick={() => navigate("/")}
        >
          <Image
            src="/images/logo-icon-light.svg"
            className="h-[26px] scale-[0.85] md:scale-100"
            alt="logo icon"
          />
         
        </div>
      ) : (
        <div className="m-auto flex h-20 max-w-screen-xl items-center justify-between gap-2    px-5 lg:gap-4 lg:px-20">
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
    </>
  );
};

export default Header;

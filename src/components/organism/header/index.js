import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "react-circular-progressbar/dist/styles.css";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import Image from "../../atoms/Image";
import ProfileLoginSection from "../../molecules/profileLoginSection";
import MobileNavMenu from "../mobileNavMenu";
import DesktopNavMenu from "../desktopNavMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainProfileDetail } from "../../../redux/actions/profile";
import { fetchWithWait } from "../../../utils/method";

const Header = () => {
  const dispatch = useDispatch();
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


  // ============ code to get the header profile data ===========

  

  const getProfileDetail = useCallback(() => {
    const data = {
      display_location: "Profile",
      method: "Get",
      investor_id: Number(getLocalStorageData("uInfo")?.investor_id),
    };
    fetchWithWait({ dispatch, action: fetchMainProfileDetail(data) });
  }, [dispatch]);
  useEffect(() => {
    getProfileDetail();
  }, [getProfileDetail]);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 hidden border-[0.5px]	border-b-[#D7DFE9] bg-white opacity-95 md:block">
      {isonBoardingPage === "/login" ||
      isonBoardingPage === "/verifyMobile" ||
      isonBoardingPage === "/kyc" ||
      isonBoardingPage === "/add-bank-account" ? (
        <div
          className="mx-auto flex h-[60px] cursor-pointer items-center justify-center  border-[0.5px] border-[##D7DFE9] bg-[#FFFFFF]  md:h-[60px] "
          onClick={() => navigate("/")}
        >
          <Image
            src="/images/logo-icon-light.svg"
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

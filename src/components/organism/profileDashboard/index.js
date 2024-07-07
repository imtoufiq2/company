import React, { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import Avatar from "../../molecules/Avatar";
import toast from "react-hot-toast";

import { getLocalStorageData } from "../../../utils/Crypto";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";

const ProfileDashboard = ({ hanldeClickNext }) => {
  const navigate = useNavigate();
  const [showKyc, setShowKyc] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileDetails, setProfileDetails] = useState();

  console.log("profileDetails?.primary_account_no" ,profileDetails?.primary_account_no);

  const profileData = [
    {
      title: "Profile",
      //    {/* TODO : check the icon and chnage it import from the figma */}
      navigate: `/profile/details/${userInfo?.investor_id}`,
      url: "/images/UserPlus.svg",
      titleDetails: null,
    },
    {
      title: "Bank Accounts",
      url: "/images/bank-logo.svg",
      navigate: `/profile/bankdetails/${userInfo?.investor_id}`,
      titleDetails: {
        accountNumber: `XXXX${profileDetails?.primary_account_no?.toString().slice(-6)}`,
        accountType: "Primary A/C",
        logo: profileDetails?.bank_logo,
      },
    },
    {
      title: "Refer & Earn",
      navigate: "/earnRewards",
      url: "/images/referAndEarnMick.svg",
      titleDetails: null,
    },
    {
      title: "Help & Support",
      navigate: "/profile/help-support",
      url: "/images/help-and-support.svg",
      titleDetails: null,
    },
  ];

  const deleteProfile = async () => {
    const userInfoGet = getLocalStorageData("uInfo");

    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/investor/delete`,
        {
          investor_id: Number(userInfoGet?.investor_id),
        },
      );
      console.log("Deleted", response);

      localStorage.clear();
      sessionStorage.clear();

      navigate("/login");
    } catch (error) {
      console.error("Error in handleSkip:", error);
    }
  };

  useEffect(() => {
    const userInfoGet = getLocalStorageData("uInfo");
    console.warn("userInfo", userInfoGet);

    setUserInfo(userInfoGet);

    async function getProfileDetails() {
      try {
        setProfileLoading(true);
        const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
          display_location: "Profile",
          method: "Get",
          investor_id: Number(userInfoGet?.investor_id),
        });
        console.log("responseresponse", response?.data?.data);

        setProfileDetails(response?.data?.data);
      } catch (error) {
        console.error("Error in handleSkip:", error);
      } finally {
        setProfileLoading(false);
      }
    }
    getProfileDetails();
  }, []);
  return (
    <>
      <div id="_profile" className="flex max-h-20 items-center gap-5">
        <div id="_left">
          {/* TODO : make the avatar as customisable  */}
          <Avatar
            className="h-20 w-20"
            profileCompleted={profileDetails?.profile_score ?? 0}
            imgUrl={profileDetails?.image_base64}
          />
        </div>
        <div id="_right" className="flex flex-col gap-3">
          <div id="_top" className="flex flex-col gap-1">
            <h3 className="bold-text text-xl leading-8 tracking-[-0.3]">
              {profileDetails?.investor_name
                ? profileDetails?.investor_name
                : "New User"}
            </h3>
            <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D] md:text-base md:leading-7 md:tracking-[-0.3]">
              +91 {profileDetails?.mobile_no?.replace(/(\d{5})/g, "$1 ").trim()}
            </p>
          </div>
          <div
            id="_bottom"
            className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546] md:text-base md:leading-7 md:tracking-[-0.3]"
          >
            Your profile is {profileDetails?.profile_score}% complete
          </div>
        </div>
      </div>

      {!profileDetails?.is_ckyc_verified && (
        <div
          id="_kyc"
          className="flex max-h-[5.25rem] items-center justify-between gap-5 rounded-xl bg-[#15362B] p-5 text-white md:px-8"
        >
          <p
            id="_left"
            className="bold-text text-sm leading-6 tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3] "
          >
            Complete your KYC to become investment ready!
          </p>

          <Button
            label="Do KYC"
            className="medium-text h-fit  max-w-[4.5625rem] whitespace-nowrap rounded-md bg-[#21B546] px-3 py-[6px] text-sm leading-6 tracking-[-0.2] md:max-w-32"
            onClick={() => {
              navigate("/kyc");
            }}
          />
        </div>
      )}

      <div id="_box_button" className="flex flex-col gap-3">
        {profileData?.map((curVal, index) => {
          return (
            <div
              key={index}
              id="_profile"
              className="flex max-h-[4.875rem] items-center gap-5 rounded-xl border-[0.5px] bg-white p-5"
            >
              <div id="_left" className="rounded-md border p-[0.625rem]">
                {/* TODO : check the icon and chnage it import from the figma */}
                <img
                  src={curVal.url}
                  alt="UserPlus"
                  className="h-[1.125rem] w-[1.125rem]"
                />
              </div>
              <div id="_middle" className="flex-1">
                <h5 className="medium-text  text-sm leading-6 tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3]">
                  {curVal.title}
                </h5>
                {curVal?.titleDetails && (
                  <span className="flex items-center gap-1 ">
                    {curVal?.titleDetails?.logo && (
                      <img
                        src={curVal?.titleDetails?.logo}
                        alt="bank"
                        className="h-4 w-4 rounded"
                      />
                    )}
                   
                    {
                      profileDetails?.primary_account_no && 
                    <p className="regular-text mt-[0.15rem] text-xs leading-5 tracking-[-0.2] text-slate-500">
                      { curVal?.titleDetails?.accountNumber } • {" "}
                      {curVal?.titleDetails?.accountType}
                    </p>
                    }
                  </span>
                )}
              </div>
              {/* {console.log("curVal", curVal?.navigate)} */}
              <div
                id="_right"
                onClick={() => {
                  if (curVal?.titleDetails) {
                    if (profileDetails.is_ckyc_verified === 0) {
                      toast.error(
                        "Your CKYC is pending. Kindly do your KYC first.",
                      );
                    } else {
                      navigate(curVal?.navigate);
                    }
                    return;
                  }
                  navigate(curVal?.navigate);
                }}
              >
                <img
                  src="/images/CaretRight.svg"
                  alt=""
                  className="h-5 w-5 cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
      <Button
        onClick={deleteProfile}
        label="Delete Account"
        className="bold-text max-h-9 w-fit rounded-lg border  border-red-600 px-3 text-sm text-red-600 hover:bg-red-600 hover:text-white"
      />
      <div
        id="_footerInfo"
        className="regular-text mt-3 flex max-h-16 flex-col gap-3 text-xs leading-5 tracking-[-0.2] text-[#AFBACA] md:max-h-[4.5rem] md:text-sm md:leading-6"
      >
        <img
          src="/images/fadealtcaseLogo.svg"
          alt="fadealtcaseLogo"
          className="h-4 w-[4.44375rem]"
        />
        <div className="flex flex-col gap-1 ">
          <h5>App Version 1.0.1</h5>
          <p>© 2024 Altcase Investments Private Limited</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;

import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import TextDisplay from "../../atoms/textContent/TextContent";
import Avatar from "../../molecules/Avatar";
import { getData, getLocalStorageData } from "../../../utils/Crypto";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = getLocalStorageData("uInfo");
  const digilocker = JSON.parse(
    sessionStorage.getItem("getKycVerificationInfo"),
  );
  const ckyc = JSON.parse(sessionStorage.getItem("panVerificationInfo"));

  const profileScore = useSelector((state) => state?.profile?.mainProfileDetail?.profileDetails?.profile_score ?? 0);
  console.log("Profile Score:", profileScore);
  return (
    <div
      id="profile"
      className="  hidden items-center gap-1 md:flex lg:gap-2 cursor-pointer"
      onClick={() => navigate("/Profile")}
    >
      <Avatar
        className="h-10 w-10"
        profileCompleted={profileScore ? profileScore :userInfo?.profile_completion_score}
        imgUrl={
          userInfo?.image_base64
            ? userInfo?.image_base64
            : digilocker?.image_base64
              ? digilocker?.image_base64
              : ckyc?.image_base64
                ? ckyc?.image_base64
                : ""
        }
      />

      <TextDisplay
        id="name"
        className=" medium-text w-fit overflow-hidden whitespace-nowrap text-base leading-7 tracking-[-0.3px] text-[#455468]"
        text={
          userInfo?.first_name
            ? userInfo?.first_name
            : digilocker?.first_name
              ? digilocker?.first_name
              : ckyc?.first_name
                ? ckyc?.first_name
                : ""
        }
      />
      <BsChevronDown size={18} color="#5E718D" className="opacity-65" />
    </div>
  );
};

export default Profile;

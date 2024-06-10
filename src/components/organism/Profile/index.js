import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import TextDisplay from "../../atoms/textContent/TextContent";
import Avatar from "../../molecules/Avatar";
import { getLocalStorageData } from "../../../utils/Crypto";

const Profile = () => {
  const navigate = useNavigate();
  const userInfo = getLocalStorageData("uInfo");

  return (
    <div
      id="profile"
      className="  hidden items-center gap-1 md:flex lg:gap-2"
      onClick={() => navigate("/Profile")}
    >
      <Avatar
        className="h-10 w-10"
        profileCompleted={userInfo?.profile_completion_score}
        imgUrl={userInfo?.image_base64}
      />

      <TextDisplay
        id="name"
        className=" medium-text w-fit overflow-hidden whitespace-nowrap text-base leading-7 tracking-[-0.3] text-[#455468]"
        text={userInfo?.first_name ? userInfo?.first_name : ""}
      />
      <BsChevronDown size={18} color="#5E718D" className="opacity-65" />
    </div>
  );
};

export default Profile;

import React from "react";
import { BsChevronDown } from "react-icons/bs";

import TextDisplay from "../../atoms/textContent/TextContent";
import Avatar from "../../molecules/Avatar";
import { getLocalStorageData } from "../../../utils/Crypto";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate=useNavigate()
  const userInfo=getLocalStorageData("uInfo")
 
  return (
    <div id="profile" className="  hidden items-center gap-1 md:flex lg:gap-2" onClick={()=>navigate("/Profile")}>
      <Avatar className="w-10 h-10" profileCompleted={userInfo?.profile_completion_score } imgUrl={userInfo?.profile_image_url}/>

      <TextDisplay
        id="name"
        className=" w-fit overflow-hidden whitespace-nowrap medium-text text-base leading-7 tracking-[-0.3] text-[#455468]"
        text={userInfo?.first_name ? userInfo?.first_name : ""}
      />
      <BsChevronDown size={18} color="#5E718D" className="opacity-65" />
    </div>
  );
};

export default Profile;

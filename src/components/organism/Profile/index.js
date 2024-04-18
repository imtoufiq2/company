import React from "react";
import { BsChevronDown } from "react-icons/bs";

import TextDisplay from "../../atoms/textContent/TextContent";
import Avatar from "../../molecules/Avatar";

const Profile = () => {
  return (
    <div id="profile" className="  hidden md:flex items-center gap-1 lg:gap-2">
      <Avatar />

      <TextDisplay
        id="name"
        className=" text-[#455468] whitespace-nowrap overflow-hidden w-fit"
        text="Sameer Malhotra"
      />
      <BsChevronDown size={18} color="#5E718D" className="opacity-65" />
    </div>
  );
};

export default Profile;

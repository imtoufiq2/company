import React from "react";
import { BsChevronDown } from "react-icons/bs";

const LoginInput = () => {
  return (
    <div>
      <h6 className="text-sm leading-6 tracking-[-0.2] font-medium text-[#3D4A5C]">
        Mobile Number
      </h6>
      {/* TODO: Set the placeholder value text-[#AFBACA] */}
      <div className="flex items-center rounded-md border ">
        <div
          id="show-country "
          className="py-2 px-[14px] flex gap-1 items-center cursor-pointer text-[#AFBACA]"
        >
          IN <BsChevronDown />
        </div>

        <input
          type="number"
          className=" flex-1 rounded-r-md  text-custom-text-gray no-spinner  outline-none"
        />
      </div>
      <p
        id="content"
        className="text-custom-text-light-gray font-normal text-sm leading-6 tracking-[-0.2]"
      >
        You’ll receive an SMS with an OTP to verify your mobile number
      </p>
    </div>
  );
};

export default LoginInput;

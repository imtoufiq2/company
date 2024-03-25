import React from "react";

const MobileInfo = ({ mobileNumber }) => {
  return (
    <div className="tracking-[-0.3] text-[#1B1B1B]">
      <p className="font-normal text-base leading-7">
        Please enter the OTP sent on
      </p>
      <h4 className="text-[20px] font-semibold leading-8">{mobileNumber}</h4>
    </div>
  );
};

export default MobileInfo;

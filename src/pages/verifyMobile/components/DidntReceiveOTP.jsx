import React from "react";

const DidntReceiveOTP = ({ onResendClick }) => {
  return (
    <div id="didnt-recieved" className="flex justify-between items-center mt-3">
      <p className="font-normal tracking-[-0.3] leading-7 text-[#5E718D]">
        Didn’t receive OTP?
      </p>
      <button
        onClick={onResendClick}
        className="px-[15px] py-2 text-sm border rounded-md text-[#55D976] leading-6 tracking-[-0.2]"
      >
        Resend OTP
      </button>
    </div>
  );
};

export default DidntReceiveOTP;

import React from "react";
import Button from "../../atoms/button";

const LoginResentOtp = ({
  timer,
  localStorageData,
  formattedTimer,
  handleResendClick,
}) => {
  return (
    <div
      id="didnt-recieved"
      className="mt-7 flex items-center justify-between md:mt-5"
    >
      <p className="regular-text text-sm leading-5 tracking-[-0.2] text-[#5E718D] md:text-base md:leading-7 md:tracking-[-0.3] ">
        Didn’t receive OTP?
      </p>

      {!!timer && localStorageData.one === 1 ? (
        //logic to reset  timer
        <p className=" regular-text text-sm leading-6  tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3] ">
          Resend in{" "}
          <span className="bold-text md:leading-5">{formattedTimer}</span>
        </p>
      ) : (
        <Button
          label="Resend OTP"
          onClick={(e) => handleResendClick(e)}
          // className="medium-text h-fit w-fit rounded-md border  px-[13px] py-[6px] text-sm leading-6 tracking-[-0.2] text-[#55D976] border-[#55D976]"
          className="medium-text  h-fit max-h-9 w-fit rounded-md border border-[#55D976] px-3 py-[0.375rem] text-sm leading-6 tracking-[-0.2] text-[#55D976] active:scale-[0.9] md:min-h-10 md:px-[0.9375rem] md:py-2"
        />
      )}
    </div>
  );
};

export default LoginResentOtp;

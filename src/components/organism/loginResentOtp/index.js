import React from 'react'
import Button from '../../atoms/button'

const LoginResentOtp = ({timer , localStorageData , formattedTimer ,handleResendClick}) => {
  return (
    <div
          id="didnt-recieved"
          className="mt-3 flex items-center justify-between"
        >
          <p className="text-[14px] font-normal leading-7 tracking-[-0.3] text-[#5E718D]">
            Didn’t receive OTP?
          </p>

          {!!timer && localStorageData.one === 1 ? (
            //logic to reset  timer
            <p className="text-[14px]  font-normal tracking-[-0.3] ">
              Resend in <span className="font-bold">{formattedTimer}</span>
            </p>
          ) : (
            <Button
              label="Resend OTP"
              onClick={(e) => handleResendClick(e)}
              className="h-fit w-fit rounded-md border  px-[13px] py-[6px] text-sm leading-6 tracking-[-0.2] text-[#55D976] border-[#55D976]"
            />
          )}
        </div>
  )
}

export default LoginResentOtp
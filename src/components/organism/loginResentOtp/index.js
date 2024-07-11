import React from 'react'
import Button from '../../atoms/button'

const LoginResentOtp = ({timer , localStorageData , formattedTimer ,handleResendClick}) => {
  return (
    <div
          id="didnt-recieved"
          className="mt-7 md:mt-5 flex items-center justify-between"
        >
          <p className="regular-text text-sm md:text-base   leading-6 md:leading-7 tracking-[-0.2px] md:tracking-[-0.3px] text-[#5E718D] ">
            Didn’t receive OTP?
          </p>

          {!!timer && localStorageData.one === 1 ? (
            //logic to reset  timer
            <p className=" regular-text text-sm md:text-base  leading-6 md:leading-7 tracking-[-0.2px] md:tracking-[-0.3px] ">
              Resend in <span className="bold-text md:leading-6">{formattedTimer}</span>
            </p>
          ) : (
            <Button
              label="Resend OTP"
              onClick={(e) => handleResendClick(e)}
              // className="medium-text h-fit w-fit rounded-md border  px-[13px] py-[6px] text-sm leading-6 tracking-[-0.2] text-[#55D976] border-[#55D976]"
              className='rounded-md  border border-[#55D976] h-fit w-fit py-[0.375rem] px-3 medium-text text-sm leading-6 tracking-[-0.2px] text-[#55D976] md:py-2 md:px-[0.9375rem] max-h-9 md:min-h-10 active:scale-[0.9]'
            />
          )}
        </div>
  )
}

export default LoginResentOtp
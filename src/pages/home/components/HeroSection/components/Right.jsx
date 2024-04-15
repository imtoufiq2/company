import React from 'react'
import Avatar from './Avatar'
import Button from './Button'
import SBILogo from "../../../../../assets/images/SBI-logo.svg"

const Right = () => {
  return (
    < > <div
    id="bankLogo"
    // -translate-y-1/2
    className="w-[60px] h-[60px]  m-auto  rounded-full flex justify-center items-center  bg-white lg:w-[80px] lg:h-[80px] border border-[#D4FC79] -translate-y-1/2"
  >
    <img
      src={SBILogo}
      alt="SBILogo"
      className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]"
    />
  </div>
  <div className="flex flex-col gap-5 sm:gap-5 lg:gap-6 justify-between p-5 sm:py-6 lg:p-7">
    <div
      id="badget"
      className="bg-[#FFF6ED] flex m-auto w-fit px-[6px] py-[2px] gap-[6px] lg:gap-[10px] lg:py-1 lg:px-2  rounded-md "
    >
      <img src="/images/Fire.svg" alt="Popular fire icon" />
      <p className="font-medium text-[12px]   leading-5  tracking-[-0.2] text-orange-500 lg:text-sm   lg:leading-6">
        Popular
      </p>
    </div>
    <h3
      id="bankName"
      className="font-bold text-[16px] leading-7  tracking-[-0.3] text-center lg:text-[20px]  lg:leading-8"
    >
      State Bank of India
    </h3>
    <div id="earUpto" className="">
      <p className="text-[12px]  font-normal leading-5  tracking-[-0.2] text-center lg:text-[14px]  lg:leading-6">
        Earn up to
      </p>
      <h3 className="font-bold text-[28px] tracking-[-0.5] leading-9  text-[#21B546] text-center lg:text-[32px]  lg:leading-10">
        <span>9.50% </span> <span className="text-sm">p.a.</span>
      </h3>
    </div>
    <div id="avatar" className=" text-center">
      <p className="font-normal text-[12px]  tracking-[-0.2]  leading-6 text-[#5E718D] lg:text-[14px]">
        Invested by 12,000+ investors{" "}
      </p>
      <div
        id="avatarGroup"
        className="flex relative justify-center items-center"
      >
        <Avatar />
      </div>
    </div>
    <Button/>
  </div></>
  )
}

export default Right
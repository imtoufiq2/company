import React, { useState } from 'react'
import Button from '../../atoms/button/Button';
import Avatar from '../../molecules/Avatar';
import { getLocalStorageData } from '../../../utils/Crypto';

const ProfileDashboard = ({hanldeClickNext}) => {
    const [showKyc , setShowKyc]=useState(true)
    const profileData = [
        {
          title: "Profile",
          //    {/* TODO : check the icon and chnage it import from the figma */}
          url: "/images/UserPlus.svg",
          titleDetails: null,
        },
        {
          title: "Bank Accounts",
          url: "/images/bank-logo.svg",
          titleDetails: {
            accountNumber: "XXXX372250",
            accountType: "Primary A/C",
            logo: "/images/SBI-logo.svg",
          },
        },
        {
          title: "Refer & Earn",
          url: "/images/referAndEarnMick.svg",
          titleDetails: null,
        },
        {
          title: "Help & Support",
          url: "/images/help-and-support.svg",
          titleDetails: null,
        },
      ];

      const userInfo=getLocalStorageData("uInfo")
      console.warn("userInfo",userInfo)
  return (
    <>
    <div id="_profile" className="flex items-center gap-5 max-h-20">
      <div id="_left">
        {/* TODO : make the avatar as customisable  */}
        {/* <img src="/images/profile-image.svg" alt="" className="h-20 w-20" /> */}
        <Avatar className="h-20 w-20" profileCompleted={userInfo?.profile_completion_score ?? 0} imgUrl={userInfo?.image_base64
}/>
      </div>
      <div id="_right" className="flex flex-col gap-3">
        <div id="_top" className="flex flex-col gap-1">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3]">
            {userInfo?.investor_name ? userInfo?.investor_name :"New User"}
          </h3>
          <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D] md:text-base md:leading-7 md:tracking-[-0.3]">
            +91  {userInfo?.mobile_no?.replace(/(\d{5})/g, "$1 ").trim() }
            {/* {mobileNumber.replace(/(\d{5})/g, "$1 ").trim()} */}
          </p>
        </div>
        <div
          id="_bottom"
          className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546] md:text-base md:leading-7 md:tracking-[-0.3]"
        >
          Your profile is {userInfo?.profile_completion_score}% complete 
        </div>
      </div>
    </div>
    {
        showKyc &&  <div
        id="_kyc"
        className="flex items-center justify-between gap-5 rounded-xl bg-[#15362B] p-5 text-white md:px-8 max-h-[5.25rem]"
      >
        <p
          id="_left"
          className="bold-text text-sm leading-6 tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3] "
        >
          Complete your KYC to become investment ready!
        </p>
  
        <Button
          label="Do KYC"
          className="medium-text h-fit  max-w-[4.5625rem] whitespace-nowrap rounded-md bg-[#21B546] px-3 py-[6px] text-sm leading-6 tracking-[-0.2] md:max-w-32"
        />
      </div>
    }
   
    <div id="_box_button" className="flex flex-col gap-3">
      {profileData?.map((curVal, index) => {
        return (
          <div
            key={index}
            id="_profile"
            className="flex items-center gap-5 rounded-xl border-[0.5px] bg-white p-5 max-h-[4.875rem]"
          >
            <div id="_left" className="rounded-md border p-[0.625rem]">
              {/* TODO : check the icon and chnage it import from the figma */}
              <img
                src={curVal.url}
                alt="UserPlus"
                className="h-[1.125rem] w-[1.125rem]"
              />
            </div>
            <div id="_middle" className="flex-1">
              <h5 className="medium-text  text-sm leading-6 tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3]">
                {curVal.title}
              </h5>
              {curVal?.titleDetails && (
                <span className="flex items-center gap-1 ">
                  <img
                    src={curVal?.titleDetails?.logo}
                    alt="bank"
                    className="h-4 w-4 rounded"
                  />
                  <p className="regular-text text-xs leading-5 tracking-[-0.2] text-slate-500">
                    {curVal?.titleDetails?.accountNumber} •{" "}
                    {curVal?.titleDetails?.accountType}
                  </p>
                </span>
              )}
            </div>
            <div id="_right" onClick={()=>hanldeClickNext(curVal?.title)}>
              <img
                src="/images/CaretRight.svg"
                alt=""
                className="h-5 w-5 cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
    <div
      id="_footerInfo"
      className="regular-text mt-3 flex flex-col gap-3 text-xs leading-5 tracking-[-0.2] text-[#AFBACA] md:text-sm md:leading-6 max-h-16 md:max-h-[4.5rem]"
    >
      <img
        src="/images/fadealtcaseLogo.svg"
        alt="fadealtcaseLogo"
        className="h-4 w-[4.44375rem]"
      />
      <div className="flex flex-col gap-1 ">
        <h5>App Version 1.0.1</h5>
        <p>© 2024 Altcase Investments Private Limited</p>
      </div>
    </div>
   
  </>
  )
}

export default ProfileDashboard
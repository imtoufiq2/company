import React from 'react'
import Image from '../../atoms/Image'
import PortfolioInfoText from '../../atoms/PortfolioInfoText'
import EarnedTodayMessage from '../../atoms/earnedTodayMessage'

const TotalPortfolioValue = () => {
  return (
    <> <div id="_box_number_one" className="rounded-xl border-[0.5px] bg-white">
    <div
      id="_flexb0x"
      className="flex flex-col gap-5 lg:gap-2 p-5 lg:flex-row  lg:justify-between lg:items-center"
      // style={{ border: "1px dotted" }}
    >
      <div
        id="_first"
        className="flex flex-col gap-2"
      >
        <PortfolioInfoText text="Total Portfolio Value"/> 
        <h3 className="flex items-center gap-2">
          <span className="bold-text text-2xl leading-8 tracking-[-0.5]">
            <span className="regular-text text-base ">₹ {""}</span>
            5,34,930
          </span>
          <span className="medium-text flex items-center gap-2 text-sm leading-6 tracking-[-0.2] text-[#21B546]">
           
            <Image src="/images/green-grow.svg"
              alt="grow"
              className="h-[0.56rem] w-[0.91rem]" /> 
            <span>8.75% XIRR</span>
          </span>
        </h3>
      </div>
      <div
        id="_second"
        className="flex items-center justify-between gap-2 md:gap-3"
        // style={{ border: "1px dotted" }}
      >
        <div id="_left" className="flex flex-col gap-1">
          
          <PortfolioInfoText text="Total Investment"/> 
          <h3 className="semi-bold-text text-base leading-7 tracking-[-0.3] text-[#1B1B1B]">
            <span className="regular-text">₹</span> 5,00,000
          </h3>
        </div>
        <div id="_right" className="flex flex-col gap-1">
          
          <PortfolioInfoText text="Total Earnings"/> 
          <h3 className="regular-text text-end text-base leading-7 tracking-[-0.3] text-[#21B546]">
            ₹ <span className="semi-bold-text">44,930</span>
          </h3>
        </div>
      </div>
      <div
        id="_third_passbox"
        className=" hidden items-center justify-center gap-2 lg:block"
      >
        {/* this is for the more than md screen */}
       
        <Image     src="/images/viewPassbookIcon.svg"
          alt="passbook"
          className="h-[#0.56] w-[0.98rem]"/>
        <span className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546]">
          View Passbook
        </span>
        {/* </div> */}
      </div>
    </div>
   <EarnedTodayMessage/>
  </div>

  {/* this is passbook for the mobile */}
  <div
    id="_div"
    className="flex items-center justify-center gap-2 lg:hidden"
  >
    <Image
      src="/images/viewPassbookIcon.svg"
      alt="passbook"
      className="h-[#0.56] w-[0.98rem]"
    />
    <span className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546]">
      View Passbook
    </span>
  </div></>
  )
}

export default TotalPortfolioValue
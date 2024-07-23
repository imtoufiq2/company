import React from 'react'
import Image from '../../atoms/Image'

const InvestSectionHeaderWithIcon = ({headerText , icon:Icon ,imageClass}) => {
  return (
    <div id="head_part" className="flex items-center gap-2">
    <Image
      src={Icon ? Icon :"/images/target-icon.svg"}
      alt="target icon"
      className={`${imageClass ? imageClass : "h-[18px] w-[18px] md:h-6 md:w-6"}
     
      `}
    />
    <span className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D] md:text-xl md:leading-8 md:tracking-[-0.3px]">
    {headerText}
    </span>
  </div>
  )
}

export default InvestSectionHeaderWithIcon
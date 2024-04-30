import React from 'react'
import Image from '../../atoms/Image'

const InvestSectionHeaderWithIcon = ({headerText}) => {
  return (
    <div id="head_part" className="flex items-center gap-[10px]">
    <Image
      src="/images/target-icon.svg"
      alt="target icon"
      className="h-[18px]
      w-[18px] md:h-6 md:w-6
      
      "
    />
    <span className="medium-text text-sm leading-6 tracking-[-0.2] text-[#5E718D] md:text-[20px] md:leading-8 md:tracking-[-0.3]">
    {headerText}
    </span>
  </div>
  )
}

export default InvestSectionHeaderWithIcon
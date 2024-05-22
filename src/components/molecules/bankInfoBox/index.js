import React from 'react'
import Image from '../../atoms/Image'

const BankInfoBox  = ({curBank}) => {
  // {
  //   bankIcon: "/images/bankLogo.svg",
  //   bankName: "Bajaj Finserv",
  //   duration: "1 yr return",
  //   intrestPercent: "9.10%",
  //   bg: "#FFF5E4",
  // },
  return (
    <div id="bankinfo" className="flex flex-col gap-1">
        <div
          id="imageBox "
          className="h-11 w-11 rounded-lg border-[0.5px]  bg-[#FFFFFF] p-2 sm:h-[60px] sm:w-[60px]"
        >
          <Image
            src={curBank?.logo_url}
            alt={curBank?.issuer_name}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="text-sm md:text-lg  semi-bold-text md:bold-text  leading-6 md:leading-[30px] tracking-[-0.2] text-[#1B1B1B] sm:bold-text sm:tracking-[-0.2] md:tracking-[-0.3]">
          {curBank?.issuer_name}
        </p>
      </div>
  )
}

export default BankInfoBox 

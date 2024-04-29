import React from 'react'
import Image from '../../atoms/Image'

const BankInfoBox  = ({curBank}) => {
  return (
    <div id="bankinfo" className="flex flex-col gap-1">
        <div
          id="imageBox "
          className="h-11 w-11 rounded-lg border-[0.5px]  bg-[#FFFFFF] p-2 sm:h-[60px] sm:w-[60px]"
        >
          <Image
            src={curBank?.bankIcon}
            alt={curBank?.bankName}
            className="h-full w-full"
          />
        </div>
        <p className="text-[18px] text-sm bold-text   leading-6 tracking-[-0.2] text-[#1B1B1B] sm:bold-text sm:tracking-[-0.2]">
          {curBank?.bankName}
        </p>
      </div>
  )
}

export default BankInfoBox 

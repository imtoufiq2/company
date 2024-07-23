import React from 'react'
import LeftArrow from '../../../Icons/LeftArrow'
import WatchIcon from '../../../Icons/WatchIcon'

const Header = () => {
  return (
    <>
    <div
          id="header"
          className="medium-text flex items-baseline justify-between md:flex-row md:items-center"
        >
          <div
            id="leftIcon"
            className="flex flex-col items-baseline gap-8 self-start md:flex-row md:items-center md:gap-4"
          >
            <LeftArrow width="24" height="24" />
            <h2 className="bold-text text-2xl leading-8 tracking-[-0.5px] text-[#1B1B1B]">
              KYC Verification
            </h2>
          </div>
          <button type="button" className="flex items-center gap-1 md:gap-2">
            <WatchIcon />
            <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#455468] md:text-base md:leading-7 md:tracking-[-0.3px]">
              Verify Later
            </p>
          </button>
        </div>
        <div>
          <p
            id="content"
            className="regular-text -mt-4 text-left text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B] md:mt-[0.625rem] md:text-base md:leading-7 md:tracking-[-0.3px] md:text-[#1B1B1B]"
          >
            Verify your KYC in 90 seconds to start investing in high rate FDs.
          </p>
        </div>
        </>
  )
}

export default Header
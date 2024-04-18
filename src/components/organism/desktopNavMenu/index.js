import React from 'react'
import NavLinkItem from '../../atoms/navLinkItem/Index'
import { navData } from '../../../constants/staticData'

const DesktopNavMenu = () => {
  return (
    <div id="menu" className="hidden md:block">
    <ul className="flex font-semibold text-[16px] leading-7 tracking-[-0.3] gap-6 lg:gap-10 items-center relative top-1">
      {navData.map((data, index) => (
        <NavLinkItem
          key={index}
          to={data?.path}
          isActive={data?.isActive}
          title={data?.title}
        />
      ))}
    </ul>
  </div>
  )
}

export default DesktopNavMenu

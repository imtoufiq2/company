import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, title, className, onClick  }) => {

 return (
    <NavLink
      to={to}
      onClick={onClick ? onClick : null} 
      className={({ isActive }) =>
        `cursor-pointer text-base leading-7 tracking-[-0.3] whitespace-nowrap medium-text ${isActive ? "text-[#21B546]" : "text-[#1B1B1B] "} ${className}`
      }
    >
      {title}
    </NavLink>
 );
};

export default NavLinkItem;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, title, className, onClick  }) => {

 return (
    <NavLink
      to={to}
      onClick={onClick ? onClick : null} 
      className={({ isActive }) =>
        `cursor-pointer  medium-text ${isActive ? "text-[#21B546]" : "text-[#000] "} ${className}`
      }
    >
      {title}
    </NavLink>
 );
};

export default NavLinkItem;

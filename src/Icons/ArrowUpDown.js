import React from 'react';

const ArrowIcon = ({ color = "#455468" }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.875 13.5L5.625 15.75M5.625 15.75L3.375 13.5M5.625 15.75V2.25M10.125 4.5L12.375 2.25M12.375 2.25L14.625 4.5M12.375 2.25V15.75"
        stroke={color}
        // strokeWidth="1.5"
        strokeWidth={color==="#21B546" ? "1.8" :"1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;

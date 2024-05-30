import React from "react";

const MobileDashBoard = ({ active }) => {
  const strokeColor = active ? "#21B546" : "#000";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 9.5H9.5V15.5H15.5V9.5Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5H0.5V15.5H6.5V9.5Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 0.5H9.5V6.5H15.5V0.5Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 0.5H0.5V6.5H6.5V0.5Z"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MobileDashBoard;

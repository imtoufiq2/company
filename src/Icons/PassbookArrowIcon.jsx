import React from "react";

const PassbookArrowIcon = ({
  width = 24,
  height = 24,
  arrowColor = "#D21A0E",
  backgroundColor = "#FFDCDA",
  rotateArrow = 0,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateArrow}deg)` }}
    >
      <circle
        cx="12"
        cy="12"
        r="11.75"
        fill={backgroundColor}
        stroke={arrowColor}
        strokeWidth="0.5"
      />
      <path
        d="M12 17.5L12 6.5M12 6.5L7.5 11M12 6.5L16.5 11"
        stroke={arrowColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PassbookArrowIcon;

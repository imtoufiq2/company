import React from "react";

const LeftArrow = ({
  width = "17",
  height = "14",
  color = "#1B1B1B",
  onClickFun,
}) => {
  return (
    <svg
      className="cursor-pointer"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickFun ? onClickFun : null}
    >
      <path
        d="M20.25 12H3.75M3.75 12L10.5 5.25M3.75 12L10.5 18.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LeftArrow;

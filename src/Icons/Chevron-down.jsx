// ChevronIcon.js
import React from "react";

const ChevronIcon = ({ color, isRotated }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`icon icon-tabler icon-tabler-chevron-down transition-transform duration-200 ease-out ${
      isRotated && "rotate-180 text-custom-green scale-90 md:scale-100"
    }`}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: color || "currentColor" }}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default ChevronIcon;

import clsx from "clsx";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const CountrySelector = ({ isFocused }) => {
  return (
    <div
      id="show-country"
      className={clsx(
        "medium-text flex h-7 cursor-pointer items-center gap-1 px-[14px] text-[#555a61]",
        {
          "py-[7px]": isFocused,
          "py-2": !isFocused,
        },
      )}
    >
      {/* IN <BsChevronDown /> */}
      <img src="/images/india-flag-icon.svg" alt="" />
    </div>
  );
};

export default CountrySelector;

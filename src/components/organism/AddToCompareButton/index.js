import React from "react";
import { formatDate } from "../../../utils/commonUtils";

const AddToCompareButton = ({
  handleCheckBoxClick,
  isPortfolio,
  leftVal,
  isChecked,
  curVal,
}) => {

  return (
    <div className="flex items-center justify-between">
      {isPortfolio ? (
        <div className="flex items-center gap-2">
          <img
            src="/images/green-grow.svg"
            alt="grow"
            className="h-[0.56rem] w-[0.91rem]"
          />
          <p className="medium-text text-sm leading-6 tracking-[-0.2] text-[#21B546]">
            {leftVal}
          </p>
        </div>
      ) : (
        <div
          id="_div"
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer md:h-5 md:w-5"
            onClick={() => handleCheckBoxClick(curVal)}
            checked={isChecked}
          />
          <span
            className="medium-text text-[#2D3643 ] cursor-pointer text-sm
leading-6 tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3]"
            onClick={handleCheckBoxClick}
          >
            Add to Compare
          </span>
        </div>
      )}

      <span
        className={`medium-text block rounded-md  px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2]  md:py-1 md:text-sm md:leading-7 ${isPortfolio ? "bg-[#F0F3F9] text-[#5E718D]" : "bg-[#E4F6ED] text-[#11A75C]"}`}
      >
        {/* {isPortfolio ? "Maturity on 4 Mar 2025" : curVal?.tag ? curVal.tag : ""} */}
        {isPortfolio? `Maturity on ${curVal?.fd_maturity_date}` : curVal?.tag? curVal.tag : ""}

      </span>
    </div>
  );
};

export default AddToCompareButton;

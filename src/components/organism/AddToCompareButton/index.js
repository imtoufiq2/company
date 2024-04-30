import React from "react";

const AddToCompareButton = () => {
  return (
    <div className="flex items-center justify-between">
      <div id="_div" className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-4 w-4 cursor-pointer md:h-5 md:w-5"
        />
        <span
          className="medium-text text-[#2D3643 ] text-sm leading-6
tracking-[-0.2] md:text-base md:leading-7 md:tracking-[-0.3]"
        >
          Add to Compare
        </span>
      </div>

      <span className="medium-text block rounded-md bg-[#E4F6ED] px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2] text-[#11A75C] md:py-1 md:text-sm md:leading-7">
        Recommended
      </span>
    </div>
  );
};

export default AddToCompareButton;

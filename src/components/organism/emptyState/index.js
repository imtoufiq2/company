import React from "react";
import Button from "../../atoms/button/Button";

const EmptyState = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-3 rounded-xl bg-[#D7DFE9] p-5 text-white md:p-6">
      <div id="_image">
        <img
          src="images/empty-state.svg"
          alt="empty state"
          className="h-20 w-20 md:h-24 md:w-24"
        />
      </div>
      <div
        id="_text"
        className="flex flex-col gap-2 text-center text-[#5E718D]"
      >
        <h3 className="semi-bold-text text-base leading-7 tracking-[-0.3] ">
          No results found
        </h3>
        <p className="regular-text text-xs leading-5 tracking-[-0.2]">
          Sorry, but your search returned no results
        </p>
      </div>

      <Button
        label="Try Again"
        className="medium-text max-h-9 w-fit bg-[#21B546] px-3 text-sm leading-6 tracking-[-0.2] active:scale-[0.99] md:text-base md:tracking-[-0.3]"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default EmptyState;

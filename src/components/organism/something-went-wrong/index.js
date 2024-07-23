import React from "react";
import Button from "../../atoms/button";

const SomethingWentWrong = () => {
  return (
    <div className="mt-10 flex flex-col gap-8 text-center">
      <img
        src="/images/something-went-wrong.svg"
        alt="went-wrong"
        className="mx-auto max-h-36 max-w-36 "
      />
      <div id="_text" className="flex flex-col gap-3">
        <h3 className="semi-bold-text text-xl leading-8 tracking-[-0.3px]">
          Something went wrong
        </h3>
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-slate-500">
          Sorry, but we just encountered a technical error. Click the button
          below to retry.
        </p>
      </div>
      <Button
        label="Try Again"
        className="medium-text mx-auto max-w-52 bg-[#21B546] text-base leading-7 tracking-[-0.3px] text-white"
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default SomethingWentWrong;

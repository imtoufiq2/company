import React from "react";
import Modal from "../modal";

const PleaseWaitLoader = () => {
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-[#F9FAFB] p-5  outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <img
          src="/images/please-wait-loader.gif"
          alt="Loading..."
          className="mx-auto h-40 w-40"
        />

        <div
          id="_heading"
          className="semi-bold-text text-center text-xl leading-8 tracking-[-0.3]"
        >
          Almost done...
        </div>
        <p
          id="text"
          className="regular-text text-center text-xs leading-5 tracking-[-0.2] text-[#5E718D]"
        >
          Please wait a moment. Do not go back or close the application.
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <Modal body={firstModalData} isTable />
    </div>
  );
};

export default PleaseWaitLoader;

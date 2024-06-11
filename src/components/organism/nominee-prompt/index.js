import React from "react";
import Modal from "../modal";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../atoms/button/Button";

const NomineePrompt = ({ setShowLoader, showLoader }) => {
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div id="_image">
          <img
            src="/images/NomineePrompt.svg"
            alt="NomineePrompt"
            className="max-h-[88px] max-w-[88px]"
          />
        </div>
        <h2
          id="_heading"
          className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]"
        >
          Add nominee to your account
        </h2>
        <p
          id="_text"
          className="regular-text mb-3 mt-1 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]"
        >
          Enter nominee details, so that the money invested could be easily
          claimed by nominees in the unfortunate event of demise of the
          investor.
        </p>
        <div id="_bottons" className="flex flex-col gap-2">
          <Button
            label="Add Nominee"
            className="medium-text bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white active:scale-[0.99]"
          />
          <Button
            label="Skip for Now"
            className="medium-text  text-base leading-7 tracking-[-0.3] "
          />
        </div>
        <button
          className="absolute right-0 ml-auto  border-0 p-1 transition hover:opacity-70"
          onClick={() => setShowLoader(!showLoader)}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <Modal body={firstModalData} isTable />
    </div>
  );
};

export default NomineePrompt;

import React from "react";
import Moadal from "../modal";
import { AiOutlineClose } from "react-icons/ai";

const AddBankAccountLoader = ({ setShowLoader, showLoader }) => {
  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[22.5rem] flex-col rounded-lg  border-0 bg-[#FCEBC7] p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <div id="_header_part">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
            Authorise in your UPI app
          </h3>
        </div>
        <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
          Please authorise the transaction in your selected{" "}
          <span className="">UPI app and then come here...</span>
        </p>
        <img
          src="/images/bank-fetch-loader.svg"
          alt="loader"
          className="-mt-2 md:mt-0"
        />
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
      <Moadal body={firstModalData} isTable />
    </div>
  );
};

export default AddBankAccountLoader;

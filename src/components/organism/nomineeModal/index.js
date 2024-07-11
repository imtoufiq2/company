import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../modal";

const NomineeModal = ({
  setShowLoader,
  showLoader,
  currentShare,
  updateShare,
  cur,
}) => {
  const [newShare, setNewShare] = useState(cur?.percentage || 100);

  const handleSubmit = () => {
    updateShare(cur, Number(newShare));
    // setShowLoader(false);
  };

  const firstModalData = (
    <div className="relative top-4 flex h-full w-full max-w-[384px] flex-col rounded-[24px]  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col justify-between gap-4 rounded-t">
        <div id="_header_part">
          <h3 className="text-xl font-bold leading-8 tracking-[-0.3px] text-[#1B1B1B]">
            Nominee Share
          </h3>
        </div>
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
          Name
        </p>
        <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
          {cur?.full_name}
        </h5>
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#3D4A5C]">
          Percentage Share
        </p>
        <input
          type="text"
          value={newShare}
          onChange={(e) => {
            if (/^\d+$/.test(e.target.value)) {
              setNewShare(e.target.value);
            }
          }}
          className="rounded border p-2"
          pattern="/[0-9]/"
          maxLength={3}
        />
        <button
          className="absolute right-0 ml-auto border-0 p-1 transition hover:opacity-70"
          onClick={() => setShowLoader(false)}
        >
          <AiOutlineClose size={20} />
        </button>
        <button
          className="mt-4 rounded bg-[#21B546] p-2 text-white"
          onClick={handleSubmit}
        >
          Submit
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

export default NomineeModal;

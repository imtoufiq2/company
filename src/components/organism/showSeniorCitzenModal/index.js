import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../modal";
import { cleanFdName } from "../../../utils/commonUtils";
import Loader from "../loader";

const ShowSeniorCitzenModal = ({setShowSeniorCitizenModal ,fd_name,selectedTenure ,setIsSeniorCitizen,handleSubmit,calculating ,isSeniorCitizen}) => {
  const firstModalData = (
    fd_name && selectedTenure ?
    <div className="relative top-4 flex h-full w-full max-w-[384px] flex-col rounded-[24px]  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col justify-between gap-4 rounded-t">
        <div id="_header_part" className="max-w-[90%]">
          <h3 className="bold-text flex items-center gap-1 text-xl leading-8 tracking-[-0.3px] text-[#1B1B1B]">
          <span>  Senior citizen rates will apply</span>
            <img
            src="/images/confetti.gif"
            alt="confetti"
            className="max-h-8 max-w-8 md:-mt-2"
          />
          </h3>
        </div>
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
          You are eligible for higher interest rate ! <br />
          for your selected {fd_name ? cleanFdName(fd_name) :""} of {selectedTenure?.label ?selectedTenure?.label:"" }
        </p>

        <button
          className="absolute right-0 ml-auto border-0 p-1 transition hover:opacity-70"
          onClick={()=>setShowSeniorCitizenModal(false)}
        >
          <AiOutlineClose size={20} />
        </button>
        <button
          className="mt-4 rounded bg-[#21B546] p-2 text-white"
            onClick={()=>{
              // setShowSeniorCitizenModal(false)
              setIsSeniorCitizen(true)
              // setProceed(true)
            }}
        >
          Proceed
        </button>
      </div>
    </div> : <Loader/>
  );
  useEffect(()=>{
    if(!calculating && isSeniorCitizen){
      handleSubmit()
    }
 
  },[calculating, handleSubmit, isSeniorCitizen])
  return (
    <div>
      <Modal body={firstModalData} isTable />
    </div>
  );
};

export default ShowSeniorCitzenModal;

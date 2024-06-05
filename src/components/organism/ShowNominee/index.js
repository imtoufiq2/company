import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ShowNominee = ({ cur }) => {
  return (
    <div
      id="_showNominee"
      className="flex flex-col gap-5 rounded-xl border-[0.5px] p-5 md:p-8"
    >
      <div id="_titileWithIcon" className="flex justify-between ">
        <h4
          id="_left"
          className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#21B546]"
        >
          First Nominee
        </h4>
        <div id="_icon" className="flex items-center gap-2">
          {/*TODO: remove the edit icon that i have downloaded in the verify otp page and import the icon only , not the outline */}
          <img
            src="/images/edit-pencil.svg"
            alt="pencil"
            className="min-h-[1.125rem] min-w-[1.125rem] max-w-[38px] cursor-pointer rounded-md border p-[0.625rem] transition-all duration-200 ease-in-out active:scale-95"
          />
          <div
            id="_trash"
            className="max-h-[38px] max-w-[38px] cursor-pointer rounded-md border border-[#FFC5C1] p-[0.625rem] text-red-600 transition-all duration-200 ease-in-out active:scale-95"
          >
            <FaRegTrashAlt size={18} />
          </div>
        </div>
      </div>
      <div id="_name" className="-mt-5">
        <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
          Name
        </p>
        <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
          {cur?.fullName}
        </h5>
      </div>
      <div id="_relationShipAndPan" className="grid grid-cols-2">
        <div id="_relationshipt">
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
            Relationship
          </p>
          <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {cur?.Relationship}
          </h5>
        </div>
        <div id="_pan">
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
            PAN
          </p>
          <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {cur?.PAN}
          </h5>
        </div>
      </div>
      <div id="_DOBAndPercentageShare" className="grid grid-cols-2">
        <div id="_DOB">
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
            Date of birth
          </p>
          <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {cur?.DateOfBirth}
          </h5>
        </div>
        <div id="_percentageShare">
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
            Percent Share
          </p>
          <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
            {cur?.PercentShare}
          </h5>
        </div>
      </div>
      <div id="_address">
        <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
          Address
        </p>
        <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
          {cur?.Address}
        </h5>
      </div>
    </div>
  );
};

export default ShowNominee;

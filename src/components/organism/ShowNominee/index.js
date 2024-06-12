import React, { useEffect, useState } from "react";
import NomineeModal from "../nomineeModal";

const ShowNominee = ({ cur, selectedNomineeData, setSelectedNomineeData }) => {
  const [isChecked, setIsChecked] = useState(cur?.isChecked || false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [percentageShare, setPercentageShare] = useState(cur?.PercentShare);

  const updateShare = (newShare) => {
  setPercentageShare(newShare);
  setSelectedNomineeData((prevData) => {
    const updatedData = prevData.map((data) => {
      if (data.PAN === cur.PAN) {
        return { ...data, PercentShare: newShare };
      }
      return data;
    });
    const isNomineeSelected = prevData.some((data) => data.PAN === cur.PAN);
    if (!isNomineeSelected) {
      return [...prevData, { ...cur, PercentShare: newShare }];
    }
    return updatedData;
  });
};

  useEffect(() => {
    setIsChecked(cur?.isChecked || false);
    setPercentageShare(cur?.PercentShare);
  }, [cur]);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(true);
      setSelectedNomineeData((prevData) => [...prevData, cur]);
    } else {
      setIsChecked(false);
      setSelectedNomineeData((prevData) =>
        prevData.filter((data) => data.PAN !== cur.PAN),
      );
    }
  };

  const handleShareChange = () => {
    setIsModalActive(true);
  };

  return (
    <>
      {isModalActive && (
        <NomineeModal
          setShowLoader={setIsModalActive}
          showLoader={isModalActive}
          currentShare={percentageShare}
          updateShare={updateShare}
          cur={cur}
        />
      )}
      <div
        id="_showNominee"
        className={`flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5 md:p-8 ${
          isChecked ? "border-green-500" : "border-none"
        }`}
      >
        <div id="_titileWithIcon" className="flex justify-between ">
          <h4
            id="_left"
            className="semi-bold-text text-sm leading-6 tracking-[-0.2] text-[#21B546]"
          >
            Nominee
          </h4>
          <div id="_icon" className="flex items-center gap-2">
            <input
              type="checkbox"
              className="bg-green-500"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
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
            <div className="flex items-center gap-2">
              <h5 className="medium-text text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
                {percentageShare}%
              </h5>
              <img
                src="/images/edit-pencil.svg"
                alt="pencil"
                className="min-h-[1.125rem] min-w-[1.125rem] max-w-[38px] cursor-pointer rounded-md border px-2 py-[0.2rem] transition-all duration-200 ease-in-out active:scale-95"
                onClick={handleShareChange}
              />
            </div>
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
    </>
  );
};

export default ShowNominee;

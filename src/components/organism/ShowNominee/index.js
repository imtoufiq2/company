import React, { useEffect, useState } from "react";
import NomineeModal from "../nomineeModal";

const ShowNominee = ({
  nomineeData,
  selectedNomineeData,
  setSelectedNomineeData,
}) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentNominee, setCurrentNominee] = useState(null);
  const [updatedData, setUpdatedData] = useState(nomineeData);

  const handleCheckboxChange = (nominee_id) => {
    const isSelected = selectedNomineeData.some(
      (data) => data.nominee_id === nominee_id,
    );

    if (!isSelected) {
      const selectedNominee = nomineeData.find(
        (nominee) => nominee.nominee_id === nominee_id,
      );
      setSelectedNomineeData((prevData) => [...prevData, selectedNominee]);
    } else {
      setSelectedNomineeData((prevData) =>
        prevData.filter((data) => data.nominee_id !== nominee_id),
      );
    }
  };

  const handleShareChange = (nominee) => {
    setCurrentNominee(nominee);
    setIsModalActive(true);
  };

  const updateShare = (newShare) => {
    setIsModalActive(false);

    // Update selectedNomineeData
    setSelectedNomineeData((prevData) =>
      prevData.map((data) =>
        data.nominee_id === currentNominee.nominee_id
          ? { ...data, percentage: newShare }
          : data,
      ),
    );

    // Update updatedData to reflect the change
    const updatedNomineeData = updatedData.map((nominee) =>
      nominee.nominee_id === currentNominee.nominee_id
        ? { ...nominee, percentage: newShare }
        : nominee,
    );
   
    // Set updatedData to trigger re-render
    setUpdatedData(updatedNomineeData);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  useEffect(() => {
    setUpdatedData(nomineeData);
  }, [nomineeData]);
  return (
    <>
      {isModalActive && (
        <NomineeModal
          setShowLoader={setIsModalActive}
          showLoader={isModalActive}
          currentShare={currentNominee?.percentage || 100}
          updateShare={updateShare}
          cur={currentNominee}
        />
      )}
      {nomineeData.map((nominee) => (
        <div
          key={nominee.nominee_id}
          className={`flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5 md:p-8 
            ${
              selectedNomineeData.some(
                (data) => data.nominee_id === nominee.nominee_id,
              )
                ? "border-green-500"
                : "border-none"
            }
          `}
        >
          <div className="flex justify-between">
            <h4 className="semi-bold-text text-sm leading-6 tracking-[-0.2px] text-[#21B546]">
              Nominee
            </h4>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="bg-green-500"
                checked={selectedNomineeData.some(
                  (data) => data.nominee_id === nominee.nominee_id,
                )}
                onChange={() => handleCheckboxChange(nominee.nominee_id)}
              />
            </div>
          </div>

          <div className="-mt-5">
            <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
              Name
            </p>
            <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
              {nominee.full_name}
            </h5>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                Relationship
              </p>
              <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                {nominee.relationship}
              </h5>
            </div>
            <div>
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                PAN
              </p>
              <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                {nominee.pan}
              </h5>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                Date of birth
              </p>
              <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                {formatDate(nominee.date_of_birth)}
              </h5>
            </div>
            <div>
              <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                Percent Share
              </p>
              <div className="flex items-center gap-2">
                <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                  {nominee.percentage || 100}%
                </h5>
                <img
                  src="/images/edit-pencil.svg"
                  alt="pencil"
                  className="min-h-[1.125rem] min-w-[1.125rem] max-w-[38px] cursor-pointer rounded-md border px-2 py-[0.2rem] transition-all duration-200 ease-in-out active:scale-95"
                  onClick={() => handleShareChange(nominee)}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
              Address
            </p>
            <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
              {nominee.address_line_1 + ", " + nominee.address_line_2}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowNominee;

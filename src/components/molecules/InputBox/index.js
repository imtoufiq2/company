import React from "react";

const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  valid,
  disabled = false,
  ifscDetails,
  isDetail
}) => {
  return (
    <div id="accountNumber" className="medium-text flex flex-col gap-[6px]">
      <label className="medium-text text-sm leading-6 tracking-[-0.2] text-[#3D4A5C]">
        {label}
      </label>
      <input
        type="text"
        className={`medium-text max-h-[2.875rem] w-full rounded-md border px-[0.875rem] py-[0.6875rem] text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] outline-none placeholder:text-[#8897AE] ${
          !valid && value.length >= 11 ? "outline-[1.5px] outline-red-600" : ""
        } ${disabled ? "opacity-70" : ""} ${
          isDetail ? "bg-white" : "bg-white"
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={isDetail}
      />
      {name === "ifsc" && (
        <p className="regular-text -mt-1 w-full overflow-auto whitespace-normal text-sm font-normal leading-6 tracking-[-0.2] text-[#5E718D]">
          {ifscDetails?.data &&
            `${ifscDetails.data.bank_name}, ${ifscDetails.data.branch_name}`}
        </p>
      )}
      {name === "accountNumber" && isDetail && (
        <p className="regular-text -mt-1 flex w-full items-center gap-2 overflow-auto whitespace-normal text-sm font-normal leading-6 tracking-[-0.2] text-[#21B546]">
          <img
            src="/images/checkmarkstar.svg"
            alt="checkmarkstar"
            className="max-h-4 max-w-4"
          />
          <span>Bank Successfully verified</span>
        </p>
      )}
    </div>
  );
};

export default InputBox;

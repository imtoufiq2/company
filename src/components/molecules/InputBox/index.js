import React from "react";

const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  valid,
  ifscDetails,
}) => {
  console.log("ifscDetails?.data?.bank_name",ifscDetails)
  return (
    <>
      <div id="accountNumber" className="flex flex-col gap-[6px]">
        <label className="text-sm font-medium leading-6 tracking-[-0.2] text-[#3D4A5C]">
          {label}
        </label>
        <input
          type="text"
          className={`w-full rounded-md border px-3 py-[10px] text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] outline-none placeholder:text-[#8897AE] ${
            !valid && value.length >= 11 && " outline-[1.5px] outline-red-600"
          }`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {name === "ifsc" && (
          <p className="-mt-1 w-full overflow-auto whitespace-normal text-sm font-normal leading-6 tracking-[-0.2] text-[#5E718D]">
            {ifscDetails?.data?.bank_name}
          </p>
        )}
      </div>
    </>
  );
};

export default InputBox;

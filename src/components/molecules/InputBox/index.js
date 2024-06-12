import React from "react";

const InputBox = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  valid,
  disabled=false,
  ifscDetails,
}) => {
 
  return (
    <>
      <div id="accountNumber" className="flex flex-col gap-[6px] medium-text">
        <label className="text-sm medium-text leading-6 tracking-[-0.2] text-[#3D4A5C]">
          {label}
        </label>
        <input
          type="text"
          className={`w-full medium-text max-h-[2.875rem] rounded-md border px-[0.875rem] py-[0.6875rem] text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] outline-none placeholder:text-[#8897AE] ${
            !valid && value.length >= 11 && " outline-[1.5px] outline-red-600"
          } ${disabled && "opacity-70"}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {name === "ifsc" && (
          <p className="-mt-1 w-full overflow-auto whitespace-normal text-sm font-normal leading-6 tracking-[-0.2] text-[#5E718D] regular-text">
            { ifscDetails?.data && ifscDetails?.data?.bank_name + "," + ifscDetails?.data?.branch_name}
          </p>
        )}
      </div>
    </>
  );
};

export default InputBox;

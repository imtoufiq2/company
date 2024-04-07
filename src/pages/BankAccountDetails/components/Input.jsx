import React from "react";

const Input = ({ label, placeholder, onChange, name, value }) => {
  return (
    <div id="accountNumber" className="flex flex-col gap-[6px]">
      <label className="text-sm font-medium leading-6 text-[#3D4A5C] tracking-[-0.2]">
        {label}
      </label>
      <input
        type="text"
        className="border rounded-md w-full placeholder:text-[#8897AE] py-[10px] px-3 text-[#1B1B1B] text-sm leading-6 tracking-[-0.2] outline-none"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

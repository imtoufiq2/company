import React from "react";

const CustomInput = ({
  inputRef,
  handleFocus,
  handleBlur,
  maxLength,
  value,
  pattern,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      ref={inputRef}
      type="text"
      id="mobileInput"
      onFocus={handleFocus}
      onBlur={handleBlur}
      maxLength={maxLength}
      value={value}
      pattern={pattern}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default CustomInput;

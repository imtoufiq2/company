import React from "react";
import { BsChevronUp } from "react-icons/bs";
import Input from "../../molecules/InputBox";

const AddBankAccount = ({
  activeIndex,
  setActiveIndex,
  handleChange,
  accountInfo,
}) => {
  return (
    <>
      <div
        id="bank-info"
        className={`flex flex-col gap-5 p-5 rounded-xl border-[0.5px]  ${
          activeIndex === 0 ? "border" : "border-[#21B546] "
        }`}
      >
        <div
          id="top"
          className="flex justify-between items-center"
          onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
        >
          <div className="flex gap-2">
            {" "}
            <div id="logo" className="w-[38px] h-[38px] border">
              <img
                src="/images/bank-logo.svg"
                alt="bank-logo"
                className="w-full h-full p-2"
              />
            </div>
            <div id="text">
              <h3 className="font-medium text-sm leading-6 tracking-[-0.2] text-[#1B1B1B]">
                Add Bank Account Manually
              </h3>
              <p className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]">
                Slow and manual verification
              </p>
            </div>
          </div>
          <div id="icon">
            <BsChevronUp color={"#A3ADBC"} size={20} />
          </div>
        </div>

        <div
          id="middle"
          className={`${
            activeIndex !== 1 ? "hidden" : "flex"
          } flex flex-col gap-3`}
        >
          <Input
            label="Bank Account Number"
            placeholder="Enter account number of your bank"
            value={accountInfo.accountNumber}
            onChange={handleChange}
            name="accountNumber"
          />
          <Input
            label="IFSC Code"
            placeholder="Enter IFSC code of your bank account"
            value={accountInfo.ifsc}
            onChange={handleChange}
            name="ifsc"
          />
          <Input
            label="Account Holder’s Name"
            placeholder="Enter name of the account holder"
            value={accountInfo.accountHolderName}
            onChange={handleChange}
            name="accountHolderName"
          />
        </div>
      </div>
    </>
  );
};

export default AddBankAccount;

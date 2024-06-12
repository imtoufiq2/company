import React from "react";
import { BsChevronUp } from "react-icons/bs";
import Input from "../../molecules/InputBox";
import Image from "../../atoms/Image";

const AddBankAccount = ({
  continueButtonName,
  activeIndex,
  setActiveIndex,
  handleChange,
  accountInfo,
  validation,
  ifscDetails
}) => {
  
  return (
    <>
      <div
        id="bank-info"
        className={`flex flex-col gap-5 rounded-xl border-[0.5px] p-5  ${
          activeIndex === 0 ? "border" : "border-[#21B546] "
        }`}
      >
        <div
          id="top"
          className="flex items-center justify-between"
          onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
        >
          <div className="flex gap-3">
            <div id="logo" className="h-[38px] w-[38px] border">
              <Image
                src="/images/bank-logo.svg"
                alt="bank-logo"
                className="h-full w-full p-2"
              />
            </div>
            <div id="text">
              <h3 className="medium-text text-sm  leading-6 tracking-[-0.2] text-[#1B1B1B]">
                Add Bank Account Manually
              </h3>
              <p className="regular-text text-xs  leading-5 tracking-[-0.2] text-[#5E718D]">
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
            valid={true}
         
          />
          <Input
            label="IFSC Code"
            placeholder="Enter IFSC code of your bank account"
            value={accountInfo.ifsc?.toUpperCase()}
            onChange={handleChange}
            name="ifsc"
            // className="bg-red-600"
            valid={validation?.isIfscValid}
            ifscDetails={ifscDetails}
          />
          {
            continueButtonName!=="Verify Bank" &&  <Input
            label="Account Holder’s Name"
            disabled={!continueButtonName==="Verify Bank"}
            placeholder="Enter name of the account holder"
            value={accountInfo.accountHolderName}
            onChange={handleChange}
            name="accountHolderName"
            valid={true}
          />
          }
         
        </div>
      </div>
    </>
  );
};

export default AddBankAccount;

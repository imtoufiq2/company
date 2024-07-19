import React, { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5';

const InvidualAccount = ({cur}) => {
    const [showAccountNumber, setShowAccountNumber] = useState(false);
  return (
    <>  <div id="_left" className="flex flex-1 flex-col gap-5">
    <div id="_icon" className="flex items-center gap-4">
      <img
        src={cur?.bank_logo}
        alt="bank"
        className="h-10 w-10"
      />
      <h3 className="bold-text text-base leading-7 tracking-[-0.3px]">
        {cur?.bank_name}
      </h3>
    </div>
    <div
      id="_bankAccount-ifsc"
      className="flex flex-col gap-5"
    >
      <div id="_first">
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
          Bank Account Number
        </p>
        <h4 className="medium-text flex items-center gap-1 text-sm leading-6 tracking-[-0.2px]">
          {/* <span> {cur?.account_no}</span> */}

          {showAccountNumber
            ? cur?.account_no
            : cur?.account_no && cur.account_no?.length >= 4
              ? `${"x".repeat(cur.account_no.length - 4)}${cur.account_no.slice(-4)}`
              : "Invalid account number"}

          <span
            className="cursor-pointer"
            onClick={() =>
              setShowAccountNumber(!showAccountNumber)
            }
          >
            {showAccountNumber ? (
              <IoEye size={18} />
            ) : (
              <IoEyeOff size={18} />
            )}
          </span>
        </h4>
      </div>
      <div id="_second">
        <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
          IFSC Code
        </p>
        <h4 className="medium-text text-sm leading-6 tracking-[-0.2px]">
          {cur?.ifsc_code}
        </h4>
      </div>
    </div>
    <div id="_branch">
      <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
        Branch
      </p>
      <h4 className="medium-text text-sm leading-6 tracking-[-0.2px]">
        {cur?.branch_name}
      </h4>
    </div>
  </div>

  <div
    id="_right"
    className="flex  justify-between md:flex-col "
  >
    <div
      id="_icon"
      className="flex w-full items-center justify-between md:h-full md:flex-col-reverse"
    >
      {cur?.is_primary_account ? (
        <div
          id="_tag"
          className="medium-text h-fit  rounded-md bg-[#1DB4691F] px-2 py-[2px] text-xs leading-5 tracking-[-0.2px] text-[#11A75C]"
        >
          Primary Account
        </div>
      ) : (
        <div></div>
      )}
      {/*TODO: remove the edit icon that i have downloaded in the verify otp page and import the icon only , not the outline */}

      {/* <div id="_icon" className="flex items-center gap-2">
  <img
    src="/images/edit-pencil.svg"
    alt="pencil"
    className="min-h-[1.125rem] min-w-[1.125rem] cursor-pointer rounded-md border p-[0.625rem] transition-all duration-200 ease-in-out active:scale-95"
  />
  <div
    id="_trash"
    className="cursor-pointer rounded-md border border-[#FFC5C1] p-[0.625rem] text-red-600 transition-all duration-200 ease-in-out active:scale-95"
  >
    <FaRegTrashAlt size={18} />
  </div>
</div> */}
    </div>
  </div></>
  )
}

export default InvidualAccount
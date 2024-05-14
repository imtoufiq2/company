import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";

const ProfileBankAccount = () => {
  const bankArr = [1, 2];
  return (
    <>
      {" "}
      <div id="_top-section" className="flex items-baseline justify-between">
        <div id="_left">
          <h3 className="bold-text text-[1.75rem] leading-9 tracking-[-0.5] text-[#1B1B1B]">
            Bank Accounts
          </h3>
          <p className="regular-text text-sm leading-7 tracking-[-0.2] text-[#5E718D] ">
            Effortlessly add, remove or manage your linked bank accounts
          </p>
        </div>

        {/* <Button
      label="+" 
      className="h-8 w-8 flex-none rounded-full bg-[#21B546] text-center text-xl text-white"
    /> */}
        <div
          id="_button"
          className="flex min-h-8  min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#21B546] text-center text-xl text-white transition-all duration-200 ease-in-out active:scale-95"
        >
          <PiPlus size={18} />
        </div>
      </div>
      <div id="_bank" className=" flex flex-col gap-3 md:gap-4">
        {bankArr?.map((cur) => {
          return (
            <div
              id="_bottom"
              className="flex flex-col justify-between rounded-xl border-[0.5px] bg-white p-5 md:flex-row"
            >
              <div id="_left" className="flex flex-1 flex-col gap-5">
                <div id="_icon" className="flex items-center gap-4">
                  <img
                    src="/images/yes-bank-logo.svg"
                    alt="bank"
                    className="h-10 w-10"
                  />
                  <h3 className="bold-text text-base leading-7 tracking-[-0.3]">
                    Yes Bank
                  </h3>
                </div>
                <div id="_bankAccount-ifsc" className="flex flex-col gap-5">
                  <div id="_first">
                    <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                      Bank Account Number
                    </p>
                    <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                      273899200372250
                    </h4>
                  </div>
                  <div id="_second">
                    <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                      IFSC Code
                    </p>
                    <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                      YESB000213
                    </h4>
                  </div>
                </div>
                <div id="_branch">
                  <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                    Branch
                  </p>
                  <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                    Yes Bank Worli Naka, Mumbai
                  </h4>
                </div>
              </div>

              <div id="_right" className="flex  justify-between md:flex-col ">
                <div
                  id="_icon"
                  className="flex w-full items-center justify-between md:h-full md:flex-col-reverse"
                >
                  <div
                    id="_tag"
                    className="medium-text h-fit  rounded-md bg-[#1DB4691F] px-2 py-[2px] text-xs leading-5 tracking-[-0.2] text-[#11A75C]"
                  >
                    Primary Account
                  </div>
                  <div id="_icon" className="flex items-center gap-2">
                    {/*TODO: remove the edit icon that i have downloaded in the verify otp page and import the icon only , not the outline */}
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
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfileBankAccount;

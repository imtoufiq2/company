import React, { useEffect } from "react";
import ProfileDashboard from "../../organism/profileDashboard";
import Button from "../../atoms/button/Button";
import { FaRegTrashAlt } from "react-icons/fa";
import Image from "../../atoms/Image";

const Profile = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  const bankArr = [1, 2];
  return (
    <div className="mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[65%] md:gap-7 lg:w-[50%] ">
      {/* <ProfileDashboard /> */}
      <div id="_top-section" className="flex items-baseline">
        <div id="_left">
          <h3 className="bold-text text-[1.75rem] leading-9 tracking-[-0.5] text-[#1B1B1B]">
            Bank Accounts
          </h3>
          <p className="regular-text text-sm leading-7 tracking-[-0.2] text-[#5E718D] ">
            Effortlessly add, remove or manage your linked bank accounts
          </p>
        </div>

        <Button
          label="+"
          className="h-8 w-8 flex-none rounded-full bg-[#21B546] text-center text-xl text-white"
        />
      </div>
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
          <div
            id="_bankAccount-ifsc"
            style={{ border: "1px dotted" }}
            className="flex flex-col gap-5"
          >
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
          <div id="_branch" style={{ border: "1px dotted" }}>
            <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
              Branch
            </p>
            <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
              Yes Bank Worli Naka, Mumbai
            </h4>
          </div>
        </div>
        {/* -webkit-user-modify: f;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between; */}
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
                className="min-h-[1.125rem] min-w-[1.125rem] rounded-md border p-[0.625rem]"
              />
              <div
                id="_trash"
                className="rounded-md border border-[#FFC5C1] p-[0.625rem] text-red-600"
              >
                <FaRegTrashAlt size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

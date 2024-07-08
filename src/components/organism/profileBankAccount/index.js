import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";

const ProfileBankAccount = () => {
  const navigate=useNavigate()
  const { investor_id } = useParams();
  const [bankDetails, setBankDetails] = useState();
  const [loadingBankDetails, setLoadingBankDetails] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";

    async function getBankDetails() {
      try {
        setLoadingBankDetails(true);
        const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
          display_location: "Bank",
          method: "Get",
          investor_id: Number(investor_id),
        });
        console.log("responseresponse", response?.data?.data);

        setBankDetails(response?.data?.data);
      } catch (error) {
        console.error("Error in handleSkip:", error);
      } finally {
        setLoadingBankDetails(false);
      }
    }
    getBankDetails();

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [investor_id]);

  // const bankArr = [1, 2];
  return (
    <div
      className={`mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col  gap-6  md:w-[65%] md:gap-8 lg:w-[50%]`}
    >
      <div id="_top-section" className="flex items-baseline justify-between">
        <div id="_left">
          <h3 className="bold-text text-[1.75rem] leading-9 tracking-[-0.5] text-[#1B1B1B]">
            Bank Accounts
          </h3>
          <p className="regular-text text-sm leading-7 tracking-[-0.2] text-[#5E718D] ">
            Effortlessly add, remove or manage your linked bank accounts
          </p>
        </div>

        <div
          id="_button"
          onClick={()=>navigate("/add-bank-account")}
          className="flex min-h-8  min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#21B546] text-center text-xl text-white transition-all duration-200 ease-in-out active:scale-95"
        >
          <PiPlus size={18} />
        </div>
      </div>
      <div id="_bank" className=" flex flex-col gap-3 md:gap-4">
        {bankDetails?.map((cur) => {
          return (
            <div
              id="_bottom"
              className="flex flex-col justify-between rounded-xl border-[0.5px] bg-white p-5 md:flex-row"
            >
              <div id="_left" className="flex flex-1 flex-col gap-5">
                <div id="_icon" className="flex items-center gap-4">
                  <img src={cur?.bank_logo} alt="bank" className="h-10 w-10" />
                  <h3 className="bold-text text-base leading-7 tracking-[-0.3]">
                    {cur?.bank_name}
                  </h3>
                </div>
                <div id="_bankAccount-ifsc" className="flex flex-col gap-5">
                  <div id="_first">
                    <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                      Bank Account Number
                    </p>
                    <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                      {cur?.account_no}
                    </h4>
                  </div>
                  <div id="_second">
                    <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                      IFSC Code
                    </p>
                    <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                      {cur?.ifsc_code}
                    </h4>
                  </div>
                </div>
                <div id="_branch">
                  <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D]">
                    Branch
                  </p>
                  <h4 className="medium-text text-sm leading-6 tracking-[-0.2]">
                    {cur?.branch_name}
                  </h4>
                </div>
              </div>

              <div id="_right" className="flex  justify-between md:flex-col ">
                <div
                  id="_icon"
                  className="flex w-full items-center justify-between md:h-full md:flex-col-reverse"
                >
                  {cur?.is_primary_account ? (
                    <div
                      id="_tag"
                      className="medium-text h-fit  rounded-md bg-[#1DB4691F] px-2 py-[2px] text-xs leading-5 tracking-[-0.2] text-[#11A75C]"
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
              </div>
            </div>
          );
        })}
      </div>
      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default ProfileBankAccount;

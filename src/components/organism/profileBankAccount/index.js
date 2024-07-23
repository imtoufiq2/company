import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { PiPlus } from "react-icons/pi";

import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { fetchWithWait } from "../../../utils/method";
import { fetchBankAccountDetail } from "../../../redux/actions/profile";

import Loader from "../loader";
import EmptyState from "../emptyState";
import InvidualAccount from "../../molecules/invidualAccount";

const ProfileBankAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { investor_id } = useParams();
 

  useBackgroundColor();

  const {
    ApplicationLoader: { loading },
    profile: { bankAccountDetail, bankAccountDetailerror },
  } = useSelector((state) => state);

  const getBankDetails = useCallback(() => {
    const data = {
      display_location: "Bank",
      method: "Get",
      investor_id: Number(investor_id),
    };
    fetchWithWait({ dispatch, action: fetchBankAccountDetail(data) });
  }, [dispatch, investor_id]);

  useEffect(() => {
    getBankDetails();
  }, [getBankDetails]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : bankAccountDetailerror ? (
        "something went wrong"
      ) : (
        <div
          className={`mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col  gap-6  md:w-[65%] md:gap-8 lg:w-[50%]`}
        >
          <div
            id="_top-section"
            className="flex items-baseline justify-between"
          >
            <div id="_left">
              <h3 className="bold-text text-[1.75rem] leading-9 tracking-[-0.5px] text-[#1B1B1B]">
                Bank Accounts
              </h3>
              <p className="regular-text text-sm leading-7 tracking-[-0.2px] text-[#5E718D] ">
                Effortlessly add, remove or manage your linked bank accounts
              </p>
            </div>

            <div
              id="_button"
              onClick={() => navigate("/add-bank-account")}
              className="flex min-h-8  min-w-8 cursor-pointer items-center justify-center rounded-full bg-[#21B546] text-center text-xl text-white transition-all duration-200 ease-in-out active:scale-95"
            >
              <PiPlus size={18} />
            </div>
          </div>
          <div id="_bank" className=" flex flex-col gap-3 md:gap-4">
            {bankAccountDetail && bankAccountDetail?.length > 0 ? (
              bankAccountDetail?.map((cur) => {
                return (
                  <div
                    id="_bottom"
                    className="flex flex-col justify-between rounded-xl border-[0.5px] bg-white p-5 md:flex-row"
                  >
                  <InvidualAccount cur={cur} />
                  </div>
                );
              })
            ) : (
              <EmptyState btn="Add Bank" onClick={()=>navigate("/add-bank-account")}/>
            )}
          </div>
          <div id="_spacing" className="h-6"></div>
        </div>
      )}
    </>
  );
};

export default ProfileBankAccount;

import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { usePost } from "../../../customHooks/usePost";
import useScrollToTop from "../../../customHooks/useScrollToTop";
import { getData } from "../../../utils/Crypto";

import WatchIcon from "../../../Icons/WatchIcon";
import LeftArrow from "../../../Icons/LeftArrow";

const BankHeader = ({ isDetail }) => {
  const { postData } = usePost();
  const navigate = useNavigate();
  const verifyLater = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postData("/onboarding/skips", {
        investor_id: getData("userData")?.investor_id,
        method_name: "SkipBank",
      });

      if (data?.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("somethings went wrong");
    }
  };

  useScrollToTop();
  localStorage.removeItem("tempPan");
  return (
    <>
      <div
        id="header"
        className="flex  items-baseline justify-between md:flex-row md:items-center"
      >
        <div
          id="leftIcon"
          className="flex flex-col items-baseline gap-8 self-start md:flex-row md:items-center md:gap-4 "
        >
          <LeftArrow
            width="24"
            height="24"
            onClickFun={() => navigate(-1)}
            // onClick={
            //   navigate(
            //     sessionStorage.getItem("fromWhere")
            //       ? "/preview-maturity-action"
            //       : -1,
            //   )
            // }
          />

          <h2 className="bold-text text-2xl leading-8 tracking-[-0.5px] text-[#1B1B1B]">
            Add Bank Account
          </h2>
        </div>
        {!sessionStorage.getItem("fromWhere") && !isDetail && (
          <button
            type="button"
            className="flex items-center gap-1 md:gap-2"
            onClick={verifyLater}
          >
            <WatchIcon />
            <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#455468] md:text-base md:leading-7 md:tracking-[-0.3px]">
              Verify Later
            </p>
          </button>
        )}
      </div>
      <p className="regular-text md:1 -mt-2 mb-3 text-sm  leading-6 tracking-[-0.2px] text-[#5E718D] md:mt-[0.875rem] md:text-base md:leading-7 md:tracking-[-0.3px]">
        Securely add your bank account to become{" "}
        <span className="block">investment ready.</span>
      </p>
    </>
  );
};

export default BankHeader;

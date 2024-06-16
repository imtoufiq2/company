import React from "react";
import LeftArrow from "../../../Icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import WatchIcon from "../../../Icons/WatchIcon";
import { usePost } from "../../../customHooks/usePost";
import { getData } from "../../../utils/Crypto";
import toast from "react-hot-toast";

const BankHeader = () => {
  const { postData, loading } = usePost();
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
  return (
    <>
      <div
        id="header"
        className="flex  items-baseline justify-between md:flex-row md:items-center"
      >
        <div
          id="leftIcon"
          className="flex flex-col items-baseline gap-8 self-start md:gap-4 md:flex-row md:items-center "
        >
          <LeftArrow
            width="24"
            height="24"
            onClickFun={() => navigate("/verifyMobile")}
          />
          <h2 className="bold-text text-2xl leading-5 tracking-[-0.5] text-[#1B1B1B]">
            Add Bank Account
          </h2>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 md:gap-2 "
          onClick={verifyLater}
        >
          <WatchIcon />
          <p className="medium-text  text-sm md:text-base  leading-6 md:leading-7 tracking-[-0.2] md:tracking-[-0.3] text-[#455468]">
            Verify Later
          </p>
        </button>
      </div>
      <p className="regular-text -mt-2 md:mt-[0.875rem] text-sm md:text-base  leading-5 md:leading-7 tracking-[-0.2] md:tracking-[-0.3] text-[#5E718D] mb-3 md:1">
        Securely add your bank account to become{" "}
        <span className="block">investment ready.</span>
      </p>
    </>
  );
};

export default BankHeader;

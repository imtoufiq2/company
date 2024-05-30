import { useNavigate } from "react-router-dom";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
import AddToCompareButton from "../AddToCompareButton";
import InterestTenureInfo from "../InterestTenureInfo";
import { useState } from "react";

const PopularFixedDepositsCard = ({ curVal }) => {
  const navigate = useNavigate();
  console.log("curVal",curVal)



  return (
    <div
      className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
      onClick={() => {
        if (curVal?.fd_id) {
          navigate(`/invest/${curVal?.fd_id}/${curVal?.scheme_master_id}`);
        }
      }}
    >
      <PopularFixedBankHeader curVal={curVal}/>
      <InterestTenureInfo curVal={curVal}/>
      <AddToCompareButton
       isChecked={true} curVal={curVal}/>
    </div>
  );
};

export default PopularFixedDepositsCard;

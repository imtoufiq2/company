import { useNavigate } from "react-router-dom";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
import AddToCompareButton from "../AddToCompareButton";
import InterestTenureInfo from "../InterestTenureInfo";

const PopularFixedDepositsCard = ({
  curVal,
  setCompareData,
  compareData,
  handleCompareData,
}) => {
  const navigate = useNavigate();
  const found = compareData?.some((cur) => cur?.fd_id === curVal?.fd_id);
 
  return (
    <div
      className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
      onClick={() => {
        if (curVal?.fd_id && curVal?.scheme_master_id) {
          navigate(
            `/invest/${curVal?.fd_id}/${curVal?.scheme_master_id}/${curVal?.tag ? curVal?.tag : "Popular"}`,
          );
        }
      }}
    >
      <PopularFixedBankHeader curVal={curVal} />
      <InterestTenureInfo curVal={curVal} />
      <AddToCompareButton
        // isChecked={false}
        isChecked={found}
        curVal={curVal}
        setCompareData={setCompareData}
        handleCompareData={handleCompareData}
      />
    </div>
  );
};

export default PopularFixedDepositsCard;

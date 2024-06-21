import { useNavigate } from "react-router-dom";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
import AddToCompareButton from "../AddToCompareButton";
import InterestTenureInfo from "../InterestTenureInfo";


const PopularFixedDepositsCard = ({ curVal }) => {
  const navigate = useNavigate();
 


  return (
    <div
      className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
      // onClick={() => navigate(`/invest/${apiData?.fd_id}/${apiData?.scheme_master_id}/${apiData?.tag
      // }`)}
      onClick={() => {
        if (curVal?.fd_id && curVal?.scheme_master_id) {
          navigate(`/invest/${curVal?.fd_id}/${curVal?.scheme_master_id}/${curVal?.tag}`);
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

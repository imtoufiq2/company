import { useNavigate } from "react-router-dom"
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader"
import AddToCompareButton from "../AddToCompareButton"
import InterestTenureInfo from "../InterestTenureInfo"


const PopularFixedDepositsCard = ({curVal}) => {
  const navigate= useNavigate()
 
  const handleCheckBoxClick = (e) => {
    e.stopPropagation(); // Stop the click event from bubbling up to the box
    console.log("Checkbox clicked");
  };
 
  return (
    <div className="rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 flex flex-col gap-7 "
    onClick={() => {
      if (curVal?.fd_id) {
        navigate(`/invest/${curVal.fd_id}`);
      }
    }}
    
    
    >
        <PopularFixedBankHeader/>
        <InterestTenureInfo/>
        <AddToCompareButton handleCheckBoxClick={handleCheckBoxClick}/>
    </div>
  )
}

export default PopularFixedDepositsCard
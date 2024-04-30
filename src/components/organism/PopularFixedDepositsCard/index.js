import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader"
import AddToCompareButton from "../AddToCompareButton"
import InterestTenureInfo from "../InterestTenureInfo"


const PopularFixedDepositsCard = () => {
  return (
    <div className="rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 flex flex-col gap-7 ">
        <PopularFixedBankHeader/>
        <InterestTenureInfo/>
        <AddToCompareButton/>
    </div>
  )
}

export default PopularFixedDepositsCard
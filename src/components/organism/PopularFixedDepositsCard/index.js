import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
import AddToCompareButton from "../AddToCompareButton";
import InterestTenureInfo from "../InterestTenureInfo";

const PopularFixedDepositsCard = ({ currValues }) => {
  return (
    <div className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 ">
      <PopularFixedBankHeader currValues={currValues} />
      <InterestTenureInfo currValues={currValues} />
      <AddToCompareButton />
    </div>
  );
};

export default PopularFixedDepositsCard;

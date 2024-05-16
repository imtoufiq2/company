//moelcus
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
//oragnism
import InterestTenureInfo from "../InterestTenureInfo";
import AddToCompareButton from "../AddToCompareButton";
import { useNavigate } from "react-router-dom";


const ExplorePortfolioInvestmentOptions = () => {
  const navigate= useNavigate()
  const arr = [1, 2];
  return (
    <div id="_second_box" className="flex flex-col gap-[19px] md:gap-[33px]" >
      <InvestSectionHeaderWithIcon
        headerText={"Your Fixed Deposits (2)"}
        icon="/images/chartPieIcon.svg"
        imageClass="w-[0.84rem] h-[0.84rem]"
      />
      <div className="grid grid-cols-1 gap-3  lg:gap-8 840:grid-cols-2">
        {arr?.map((curval , index) => {
          return (
            //TODO: make it as reusable components because we have lot of box where pasding and border is there padding 20px liek this
            <div
            key={index}
              className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
              onClick={() => navigate(`/portfolio/investment-details/${index+1}`)}

            >
              <PopularFixedBankHeader />
              <InterestTenureInfo isPortfolio />
              <AddToCompareButton
                isPortfolio
                leftVal="8.35% IRR"
                handleCheckBoxClick={() => {}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorePortfolioInvestmentOptions;

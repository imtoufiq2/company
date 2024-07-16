//moelcus
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PopularFixedBankHeader from "../../molecules/PopularFixedBankHeader";
//oragnism
import InterestTenureInfo from "../InterestTenureInfo";
import AddToCompareButton from "../AddToCompareButton";
import { useNavigate } from "react-router-dom";
import EmptyState from "../emptyState";


const ExplorePortfolioInvestmentOptions = ({InvestorInvestment}) => {
  const navigate= useNavigate()
 
  const HanldeAddToCompareButton=()=>{
    console.warn("lalalla")
  }
  return (
    <div id="_second_box" className="flex flex-col gap-[19px] md:gap-[33px]" >
      <InvestSectionHeaderWithIcon
        headerText={`Your Fixed Deposits (${InvestorInvestment?.length})`}
        icon="/images/chartPieIcon.svg"
        imageClass="w-[0.84rem] h-[0.84rem]"
      />
      <div className={` ${InvestorInvestment?.length >0 && " grid grid-cols-1 840:grid-cols-2 gap-3 lg:gap-8" }     `}>
        
        { InvestorInvestment?.length >0 ? InvestorInvestment?.map((curval , index) => {
          return (
            //TODO: make it as reusable components because we have lot of box where pasding and border is there padding 20px liek this
            <div
            key={index}
              className="flex flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6 "
              onClick={() => {
                navigate(`/portfolio/investment-details/${curval?.fd_investment_id
                }`)
                sessionStorage.setItem("portfolioFixedDeposit" , JSON.stringify(curval))
              }}

            >
              <PopularFixedBankHeader isPortfolio curVal={curval}/>
              <InterestTenureInfo isPortfolio curVal={curval}/>
              <AddToCompareButton
                isPortfolio
                leftVal={`${curval?.rate_of_interest} IRR`}
                curVal={curval}
                handleCheckBoxClick={HanldeAddToCompareButton}
              />
            </div>
          );
        }) : <EmptyState heading="Earn up to 9.40% assured returns" subHeading="Browse our FD collection to get started" btn="Discover FDs" onClick={()=>navigate("/invest")}/>}
      </div>
    </div>
  );
};

export default ExplorePortfolioInvestmentOptions;

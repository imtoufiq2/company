import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PartnerBankCard from "../PartnerBankCard";

const PartnerBank = () => {
  const partnerBanks=[
    {
      name:"Axis Bank",
      logo:"/images/axis-bank-icon.svg"
    },
    {
      name:"Bajaj Finserv",
      logo:"/images/bankLogo.svg"
    },
    {
      name:"SBI Bank",
      logo:"/images/SBI-logo.svg"
    },
    {
      name:"Shriram Finance",
      logo:"/images/Shriram-finance-icon.svg"
    },
    {
      name:"Axis Bank",
      logo:"/images/axis-bank-icon.svg"
    },
  ]
  return (
    <div
      className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-[33px]  "
    
    >
      <InvestSectionHeaderWithIcon headerText={"Partner Banks"} />

      <div className="flex items-center gap-3 md:gap-8 overflow-x-scroll example	">
        {partnerBanks.map((curBank, index) => (
          <PartnerBankCard key={index} curBank={curBank}/>
        ))}
      </div>
    </div>
  );
};

export default PartnerBank;

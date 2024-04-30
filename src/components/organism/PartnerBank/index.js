import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PartnerBankCard from "../PartnerBankCard";

const PartnerBank = () => {
  return (
    <div
      className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-[33px]  "
      style={{ border: "1px dotted" }}
    >
      <InvestSectionHeaderWithIcon headerText={"Partner Banks"} />

      <div className="flex items-center gap-3 md:gap-8 overflow-x-scroll example	">
        {[...Array(5)].map((_, index) => (
          <PartnerBankCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default PartnerBank;

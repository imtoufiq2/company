import { useSelector } from "react-redux";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import PartnerBankCard from "../PartnerBankCard";

const PartnerBank = () => {
  // const { error, portfolioData } = useSelector((state) => state?.portfolioPage);
  const { fetchIssuersData, error } = useSelector((state) => state.investPage);

  return (
    // <div className=" mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between gap-[12.76px] md:w-[75%] md:gap-[28px]  ">
    <div className=" mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between gap-[2.76px] md:w-[75%] md:gap-[18px]  ">
      <InvestSectionHeaderWithIcon headerText={"Partner Banks"} />

      <div className="example flex items-start gap-3 overflow-x-scroll md:gap-8 pt-3	">
        {!error && fetchIssuersData?.length > 0 ? (
          fetchIssuersData.map((curBank) => (
            <PartnerBankCard
              key={fetchIssuersData?.issuer_id}
              curBank={curBank}
            />
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default PartnerBank;

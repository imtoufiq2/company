import PopularFixedDepositsCard from "../PopularFixedDepositsCard";
import FDActionSection from "../../molecules/FDActionSection";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";

const PopularFixedDepositsSection = () => {
  const arr = [1, 2, 3, 4];
  const arr1 = [1, 2];

  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-[19px] md:w-[75%] md:gap-[33px]  ">
    <InvestSectionHeaderWithIcon headerText={"Popular Fixed Deposits"}/>
      {/* ========= show the card====== */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
        {arr.map((curVal, index) => (
          <PopularFixedDepositsCard key={index} />
        ))}
      </div>

      <FDActionSection />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8">
        {arr1.map((curVal, index) => (
          <PopularFixedDepositsCard key={index} curVal={curVal}/>
        ))}
      </div>
      <button className="mx-auto flex max-w-fit items-center gap-2 rounded-md border px-3 py-[6px] md:px-5 md:py-[10px]">
        <img
          src="/images/reload-icon.svg"
          alt="reload-icon"
          className="h-[12.38px] w-[12.95px]"
        />
        <span className="medium-text whitespace-nowrap text-sm leading-6 tracking-[-0.2] text-[#21B546]">
          Show More
        </span>
      </button>
    </div>
  );
};

export default PopularFixedDepositsSection;

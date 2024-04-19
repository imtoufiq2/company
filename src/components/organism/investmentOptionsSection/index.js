import InvestmentOptionsCard from "./InvestmentOptionsCard";

const InvestmentOptionsSection = ({ investmentOptions }) => {
  return (
    <div className="flex gap-5">
      {/* Mobile View */}
      <div id="mobileView" className="flex flex-1 gap-5 sm:hidden">
        {investmentOptions.slice(0, 3).map((curData, index) => (
          <InvestmentOptionsCard key={index} details={curData} />
        ))}
      </div>
      {/* Desktop View */}
      <div
        id="laptopView"
        className="hidden max-w-[1008px] flex-1 gap-5 sm:flex"
      >
        {investmentOptions.map((curData, index) => (
          <InvestmentOptionsCard key={index} details={curData} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentOptionsSection;

import Heading from "../../atoms/headingContent/Heading";

const InvestmentHeader = () => {
  return (
    <div className=" mx-auto flex w-[90%] max-w-[1008px] flex-col justify-between gap-2 md:w-[75%] md:gap-5 ">
      <Heading
        text="Invest"
        type="h3"
        className="bold-text text-[28px] leading-9 tracking-[-0.5px]  text-[#1B1B1B] md:text-5xl md:leading-[44px] md:tracking-[-1.75px]"
      />
      <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D] md:text-[20px] md:leading-8 md:tracking-[-0.3px]">
        Invest in fixed deposits, earn assured returns{" "}
        <span className="bold-text">up to 9.41% p.a.</span> FDs are regulated by
        RBI.
      </p>
    </div>
  );
};

export default InvestmentHeader;

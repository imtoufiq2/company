import Heading from "../../atoms/headingContent/Heading";

const InvestmentHeader = () => {
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-3 md:w-[75%] md:gap-5 ">
      <Heading
        text="Invest"
        type="h3"
        className="text-[28px] leading-9 tracking-[-0.5]  text-[#1B1B1B] md:text-5xl md:leading-[56px] md:tracking-[-1.75]"
      />
      <p className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D] md:text-[17.3px] md:leading-8 md:tracking-[-0.3]">
        Invest in fixed deposits, earn assured returns{" "}
        <span className="bold-text">up to 9.21% p.a.</span> FDs are regulated by
        RBI.
      </p>
    </div>
  );
};

export default InvestmentHeader;

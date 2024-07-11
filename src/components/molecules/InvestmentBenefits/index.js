const InvestmentBenefits = ({ cardData, cardApiResponse }) => {
  return (
    <div className="  flex w-full max-w-[1008px] flex-col justify-between gap-5 text-[#1B1B1B]  md:gap-5">
      <h3 className="bold-text text-xl leading-8 tracking-[-0.3px] md:text-2xl md:tracking-[-0.5px]">
        Why you should invest in {cardApiResponse?.[0]?.issuer_name}?
      </h3>
      <main
        id="_main_box"
        className="example flex items-center gap-3 overflow-x-scroll md:flex-col md:items-stretch md:gap-4"
      >
        {cardData?.length > 0 &&
          cardData?.map((cur, index) => {
            return (
              <div
                id="box"
                //   max-w-[272px]
                className={`flex  min-w-[272px] flex-col gap-3 rounded-xl bg-[#FFF9DF] p-5 md:flex-row md:items-start md:gap-5`}
                style={{ backgroundColor: cur?.bgcolor }}
                key={index}
              >
                <img
                  // src={cur?.ulr}
                  src={
                    cur?.icon === "bank"
                      ? "/images/bankHomeIcon.svg"
                      : cur?.icon === "flag"
                        ? "/images/flagIcon.svg"
                        : "/images/CurrencyInr.svg"
                  }
                  alt="grow-icon"
                  className="h-[40px] w-[40px] px-[5px] py-[7.5px]"
                />
                <div id="_text" className="flex flex-col gap-3">
                  <h3 className="semi-bold-text text-sm leading-5 tracking-[-0.2px]">
                    {cur?.heading}
                  </h3>
                  <p className="regular-text max-h-9 text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    {cur?.content}
                  </p>
                </div>
              </div>
            );
          })}
      </main>
    </div>
  );
};

export default InvestmentBenefits;

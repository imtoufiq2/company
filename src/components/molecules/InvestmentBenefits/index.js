import React from "react";

const InvestmentBenefits = () => {
  const arrData = [
    {
      heading: "AUM of 13,800 Cr+",
      text: "Trusted by over 40 Cr+ customers, as of March 2024",
      ulr: "/images/growIcon.svg",
      bgColor: "#FFF9DF",
    },
    {
      heading: "56+ years of banking excellence",
      text: "Boasts stellar banking experience in providing retail banking products",
      ulr: "/images/bankHomeIcon.svg",
      bgColor: "#FFF5F4",
    },
    {
      heading: "Strong leadership & management",
      text: "Lorem ipsum dolor sit amet  consectet adipiscing elit, sed",
      ulr: "/images/flagIcon.svg",
      bgColor: "#E8FFED",
    },
  ];

  return (
    <div
      
      className="  flex w-full max-w-[1008px] flex-col justify-between gap-5 text-[#1B1B1B]  md:gap-5"
    >
      <h3 className="bold-text text-xl leading-8 tracking-[-0.3] md:text-2xl md:tracking-[-0.5]">
        Why you should invest in State Bank of India?
      </h3>
      <main
        id="_main_box"
        className="example flex items-center gap-3 md:gap-4 overflow-x-scroll md:flex-col md:items-stretch"
      >
        {arrData.map((cur , index) => {
          return (
            <div
              id="box"
              //   max-w-[272px]
              className={`flex  min-w-[272px] flex-col md:flex-row md:items-start gap-3 md:gap-5 rounded-xl bg-[#FFF9DF] p-5`}
              style={{ backgroundColor: cur.bgColor }}
              key={index}
            >
              <img
                src={cur?.ulr}
                alt="grow-icon"
                className="h-[40px] w-[40px] px-[5px] py-[7.5px]"
              />
              <div id="_text" className="flex flex-col gap-3">
                <h3 className="semi-bold-text text-sm leading-5 tracking-[-0.2]">
                  {cur?.heading}
                </h3>
                <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] max-h-9">
                  {cur?.text}
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

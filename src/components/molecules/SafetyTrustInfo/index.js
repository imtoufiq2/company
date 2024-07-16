import React from "react";

const SafetyTrustInfo = ({ extraData }) => {
  const content = extraData?.[0]?.content;
  return (
    <div
      className="  flex w-full max-w-[1008px] flex-col justify-between gap-3 text-[#1B1B1B]  md:gap-5"
      // style={{border:"1px dotted red"}}
    >
      <h3 className="bold-text text-xl leading-6 tracking-[-0.3px] text-[#1B1B1B]">
        🔒 Safety & Trust
      </h3>
      <div
        id="_box"
        className="flex flex-col gap-3 rounded-xl bg-[#BCD9C3] p-5 md:items-center md:gap-6 md:p-6 lg:flex-row"
      >
        <img
          src="/images/SafetyTrust.svg"
          alt="Safety Trust"
          className="m-auto h-28 w-28"
        />
        <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#0C2613]">
          {content?.split("@").map((line, index) => (
            <div className="flex gap-1 md:gap-2">
              {/* <input
                type="checkbox"
                checked
                className="cursor-pointer accent-[#00a700] md:h-5 md:w-5"
              /> */}
              <p key={index}>{line}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SafetyTrustInfo;

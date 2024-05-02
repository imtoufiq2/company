import React from "react";

const SafetyTrustInfo = () => {
  return (
    <div
      style={{ border: "1px dotted" }}
      className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col justify-between gap-3 text-[#1B1B1B] md:w-[75%] md:gap-5"
    >
      <h3 className="bold-text text-xl leading-8 tracking-[-0.3] ">
        🔒 Safety & Trust
      </h3>
      <div
        id="_box"
        className="flex flex-col gap-2 rounded-xl bg-[#BCD9C3] p-5"
      >
        <img
          src="/images/SafetyTrust.svg"
          alt="Safety Trust"
          className="m-auto h-28 w-28"
        />
        <p className="regular-text text-[12px] leading-5 tracking-[-0.2] text-[#0C2613]">
          State Bank of India has the{" "}
          <span className="semi-bold-text">highest</span> domestic credit rating
          of
          <span className="semi-bold-text">AAA/Stable </span>for long-term
          borrowing, <span className="semi-bold-text">A1+</span> for short-term
          borrowing, and{" "}
          <span className="semi-bold-text">CRISIL AAA/Stable </span> &{" "}
          <span className="semi-bold-text">[ICRA]AAA (Stable)</span> for its FD
          program.
        </p>
      </div>
    </div>
  );
};

export default SafetyTrustInfo;

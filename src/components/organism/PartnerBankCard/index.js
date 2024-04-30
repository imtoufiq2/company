const PartnerBankCard = () => {
  return (
    <div className=" flex min-w-[84px] flex-col gap-2 md:min-w-[100px] md:gap-5">
      <div id="_logo" className="w-fit rounded-xl border-[0.5px] bg-white p-5">
        <img
          src="/images/axis-bank-icon.svg"
          alt="bank-logo"
          className="h-11 w-11"
        />
      </div>
      <p
        id="_text"
        className="semi-bold-text text-center text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]"
      >
        Axis Bank
      </p>
    </div>
  );
};

export default PartnerBankCard;

import Image from "../../atoms/Image";

const PartnerBankCard = ({curBank}) => {
  return (
    <div className=" flex min-w-[84px] flex-col gap-2 md:min-w-[100px] md:gap-5 w-full max-w-[84px] md:max-w-[100px]">
      <div id="_logo" className="w-fit h-[84px] md:h-[100px] md:w-[100px] flex justify-center items-center rounded-xl border-[0.5px] bg-white p-5">
        <Image
          src={curBank?.logo_url}
          alt="bank-logo"
          className="h-11 w-11 object-contain"
        />
      </div>
      <p
        id="_text"
        className="semi-bold-text text-center text-[12px] leading-5 tracking-[-0.2] text-[#5E718D]"
      >
      {curBank?.issuer_name}
      </p>
    </div>
  );
};

export default PartnerBankCard;

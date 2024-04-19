import Button from "../../atoms/button/Button";
import BankInfoBox from "../../molecules/bankInfoBox";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";

const InvestmentCard = ({ curBank }) => {
  return (
    <div
      style={{ backgroundColor: curBank?.bg }}
      className="flex flex-col justify-between gap-3 rounded-xl  bg-[#FFF5E4] p-5 md:min-h-[276px]"
    >
      <BankInfoBox curBank={curBank} />
      <div id="returnInfo">
        <TextDisplay
          text={curBank?.duration}
          elementType="p"
          className="text-[12px] font-normal leading-5 tracking-[-0.2] text-[#5E718D]"
        />

        <Heading
          text={curBank?.intrestPercent}
          type="h3"
          className="text-xl font-bold leading-8 tracking-[-0.3] text-[#1B1B1B]"
        />
      </div>

      <Button
        label="Invest Now"
        className="h-fit min-w-24 max-w-[60%] rounded-md bg-[#1B1B1B] px-3 py-[6px] text-sm font-medium leading-6 tracking-[-0.2] text-white transition-all duration-200 ease-in-out active:scale-[0.99]"
      />
    </div>
  );
};

export default InvestmentCard;

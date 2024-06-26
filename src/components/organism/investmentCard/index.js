import Button from "../../atoms/button/Button";
import BankInfoBox from "../../molecules/bankInfoBox";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
import { useNavigate } from "react-router-dom";
const hexToRgba = (hex, opacity) => {
  let r = 0,
    g = 0,
    b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    // 6 digits
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const InvestmentCard = ({ curBank }) => {
  const navigate = useNavigate();
  const backgroundColor = hexToRgba(curBank?.app_bg_colour, 0.3);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        border: `0.5px solid ${curBank?.app_bg_colour}`,
      }}
      // className={`flex  min-h-[15.75rem] flex-col justify-between gap-4 rounded-xl border-[0.5px]  p-5 lg:p-6 md:min-h-[276px] `}
      className={`flex min-h-[15.75rem] flex-col justify-between gap-4 rounded-xl border-[0.5px] p-5  lg:-mt-1 lg:min-h-[276px] lg:min-w-[240px] lg:p-6 `}
    >
      <BankInfoBox curBank={curBank} />
      <div id="returnInfo">
        <TextDisplay
          text={`${curBank?.tenure ? curBank?.tenure : 0} return`}
          elementType="p"
          className="regular-text text-xs leading-4 tracking-[-0.2] text-[#5E718D] md:text-sm "
        />

        <Heading
          text={(curBank?.rate_of_interest || 0) + "%"}
          type="h3"
          className="bold-text text-xl leading-6 tracking-[-0.3] text-[#1B1B1B] sm:leading-6 "
        />
      </div>

      <Button
        label="Invest Now"
        onClick={() =>
          navigate(
            `/invest/${curBank?.fd_id}/${curBank?.scheme_master_id}/${curBank?.tag}`,
          )
        }
        className="medium-text h-fit min-w-24 max-w-[60%] whitespace-nowrap rounded-md bg-[#1B1B1B] px-3 py-[6px] text-sm leading-6 tracking-[-0.2] text-white transition-all duration-200 ease-in-out active:scale-[0.99] md:min-h-10"
      />
    </div>
  );
};

export default InvestmentCard;

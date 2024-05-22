import Button from "../../atoms/button/Button";
import BankInfoBox from "../../molecules/bankInfoBox";
import TextDisplay from "../../atoms/textContent/TextContent";
import Heading from "../../atoms/headingContent/Heading";
import { useNavigate } from "react-router-dom";

const InvestmentCard = ({ curBank }) => {
  const navigate=useNavigate()
  
  return ( 
    <div
      style={{ backgroundColor: curBank?.app_bg_colour }}
      

      className={`flex flex-col justify-between gap-3 rounded-xl min-h-[15.75rem] max-h-[17.25rem]  p-5 md:min-h-[276px] bg-[${curBank?.app_bg_colour}]`}
    >
      <BankInfoBox curBank={curBank} />
      <div id="returnInfo">
        <TextDisplay
           text={`${curBank?.tenure ? curBank?.tenure : 0} return`}
          elementType="p"
          className="regular-text text-xs md:text-sm leading-5 md:leading-6 tracking-[-0.2] text-[#5E718D]"
        />

        <Heading
          text={(curBank?.rate_of_interest || 0) + "%"}
          type="h3"
          className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]"
        />
      </div>

      <Button
        label="Invest Now"
        onClick={() => navigate(`/invest/${curBank?.fd_id}`)}
        className="medium-text h-fit min-w-24 max-w-[60%] whitespace-nowrap rounded-md bg-[#1B1B1B] px-3 py-[6px] text-sm leading-6 tracking-[-0.2] text-white transition-all duration-200 ease-in-out active:scale-[0.99] md:min-h-10"
      />
    </div>
  );
};

export default InvestmentCard;

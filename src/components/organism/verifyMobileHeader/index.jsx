import { useNavigate } from "react-router-dom";
import LeftArrow from "../../../Icons/LeftArrow";
import TextDisplay from "../../atoms/textContent/TextContent";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h3 className=" flex  items-center gap-3 leading-8">
      <LeftArrow width="24" height="24" onClickFun={() => navigate("/login")} />
      <TextDisplay
        //  `medium-text text-[16px] leading-7 tracking-[-0.3] text-[#455468] whitespace-nowrap overflow-hidden w-fit`,
        className="bold-text text-2xl leading-8 tracking-[-0.5] text-[#1B1B1B]"
        text="Verify Mobile"
        elementType="span"
      />
    </h3>
  );
};

export default Header;

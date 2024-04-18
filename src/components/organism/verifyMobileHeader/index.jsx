import { useNavigate } from "react-router-dom";
import LeftArrow from "../../../Icons/LeftArrow";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h3 className=" flex  items-center gap-3 leading-8">
      <LeftArrow width="24" height="24" onClickFun={() => navigate("/login")} />
      <span className="text-[22px] font-bold leading-8 tracking-[-0.5] text-[##B1B1B] ">
        Verify Mobile
      </span>
    </h3>
  );
};

export default Header;

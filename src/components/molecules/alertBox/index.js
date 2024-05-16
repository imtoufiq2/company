//icons
import CrossIcon from "../../../Icons/CrossIcon";
//atoms
import TextSmallLight from "../../atoms/textSmallLight";
import Button from "../../atoms/button/Button";

const AlertBox = ({ setShowAlert }) => {
  return (
    <div
      id="_alert dismisable"
      className="flex min-h-[76px] items-center justify-center bg-[#FFF6ED] sticky top-20 left-0 right-0"
    >
      <div
        id="_innerDiv"
        className="mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between gap-3 py-2 text-center sm:flex-row md:w-[75%] md:gap-5 "
      >
        <div>
          <TextSmallLight
            text="Add one or more FD to compare"
            className="regular-text text-sm leading-6"
          />
          <h3 className="bold-text text-base leading-7 tracking-[-0.3] text-[#1C222B]">
            Shriram Finance • Axis Bank
          </h3>
        </div>
        <div id="_right" className="flex items-center gap-2 sm:gap-5">
          <Button
            label="Compare"
            className="medium-text mx-auto  h-fit w-4/5 rounded-md bg-[#21B546] px-5 py-[10px] text-base leading-7 tracking-[-0.3] text-white sm:w-[9.0625rem]"
          />
          <CrossIcon onClick={() => setShowAlert(false)} />
        </div>
      </div>
    </div>
  );
};

export default AlertBox;

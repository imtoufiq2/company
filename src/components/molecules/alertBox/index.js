//icons
import CrossIcon from "../../../Icons/CrossIcon";
//atoms
import TextSmallLight from "../../atoms/textSmallLight";
import Button from "../../atoms/button/Button";

const AlertBox = ({
  setShowAlert,
  compareData,
  setShowPopUp,
  setCompareData,
}) => {
  const issuerNames = compareData
    ?.map((cur) => cur?.issuer_name)
    .filter((name) => name)
    .join(" • ");
  return (
    <>
      <div
        id="_alert dismisable"
        className="fixed left-0 right-0 top-0 z-10 flex min-h-[76px] items-center justify-center bg-[#FFF6ED] md:top-[3.75rem]"
      >
        <div
          id="_innerDiv"
          className="mx-auto  flex w-[90%] max-w-[1008px] flex-col justify-between gap-3 py-2 text-center sm:flex-row md:w-[75%] md:gap-5 "
        >
          <div>
            <TextSmallLight
              text="Add one or more FD to compare"
              className="regular-text text-start text-sm leading-6"
            />
            <h3 className="bold-text text-start text-base leading-7 tracking-[-0.3px] text-[#1C222B]">
              {issuerNames}
            </h3>
          </div>
          <div id="_right" className="flex items-center gap-2 sm:gap-5">
            <Button
              disabled={compareData?.length < 2 ? true : false}
              label="Compare"
              className={`medium-text mx-auto  h-fit w-4/5 rounded-md bg-[#21B546] px-5 py-[10px] text-base leading-7 tracking-[-0.3px] text-white sm:w-[9.0625rem] ${compareData?.length < 2 ? "opacity-50" : "bg-opacity-100"}`}
              onClick={() => setShowPopUp(true)}
            />
            <CrossIcon
              onClick={() => {
                setShowAlert(false);
                setCompareData([]);
              }}
            />
          </div>
        </div>
      </div>
      <div className="min-h-[128px] md:min-h-[4.5625rem]"></div>
    </>
  );
};

export default AlertBox;

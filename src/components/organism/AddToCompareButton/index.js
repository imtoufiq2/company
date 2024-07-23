const AddToCompareButton = ({
  handleCheckBoxClick,
  isPortfolio,
  leftVal,
  isChecked,
  curVal,
  setCompareData,
  handleCompareData,
}) => {
  return (
    <div className="flex items-center justify-between">
      {isPortfolio ? (
        <div className="flex items-center gap-2">
          <img
            src="/images/green-grow.svg"
            alt="grow"
            className="h-[0.56rem] w-[0.91rem]"
          />
          <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#21B546]">
            {leftVal}
          </p>
        </div>
      ) : (
        <div id="_div" className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked ? true : false}
            className="h-4 w-4 cursor-pointer accent-[#00a700] md:h-5 md:w-5"
            onClick={(e) => {
              e.stopPropagation();
              handleCompareData(curVal);
            }}
            // className="min-h-4 min-w-4 p-4 accent-[#00a700]"
            // onClick={() => handleCheckBoxClick(curVal)}
            // checked={isChecked}
          />
          <span
            className="medium-text cursor-pointer text-sm leading-6
tracking-[-0.2px] text-[#2D3643] md:text-base md:leading-7 md:tracking-[-0.3px]"
            // onClick={() => console.log("safdsadfsafd2")}
          >
            Add to Compare
          </span>
        </div>
      )}

      {/* {isPortfolio && (
        <span
          className={`medium-text block rounded-md  px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2px]  md:py-1 md:text-sm md:leading-7 ${isPortfolio ? "bg-[#F0F3F9] text-[#5E718D]" : "bg-[#E4F6ED] text-[#11A75C]"}`}
        >
          {isPortfolio
            ? `Maturity on ${curVal?.fd_maturity_date}`
            : curVal?.tag
              ? curVal.tag
              : ""}
        </span>
      )} */}
      {isPortfolio && (
        <span
          className={`medium-text block rounded-md px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2px] md:py-1 md:text-sm md:leading-7 ${
            isPortfolio
              ? "bg-[#F0F3F9] text-[#5E718D]"
              : "bg-[#E4F6ED] text-[#11A75C]"
          }`}
        >
          {isPortfolio
            ? `Maturity on ${curVal?.fd_maturity_date}`
            : curVal?.tag || ""}
        </span>
      )}
    </div>
  );
};

export default AddToCompareButton;

import React from "react";
import Modal from "../modal";

import Image from "../../atoms/Image";
import Button from "../../atoms/button";

const SearchEnginePrompt = ({
  recommendationApiResponse,
  Order_Summary,
  handleUpgrade,
  hanldeSkip,
}) => {
  console.log(
    "recommendationApiResponserecommendationApiResponse",
    recommendationApiResponse,
  );
  console.log(
    "recommendationApiResponserecommendationApiResponse",
    Order_Summary,
  );

  const firstModalData = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-white p-5 shadow-lg outline-none focus:outline-none md:max-w-[28rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t text-[#1B1B1B]">
        <div id="_header" className="flex flex-col gap-3">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3px]">
            Don’t miss out on higher returns
          </h3>
          <p className="regular-text text-sm leading-6 tracking-[-0.2px]">
            We have a found a FD scheme which will give you better returns
          </p>
        </div>
        <div id="_body" className="flex w-full  flex-col gap-1 md:gap-2">
          <fieldset
            id="_first"
            className="flex flex-col gap-5 rounded-xl border-[0.5px] border-[#D7DFE9] bg-[#F9FAFB] p-5"
          >
            <legend className="medium-text rounded-md bg-[#E6EEF6] px-2 py-[2px] text-right text-xs  leading-5 tracking-[-0.2px] text-[#8897AE]">
              Current
            </legend>
            <div className="flex items-center gap-2 md:gap-4">
              <Image
                src={Order_Summary?.logo_url}
                alt="target icon"
                className="h-[24px] w-[24px] object-contain md:h-10 md:w-10"
              />
              <span className="semi-bold-text text-sm leading-5 tracking-[-0.2px] md:text-base  md:leading-8">
                {Order_Summary?.issuer_name}{" "}
              </span>
            </div>
            <div className="flex  items-baseline justify-between">
              <div className="flex flex-col items-start gap-2">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Interest Rate
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#21B546] md:text-lg md:leading-[30px]">
                  {Order_Summary?.Interest_Rate ?? 0}
                </h6>
              </div>
              <div className="flex flex-col gap-2 md:min-h-[66px] md:justify-between">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Tenure
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                  {(Order_Summary?.tenure / 360).toFixed(2)}
                </h6>
              </div>
              <div className="flex flex-col items-end gap-2 md:min-h-[66px] md:justify-between">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Interest on 1 Lac
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                  {/* {`₹${cur?.interest_amount_1l && formatIndianNumber(cur?.interest_amount_1l)}`} */}
                  43
                </h6>
              </div>
            </div>
          </fieldset>
          <fieldset
            id="_second"
            className="flex flex-col gap-5 rounded-xl border-[0.5px] border-[#D7DFE9] bg-[#F2FFF5] p-5"
          >
            <legend className="medium-text rounded-md bg-[#E4F6ED] px-2 py-[2px] text-right text-xs  leading-5 tracking-[-0.2px] text-[#11A75C]">
              Recommended
            </legend>
            <div className="flex items-center gap-2 text-[#1B1B1B] md:gap-4">
              <Image
                src={Order_Summary?.logo_url}
                alt="target icon"
                className="h-[24px] w-[24px] object-contain md:h-10 md:w-10"
              />
              <span className="semi-bold-text text-sm leading-7 tracking-[-0.2px] md:text-base  md:leading-8">
                {Order_Summary?.issuer_name}
              </span>
            </div>
            <div className="flex  items-baseline justify-between">
              <div className="flex flex-col items-start gap-2">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Interest Rate
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#21B546] md:text-lg md:leading-[30px]">
                  {/* {recommendationApiResponse?.rate_of_interest_regular} */}
                  {`${recommendationApiResponse?.rate_of_interest_regular ?? "N/A"}%`}
                </h6>
              </div>
              <div className="flex flex-col gap-2 md:min-h-[66px] md:justify-between">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Tenure
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                  {/* {recommendationApiResponse?.min_days} */}
                  {(recommendationApiResponse?.min_days / 360).toFixed(2)}
                </h6>
              </div>
              <div className="flex flex-col items-end gap-2 md:min-h-[66px] md:justify-between">
                <p className="regular-text text-xs  leading-4 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Interest on 1 Lac
                </p>
                <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                  {/* {`₹${cur?.interest_amount_1l && formatIndianNumber(cur?.interest_amount_1l)}`} */}
                  43
                </h6>
              </div>
            </div>
            <Button
              onClick={handleUpgrade}
              label="Upgrade"
              className="medium-text bg-[#21B546] text-base leading-7 tracking-[-0.3px] text-white"
            />
          </fieldset>
        </div>
        <button
          id="_button"
          className="medium-text mx-auto w-fit text-sm leading-6 tracking-[-0.2px] text-[#21B546]"
          onClick={hanldeSkip}
        >
          Don’t Upgrade
        </button>
      </div>
    </div>
  );
  return <Modal body={firstModalData} />;
};

export default SearchEnginePrompt;

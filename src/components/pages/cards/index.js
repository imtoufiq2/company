import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Image from "../../atoms/Image";
import InvestSectionHeaderWithIcon from "../../molecules/InvestSectionHeaderWithIcon";
import { formatIndianNumber } from "../../../utils/commonUtils";
import Loader from "../../organism/loader";

import Heading from "../../atoms/headingContent/Heading";
import EmptyState from "../../organism/emptyState";

import { getData } from "../../../utils/Crypto";
import { fetchDiscoverData } from "../../../redux/actions/discoverCard";
import { fetchWithWait } from "../../../utils/method";

const Cards = () => {
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [fdData, setFdData] = useState(null);
  const [order, setOrder] = useState("asc");

  const { discoverData, discoverDatError } = useSelector(
    (state) => state?.discoverFd,
  );
  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  const capitalizedType = capitalizeWords(type);

  const handleSort = useCallback(
    (sortBy) => {
      const sortedData = [...fdData].sort((a, b) => {
        if (sortBy === "tenure") {
          const tenureA = parseFloat(a.tenure.match(/\d+/)[0]);
          const tenureB = parseFloat(b.tenure.match(/\d+/)[0]);
          return order === "asc" ? tenureA - tenureB : tenureB - tenureA;
        } else if (sortBy === "rate_of_interest") {
          const roiA = parseFloat(a.rate_of_interest.replace(/[^\d.]/g, ""));
          const roiB = parseFloat(b.rate_of_interest.replace(/[^\d.]/g, ""));
          return order === "asc" ? roiA - roiB : roiB - roiA;
        }
        return 0;
      });

      setFdData(sortedData);
      setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    },
    [fdData, order],
  );

  const handleGetData = useCallback(() => {
    const data = {
      count: 10,
      category_id: type === "High Returns" ? 4 : type === "sort terms" ? 2 : 6,
      display_location: "FDList",
      fd_id: 0,
      investor_id: Number(getData("userData")?.investor_id) ?? 0,
      payout_method_id: "C",
      tag: "string",
      tag_id: +id,
    };
    fetchWithWait({ dispatch, action: fetchDiscoverData(data) });
  }, [dispatch, id, type]);
  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  useEffect(() => {
    setFdData(discoverData);
  }, [discoverData]);
  return (
    <>
      <div className=" mx-auto  mt-0 flex max-w-[1008px] flex-col  justify-between gap-2 px-5 pt-6 md:gap-5 lg:mt-8 lg:px-0 lg:pt-0">
        <Heading
          text={`${capitalizedType} FD`}
          type="h3"
          className="bold-text text-[28px] leading-9 tracking-[-0.5px]  text-[#1B1B1B] md:text-5xl md:leading-[44px] md:tracking-[-1.75px]"
        />
        <p className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D] md:text-[20px] md:leading-8 md:tracking-[-0.3px]">
          Invest in fixed deposits, earn assured returns{" "}
          <span className="bold-text">up to 9.21% p.a.</span> FDs are regulated
          by RBI.
        </p>
      </div>
      {!discoverDatError && (
        <div className="md:pt8 mx-auto flex w-full max-w-[1010px] flex-col items-center justify-center gap-10 pb-10 pt-5 md:pb-20">
          {!fdData ? (
            <Loader />
          ) : (
            <div
              id="_body-data"
              className="flex w-full max-w-[1010px] flex-col px-5 lg:px-0"
            >
              <div className="flex items-center justify-between">
                <InvestSectionHeaderWithIcon
                  headerText={`${fdData?.length ?? 0} ${capitalizeWords(type)} FD${fdData?.length > 1 ? "s" : ""}`}
                />

                {fdData?.length > 0 && (
                  <button
                    // onClick={() => handleSort("asc" ,type === "High Returns" ? "By Tenure" : "By ROI")}
                    onClick={() =>
                      handleSort(
                        type === "High Returns" ? "tenure" : "rate_of_interest",
                      )
                    }
                    className="flex h-[38px] min-w-[38px] cursor-pointer items-center justify-center gap-1 rounded-md border px-1 transition-all duration-200 ease-in-out active:scale-[0.97]  md:h-[42px] md:min-w-[42px] md:px-2"
                  >
                    <span className="medium-text text-xs text-[#455468] md:text-sm">
                      {type === "High Returns" ? "By Tenure" : "By ROI"}
                    </span>
                    <img src="/images/ArrowsDownUp.svg" alt="ArrowsDownUp" />
                  </button>
                )}
              </div>
              {fdData?.length === 0 && <EmptyState />}
              <div
                id="_body-data"
                className="mt-5 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-2 md:gap-8"
              >
                {fdData?.length > 0 &&
                  fdData?.map((cur, index) => (
                    <div
                      key={index}
                      className={`flex ${Number(cur?.is_comingsoon) !== 1 && "cursor-pointer"} flex-col gap-7 rounded-xl border-[0.5px] border-[#D7DFE9] p-5 md:py-6`}
                      onClick={() => {
                        if (Number(cur?.is_comingsoon) !== 1) {
                          navigate(
                            `/invest/${cur?.fd_id}/${cur?.scheme_master_id}/${cur?.tag}`,
                          );
                        }
                      }}
                    >
                      <div className="flex items-center gap-2 md:gap-4">
                        <Image
                          src={cur?.logo_url}
                          alt="target icon"
                          className="h-[24px] w-[24px] object-contain md:h-10 md:w-10"
                        />
                        <span className="bold-text text-base leading-7 tracking-[-0.3px] md:text-xl md:leading-8">
                          {cur?.fd_name}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start gap-2">
                          <p className="regular-text text-[12px] leading-5 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-7">
                            Interest Rate
                          </p>
                          <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#21B546] md:text-lg md:leading-[30px]">
                            {`${cur?.rate_of_interest ?? "N/A"}% p.a`}
                          </h6>
                        </div>
                        <div className="flex flex-col gap-2 md:min-h-[66px] md:justify-between">
                          <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
                            Tenure
                          </p>
                          <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                            {cur?.tenure}
                          </h6>
                        </div>
                        <div className="flex flex-col items-end gap-2 md:min-h-[66px] md:justify-between">
                          <p className="regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]">
                            Interest on 1 Lac
                          </p>
                          <h6 className="semi-bold-text text-base leading-7 tracking-[-0.3px] text-[#1B1B1B] md:text-lg md:leading-[30px]">
                            {`₹${cur?.interest_amount_1l && formatIndianNumber(cur?.interest_amount_1l)}`}
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="medium-text block rounded-md bg-[#E4F6ED] px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2px] text-[#11A75C] md:py-1 md:text-sm md:leading-7">
                          {cur?.tag}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cards;

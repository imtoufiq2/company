import React, { useCallback, useEffect, useState } from "react";
import TextSmallLight from "../../atoms/textSmallLight";
import ChevronNormal from "../../../Icons/Chevron-normal";
import CompareReturnsTable from "../compareReturnsTable";
import { AiOutlineClose } from "react-icons/ai";

import { getData } from "../../../utils/Crypto";
import { fetchWithWait } from "../../../utils/method";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompareReturn } from "../../../redux/actions/invest";

const CompareReturns = ({ setShowPopUp, compareData, setCompareData }) => {
  const dispatch = useDispatch();
  const [tenureData , setTenureData]=useState([])
  useEffect(()=>{
    setTenureData(tenureData)
  },[tenureData])
console.log("ssssssssss",compareData?.map((cur)=>cur?.tenure))
  const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);

  const {
    investPage: { fetchCompareReturnData, fetchCompareReturnError },
  } = useSelector((state) => state);

  const handleShowDatas = useCallback(() => {
    const comparison_ids = compareData?.map((cur) => cur?.fd_id);
    const comparison_ids_string = comparison_ids.join(",");
    const data = {
      comparison_ids: comparison_ids_string,
      count: 2,
      display_location: "Compare",
      fd_id: 0,
      investor_id: Number(getData("userData")?.investor_id) ?? 0,
      payout_method_id: "",
      tag: "string",
      tag_id: 1,
      // category_id:""
    };
    fetchWithWait({ dispatch, action: fetchCompareReturn(data) });
  }, [compareData, dispatch]);
  useEffect(() => {
    handleShowDatas();
  }, [handleShowDatas]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <div className=" fixed inset-0  z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#5d5e5e] bg-opacity-[0.97] outline-none focus:outline-none">
        <div
          className={`relative bottom-5 top-5 mx-auto my-6 flex h-fit  w-full items-center justify-center px-2 lg:max-w-3xl  `}
        >
          <div
            className={`relative  ${compareData?.length > 2 ? "top-[18rem]" : "top-[16rem]"} mx-auto flex  h-full w-full max-w-[39.25rem]  flex-col rounded-lg border-0 bg-[#FFF6ED] py-5 pb-0 shadow-lg outline-none focus:outline-none lg:h-auto`}
          >
            <div className="relative flex   flex-col justify-between gap-5 rounded-t">
              <div id="_header" className="px-5">
                <h3 className="bold-text text-xl leading-8 tracking-[-0.3px] text-[#1B1B1B]">
                  Compare Returns
                </h3>
                <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D] md:text-sm md:leading-6">
                  Compare interest rates of different FDs in a glance
                </p>
              </div>
              {/* this is the middle section */}
              <div
                id="_middle"
                className="flex min-h-12 items-center justify-between bg-[#FFEBD8] px-5"
              >
                <div id="_left">
                  <label className="flex cursor-pointer items-center gap-1">
                    <input
                      type="checkbox"
                      value=""
                      className="peer sr-only"
                      onChange={(e) => setIsSeniorCitizen(e.target.checked)}
                    />
                    <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#28BF4E] peer-checked:after:translate-x-full  "></div>
                    <TextSmallLight
                      text="Senior Citizen"
                      className=" medium-text text-sm leading-6 tracking-[-0.2px] text-[#2D3643]"
                    />
                  </label>
                </div>
                {/* <div id="_right" className="flex items-center gap-1 md:gap-3"> */}
                <div id="_right" className="hidden items-center gap-1 md:gap-3">
                  <div
                    id="_first"
                    className="semi-bold-text hidden text-xs leading-5 tracking-[-0.2px] text-[#5E718D] md:block"
                  >
                    Compounding
                  </div>
                  <div id="_second">
                    {" "}
                    <aside className="relative scale-[0.8] md:scale-100">
                      <select className=" medium-text medium-text max-h-6 appearance-none rounded-md border bg-[#F0F3F9] py-1 pl-2 pr-9  pt-0 text-xs leading-6 tracking-[-0.2px] text-[#5E718D] outline-none hover:cursor-pointer">
                        <option value="maturity">At maturity</option>
                        <option value="monthly">1 yrs</option>
                        <option value="quarterly">2 yrs</option>
                      </select>
                      <ChevronNormal toCenter />
                    </aside>
                  </div>
                </div>
              </div>
              <div id="_table" className="p-5">
                {!fetchCompareReturnError && (
                  <CompareReturnsTable
                    showData={
                      fetchCompareReturnData ? fetchCompareReturnData : []
                    }
                    isSeniorCitizen={isSeniorCitizen}
                    tenureData={tenureData}
                  />
                )}
              </div>
              <button
                className="absolute right-0 ml-auto  border-0 p-1 pr-5 transition hover:opacity-70"
                onClick={() => {
                  setShowPopUp(false);
                  setCompareData([]);
                }}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareReturns;

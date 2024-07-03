import React, { useCallback, useEffect, useState } from "react";
import Modal from "../modal";
import TextSmallLight from "../../atoms/textSmallLight";
import ChevronNormal from "../../../Icons/Chevron-normal";
import CompareReturnsTable from "../compareReturnsTable";
import { AiOutlineClose } from "react-icons/ai";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import toast from "react-hot-toast";
import { getData } from "../../../utils/Crypto";

const CompareReturns = ({ setShowPopUp, compareData }) => {
  console.log("compareDatacompareData",compareData)
  const [showData, setShowData] = useState([]);
  const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);
  console.log("isSeniorCitizenisSeniorCitizen", isSeniorCitizen);
  const handleShowData = useCallback(async () => {
    console.log("show the duidadas");
    const comparison_ids = compareData?.map((cur) => cur?.fd_id);
    const comparison_ids_string = comparison_ids.join(',');
    console.log("comparison_ids", comparison_ids_string);
    const data =getData("userData")
    console.log("asfdasfdasd" ,data?.investor_id)
    try {
      const { data } = await axios.post(
        `${endpoints?.baseUrl}/products/getfd`,
        {
          comparison_ids: comparison_ids_string, 
          count: 2,
          display_location: "Compare",
          fd_id: 0,
          investor_id: Number(getData("userData")?.investor_id)?? 0,
          payout_method_id: "",
          tag: "string",
          tag_id: 1,
        },
      );
      console.log("responseresponse", data?.data);
      if (data?.status === 200) {
        setShowData(data?.data);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  }, [compareData]);
  useEffect(() => {
    handleShowData();
  }, [handleShowData]);
  const bodyData = (
    <div className={`relative  ${compareData?.length>2 ? "top-[18rem]" : "top-[16rem]"} mx-auto flex  h-full w-full max-w-[39.25rem]  flex-col rounded-lg border-0 bg-[#FFF6ED] py-5 pb-0 shadow-lg outline-none focus:outline-none lg:h-auto`}>
      <div className="relative flex   flex-col justify-between gap-5 rounded-t">
        {" "}
        <div id="_header" className="px-5">
          <h3 className="bold-text text-xl leading-8 tracking-[-0.3] text-[#1B1B1B]">
            Compare Returns
          </h3>
          <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] md:text-sm md:leading-6">
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
                className=" medium-text text-sm leading-6 tracking-[-0.2] text-[#2D3643]"
              />
            </label>
          </div>
          {/* <div id="_right" className="flex items-center gap-1 md:gap-3"> */}
          <div id="_right" className="hidden items-center gap-1 md:gap-3">
            <div
              id="_first"
              className="semi-bold-text hidden text-xs leading-5 tracking-[-0.2] text-[#5E718D] md:block"
            >
              Compounding
            </div>
            <div id="_second">
              {" "}
              <aside className="relative scale-[0.8] md:scale-100">
                <select className=" medium-text medium-text max-h-6 appearance-none rounded-md border bg-[#F0F3F9] py-1 pl-2 pr-9  pt-0 text-xs leading-6 tracking-[-0.2] text-[#5E718D] outline-none hover:cursor-pointer">
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
          <CompareReturnsTable
            showData={showData}
            isSeniorCitizen={isSeniorCitizen}
          />
        </div>
        <button
          className="absolute right-0 ml-auto  border-0 p-1 pr-5 transition hover:opacity-70"
          onClick={() => {
            setShowPopUp(false);
          }}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <Modal body={bodyData} isTable />
    </div>
  );
};

export default CompareReturns;

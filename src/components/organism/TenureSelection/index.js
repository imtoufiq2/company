import React, { useCallback, useEffect, useState } from "react";
import ChevronNormal from "../../../Icons/Chevron-normal";
import axios from "axios";
import { getData } from "../../../utils/Crypto";

import { GoChevronDown } from "react-icons/go";


import {
  fetchSelectData,
  fetchTableData,
} from "../../../redux/actions/investDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchWithWait } from "../../../utils/method";
import Loader from "../loader";
import SomethingWentWrong from "../something-went-wrong";
import { endpoints } from "../../../services/endpoints";
import SpecialOffers from "../../molecules/specialOffers";
const TenureSelection = ({ fdid, setActiveRow, activeRow }) => {
  const { loading } = useSelector((state) => state?.ApplicationLoader);
  console.log("loading", loading);
  const dispatch = useDispatch();
  const {
    cardApiResponse,
    cardApiResponseError,

    selectApiResponse,
    selectApiResponseError,

    tableApiError,
    tableApiResponse,
  } = useSelector((state) => state?.investDetails);
  console.log("reduxData", selectApiResponse);

  const [payOutMethod, setPayOutMethod] = useState("");

  const [Data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleSelect = useCallback(() => {
    const data = {
      display_location: "PayoutMethods",
      tag: "PayoutMethods",
      fd_id: fdid,
    };
    fetchWithWait({ dispatch, action: fetchSelectData(data) });
  }, []);

  useEffect(() => {
    handleSelect();
  }, [handleSelect]);

  const handleFetchTable = useCallback(() => {
    const data = {
      display_location: "TenureAndReturns",
      tag: "TenureAndReturns",
      investor_id: getData("userData")?.investor_id,
      fd_id: fdid,
      // "payout_method_id": payOutMethod
      payout_method_id: payOutMethod === "" ? "C" : payOutMethod,
    };
    fetchWithWait({ dispatch, action: fetchTableData(data) });
  }, [dispatch, fdid, payOutMethod]);
  useEffect(() => {
    handleFetchTable();
  }, [handleFetchTable]);
  // =========== table =======data=======
  const handleTableData = async (e) => {
    try {
      const { data } = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/products/getfd",
        `${endpoints?.baseUrl}/products/getfd`,
        {
          display_location: "TenureAndReturns",
          tag: "TenureAndReturns",
          investor_id: getData("userData")?.investor_id,
          fd_id: fdid,
          // "payout_method_id": payOutMethod
          payout_method_id: payOutMethod === "" ? "C" : payOutMethod,
        },
      );

      setTableData(data?.data);

      // Handle success
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  useEffect(() => {
    handleTableData();
  }, []);
  return (
    <>
      {tableApiResponse?.length > 0 && selectApiResponse?.length > 0 ? (
        <div className="   flex w-full max-w-[1008px] flex-col justify-between gap-3 text-[#1B1B1B]  md:gap-5">
          <div id="_header" className="flex justify-between">
            <div id="_left">
              <h3 className="bold-text  text-xl leading-normal  tracking-[-0.3] text-[#1B1B1B]">
                Tenure & Returns
              </h3>
              <p className="text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                Choose your preferred tenure to invest
              </p>
            </div>
            <div id="_right">
              {selectApiResponse?.length > 0 && !selectApiResponseError && (
                <aside className="relative ">
                  <select
                    onChange={(e) => {
                      setPayOutMethod(e.target?.value);
                      handleTableData();
                    }}
                    className=" medium-text medium-text appearance-none rounded-md border bg-[#F0F3F9] py-2 pl-2 pr-9 text-sm  leading-6 tracking-[-0.2] text-[#5E718D] outline-none hover:cursor-pointer"
                  >
                    {selectApiResponse?.map((curData) => {
                      return (
                        <option value={curData?.item_id}>
                          {curData?.item_value}
                        </option>
                      );
                    })}
                  </select>
                  <ChevronNormal />
                </aside>
              )}
            </div>
          </div>
          {/* ============= table  */}
          {!tableApiResponse?.length && !tableApiError ? (
            <Loader />
          ) : tableApiError && !loading ? (
            <SomethingWentWrong />
          ) : (
            <table>
              <thead>
                {/* <tr className="flex w-full justify-between p-5 "> */}
                <tr className="grid w-full grid-cols-3 px-5 ">
                  <th className="medium-text text-start text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                    Tenure
                  </th>
                  <th className="medium-text text-right text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                    General
                  </th>
                  <th className="medium-text text-right text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
                    Sr. Citizen
                  </th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-3 ">
                {tableData?.map((curVal, index) => {
                  return (
                    <fieldset
                      className={`grid  w-full  grid-cols-3 rounded-2xl  border-[0.5px]  bg-white p-5 text-[#5E718D] ${activeRow?.tenure === curVal?.tenure && "border-[#21B546]"}`}
                      onClick={() => setActiveRow(curVal)}
                      key={index}
                    >
                      {index === 0 && (
                        <legend className="medium-text rounded-md bg-[#FFC700] px-2 py-[2px] text-[12px] leading-5 tracking-[-0.2] text-white">
                          Most Invested
                        </legend>
                      )}
                      <td className="regular-text  text-base leading-7 tracking-[-0.3] ">
                        {curVal.tenure}
                      </td>
                      <td
                        className={`semi-bold-text text-right text-base leading-7 tracking-[-0.3]  ${activeRow?.tenure === curVal?.tenure ? "text-[#21B546]" :"text-[#1B1B1B]"}`}
                      >
                        {curVal.rate_of_interest_r}
                      </td>
                      <td className={`semi-bold-text text-right text-base leading-7 tracking-[-0.3]   ${activeRow?.tenure === curVal?.tenure ? "text-[#21B546]" :"text-[#1B1B1B]"}`}>
                        {curVal.rate_of_interest_sc}
                      </td>
                    </fieldset>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <SomethingWentWrong />
      )}
      <SpecialOffers />
      <div id="_div" className="flex items-center gap-2 mx-auto -mt-1">
        <span className="text-[#21B546] medium-text text-sm leading-6">Show All Schemes</span>
        <GoChevronDown style={{ color: '#21B546' }}/>
        <aside className="relative bg-white">
  <select className="py-1.5 pl-3.5 pr-9 appearance-none hover:cursor-pointer bg-white border border-border rounded-md text-text">
    <option className="p-5">This Month</option>
    <option className="p-5">Last Month</option>
  </select>
  <svg
    className="absolute right-3.5 top-3 hover:cursor-pointer pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
      fill="#4D4D4D"
    />
  </svg>
</aside>

      </div>
    </>
  );
};
export default TenureSelection;

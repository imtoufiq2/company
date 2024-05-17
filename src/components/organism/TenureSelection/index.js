import React, { useEffect, useState } from "react";
import ChevronNormal from "../../../Icons/Chevron-normal";
import axios from "axios";
import { getData } from "../../../utils/Crypto";

const TenureSelection = ({ fdid }) => {
  const [activeRow, setActiveRow] = useState(null);
  const [payOutMethod, setPayOutMethod] = useState("");
 console.log("my fd id", fdid)
  const [Data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleSelect = async (e) => {
    try {
      const { data } = await axios.post(
        "https://altcaseinvestor.we3.in/api/v2/products/getfd",
        {
          display_location: "PayoutMethods",
          tag: "PayoutMethods",
          fd_id: fdid,
        },
      );
      console.warn("data", data?.data);
      setData(data?.data);
      // setData(data?.data[0])
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  useEffect(() => {
    handleSelect();
  }, []);
  // =========== table =======data=======
  const handleTableData = async (e) => {
    try {
      const { data } = await axios.post(
        "https://altcaseinvestor.we3.in/api/v2/products/getfd",
        {
          display_location: "TenureAndReturns",
          tag: "TenureAndReturns",
          investor_id: getData("userData")?.investor_id,
          fd_id: fdid,
          // "payout_method_id": payOutMethod
          payout_method_id: payOutMethod === "" ? "C" : payOutMethod,
        },
      );
      console.warn("handleTableData", data?.data);
      setTableData(data?.data);
      // setData(data?.data)
      // setData(data?.data[0])
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
    <div className="  my-4 flex w-full max-w-[1008px] flex-col justify-between gap-3 text-[#1B1B1B]  md:gap-5">
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
          <aside className="relative ">
            <select
              onChange={(e)=>{
                setPayOutMethod(e.target?.value)
                handleTableData()
              }}
              className=" medium-text medium-text appearance-none rounded-md border bg-[#F0F3F9] py-2 pl-2 pr-9 text-sm  leading-6 tracking-[-0.2] text-[#5E718D] outline-none hover:cursor-pointer"
            >
              {Data?.map((curData) => {
                return (
                  <option value={curData?.item_id}>
                    {curData?.item_value}
                  </option>
                );
              })}
            </select>
            <ChevronNormal />
          </aside>
        </div>
      </div>
      {/* ============= table  */}

      <table>
        <thead>
          {/* <tr className="flex w-full justify-between p-5 "> */}
          <tr className="grid grid-cols-3 w-full p-5 ">
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
                className={`grid  w-full  grid-cols-3 rounded-2xl  border-[0.5px]  bg-white p-5 text-[#5E718D] ${index === activeRow && "border-[#21B546]"}`}
                onClick={() => setActiveRow(index)}
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
                  className={`semi-bold-text text-right text-base leading-7 tracking-[-0.3] text-[#21B546]`}
                >
                  {curVal.rate_of_interest_r}
                </td>
                <td className="semi-bold-text text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
                  {curVal.rate_of_interest_sc}
                </td>
              </fieldset>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TenureSelection;

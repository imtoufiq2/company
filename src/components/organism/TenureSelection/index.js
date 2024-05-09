import React, { useState } from "react";
import ChevronNormal from "../../../Icons/Chevron-normal";

const TenureSelection = () => {
  const [activeRow, setActiveRow] = useState(null);
  const apiData = [
    { tenure: "3 yr", general: "8.70%", seniorCitizen: "9.30%" },
    { tenure: "1 yr", general: "8.50%", seniorCitizen: "8.00%" },
    { tenure: "1 yr 6 mo", general: "7.80%", seniorCitizen: "8.20%" },
    { tenure: "2 yr", general: "8.50%", seniorCitizen: "8.70%" },
    { tenure: "5 yr", general: "8.90%", seniorCitizen: "9.50%" },
  ];

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
          <aside className="relative bg-white">
            <select className=" medium-text medium-text appearance-none rounded-md border bg-[#F0F3F9] py-2 pl-2 pr-9 text-sm  leading-6 tracking-[-0.2] text-[#5E718D] outline-none hover:cursor-pointer">
              <option value="maturity">At Maturity</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="halfYearly">Half-Yearly</option>
              <option value="yearly">Yearly</option>
            </select>
            <ChevronNormal/>
          </aside>
        </div>
      </div>
      {/* ============= table  */}

      <table>
        <thead>
          <tr className="flex w-full justify-between p-5 ">
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
          {apiData?.map((curVal, index) => {
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
                  {curVal.general}
                </td>
                <td className="semi-bold-text text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
                  {curVal.seniorCitizen}
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

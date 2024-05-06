import React, { useState } from "react";

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
          {/* <form class="mx-auto max-w-sm pt-[2px]">
            <select
              id="tenure"
              style={{ padding: "6px" }}
              class="block rounded-lg   bg-[#F0F3F9] p-[6px] px-[6px] py-[2px] text-sm text-gray-900 outline-none"
            >
              <option value="maturity">At Maturity</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="halfYearly">Half-Yearly</option>
              <option value="yearly">Yearly</option>
            </select>
          </form> */}
           <aside className="relative bg-white">
                <select className=" medium-text appearance-none rounded-md border bg-[#F0F3F9] py-2 pl-2 pr-9 text-sm leading-6  outline-none hover:cursor-pointer text-[#5E718D] medium-text tracking-[-0.2]">
                <option value="maturity">At Maturity</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="halfYearly">Half-Yearly</option>
              <option value="yearly">Yearly</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3.5 top-3 hover:cursor-pointer"
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
              <fieldset className={`bg-white  w-full  rounded-2xl border-[0.5px]  p-5  text-[#5E718D] grid grid-cols-3 ${index===activeRow && "border-[#21B546]"}`} onClick={()=>setActiveRow(index)}>
                {index === 0 && <legend className="medium-text text-[12px] leading-5 tracking-[-0.2] text-white bg-[#FFC700] py-[2px] px-2 rounded-md">Most Invested</legend>}
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











{
  /* <tbody>
{apiData?.map((curVal) => {
  return (
    <tr className=" rounded-2xl border-[0.5px] border-[#21B546]   text-[#5E718D] ">
      <td
        className="regular-text   p-5 pr-0 text-base leading-7 tracking-[-0.3]"
        style={{ borderRadius: "16px" }}
      >
        {curVal.tenure}
      </td>
      <td className="semi-bold-text   text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
        {curVal.general}
      </td>
      <td className="semi-bold-text  pr-5 text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
        {curVal.seniorCitizen}
      </td>
    </tr>
  );
})}
</tbody> */
}

{
  /* <table>
        <thead>
          <tr className=" rounded-2xl border-[0.5px] border-[#21B546] text-[#5E718D]">
            <th className="medium-text  p-5 pr-0 text-start text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
              Tenure
            </th>
            <th className="medium-text  text-right text-sm leading-6 tracking-[-0.2] text-[#5E718D] ">
              General
            </th>
            <th className="medium-text  pr-5 text-right text-sm leading-6 tracking-[-0.2] text-[#5E718D]">
              Sr. Citizen
            </th>
          </tr>
        </thead>
        <tbody>
          {apiData?.map((curVal) => {
            return (
              <tr className=" rounded-2xl border-[0.5px] border-[#21B546]   text-[#5E718D] ">
                <td
                  className="regular-text   p-5 pr-0 text-base leading-7 tracking-[-0.3]"
                  style={{ borderRadius: "16px" , }}
                >
                  {curVal.tenure}
                </td>
                <td className="semi-bold-text   text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
                  {curVal.general}
                </td>
                <td className="semi-bold-text  pr-5 text-right text-base leading-7 tracking-[-0.3] text-[#21B546]">
                  {curVal.seniorCitizen}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */
}

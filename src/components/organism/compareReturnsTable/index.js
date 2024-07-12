import React from "react";

export default function CompareReturnsTable({ showData, isSeniorCitizen,tenureData }) {
  console.log("asdfassfdahdffddfsa", showData);

  const aggregatedData = {};
  const bankNamesSet = new Set();

  showData.forEach((fd) => {
    const tenureKey = `${fd.tenure}`;
    const bankName = fd.fd_name;
    if (!aggregatedData[tenureKey]) {
      aggregatedData[tenureKey] = {};
    }

    // Add dynamic bank names to the set and aggregated data
    aggregatedData[tenureKey][bankName] = isSeniorCitizen
      ? fd.rate_of_interest_sc
      : fd.rate_of_interest;
    bankNamesSet.add(bankName);
  });

  const bankNames = Array.from(bankNamesSet);

  function displayAggregatedData(data) {
    return (
      <table className="w-full">
        <thead>
          <tr>
            <th className="medium-text text-left align-baseline text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
              Tenure
            </th>
            {bankNames.map((bankName) => (
              <th
                key={bankName}
                className="medium-text text-center align-baseline text-xs leading-5 tracking-[-0.2px] text-[#5E718D]"
              >
                {bankName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([tenure, banks]) => (
            <tr key={tenure}>
              <td className="regular-text text-sm leading-6 tracking-[-0.2px] text-[#5E718D]">
                {tenure}
              </td>
              {bankNames.map((bankName) => (
                <td
                  key={bankName}
                  className="semi-bold-text py-3 text-center text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]"
                >
                  {typeof banks[bankName] === "number"
                    ? `${banks[bankName].toFixed(2)}%`
                    : "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <>{displayAggregatedData(aggregatedData)}</>;
}

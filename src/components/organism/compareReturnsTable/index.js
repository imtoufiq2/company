import React from "react";


export default function CompareReturnsTable() {
  const fdData = [
    {
      fd_id: 120,
      fd_name: "Mahindra Finance FD",
      tenure: "4.4 Yr",
      bank_name: "State Bank",
      rate_of_interest: 7.599999904632568,
      rate_of_interest_sc: 7.849999904632568,
    },
    {
        fd_id: 120,
        fd_name: "Mahindra Finance FD",
        tenure: "1yr 6 mo",
        bank_name: "State Bank",
        rate_of_interest: 7.599999904632568,
        rate_of_interest_sc: 7.849999904632568,
      },
       {
        fd_id: 120,
        fd_name: "Mahindra Finance FD",
        tenure: "1yr 6 mo",
        bank_name: "State Bank",
        rate_of_interest: 7.599999904632568,
        rate_of_interest_sc: 7.849999904632568,
      },
    {
      fd_id: 120,
      fd_name: "Mahindra Finance FD",
      tenure: "4.9 Yr",
      bank_name: "State Bank",
      rate_of_interest: 7.599999904632568,
      rate_of_interest_sc: 7.849999904632568,
    },
    {
      fd_id: 120,
      fd_name: "Mahindra Finance FD",
      tenure: "4.9 Yr",
      bank_name: "Punjab",
      rate_of_interest: 7.599999904632568,
      rate_of_interest_sc: 7.849999904632568,
    },
    {
      fd_id: 120,
      fd_name: "Mahindra Finance FD",
      tenure: "4.9 Yr",
      bank_name: "Kotak",
      rate_of_interest: 7.599999904632568,
      rate_of_interest_sc: 7.849999904632568,
    },
    {
      fd_id: 120,
      fd_name: "Mahindra Finance FD",
      tenure: "4.9 Yr",
      bank_name: "Sree Ram Finance",
      rate_of_interest: 8.050000190734863,
      rate_of_interest_sc: 8.300000190734863,
    },
    // {
    //   fd_id: 120,
    //   fd_name: "Mahindra Finance FD",
    //   tenure: "3.9 Yr",
    //   bank_name: "Axis",
    //   rate_of_interest: 8.050000190734863,
    //   rate_of_interest_sc: 8.300000190734863,
    // },
    // {
    //   fd_id: 120,
    //   fd_name: "Mahindra Finance FD",
    //   tenure: "3.9 Yr",
    //   bank_name: "Axis",
    //   rate_of_interest: 8.050000190734863,
    //   rate_of_interest_sc: 8.300000190734863,
    // },
   
   
    // Add more data entries with different bank names here
  ];

  const aggregatedData = {};
  const bankNamesSet = new Set();

  fdData.forEach((fd) => {
    const tenureKey = `${fd.tenure}`;
    const bankName = fd.bank_name;
    if (!aggregatedData[tenureKey]) {
      aggregatedData[tenureKey] = {};
    }

    // Add dynamic bank names to the set and aggregated data
    aggregatedData[tenureKey][bankName] = fd.rate_of_interest;
    bankNamesSet.add(bankName);
  });

  const bankNames = Array.from(bankNamesSet);

  function displayAggregatedData(data) {
    return (
      <table className="w-full">
        <thead>
          <tr>
            <th className="medium-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] text-left align-baseline">Tenure</th>
            {bankNames.map((bankName) => (
              <th key={bankName} className="align-baseline medium-text text-xs leading-5 tracking-[-0.2] text-[#5E718D] text-right">{bankName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {Object.entries(data).map(([tenure, banks]) => (
            <tr key={tenure}>
              <td className="regular-text text-sm leading-6 tracking-[-0.2] text-[#5E718D]">{tenure}</td>
              {bankNames.map((bankName) => (
              <td key={bankName} className="semi-bold-text py-3 text-sm leading-6 tracking-[-0.2] text-[#1B1B1B] text-right">
              {typeof banks[bankName] === 'number' ? `${banks[bankName].toFixed(2)}%` : "N/A"}
            </td>
            
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <div className="">{displayAggregatedData(aggregatedData)}</div>;
}

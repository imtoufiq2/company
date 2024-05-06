import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "SBI",
    uv: 8.7,
    fill: "#21B546",
  },
  {
    name: "HDFC",
    uv: 6.5,
    fill: "#455468",
  },
  {
    name: "Savings A/C",
    uv: 4.3,
    fill: "#8897AE",
  },
  // Add more data entries as needed
];

const BarCharts = () => {
  const CustomLabel = ({ x, y, value }) => {
    // Find the data item that corresponds to this label
    const dataItem = data.find(item => item.name === value);
    // Use the fill color from the data item
    const fillColor = dataItem ? dataItem.fill : undefined; // Let the color default to bar color

    return (
      <text x={x} y={y} dy={-10} dx={19} fill={fillColor} textAnchor="middle">
        {`${value}%`}
      </text>
    );
  };

  return (
    <div className="chart-container"  style={{
      // border: "1px solid",
      backgroundImage: `url(/images/barGraph-background.svg)`,
      backgroundRepeat: "unset",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius:"12px"
    }}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={{ stroke: "#8897AE" }}
            tick={{ stroke: "none" }}
          />
          <Legend />
          <Bar dataKey="uv" barSize={36}>
            <LabelList content={<CustomLabel />} />
          </Bar>
          <style>{`
            .recharts-legend-wrapper ul { display: none; }
            .recharts-cartesian-axis-tick line {
              display: none;
            }
            tspan {
              font-weight: 700;
              font-size: 12px;
              line-height: 20px;
              text-align: center;
            }
          `}</style>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;

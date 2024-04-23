import React from 'react';
import { Pie } from "react-chartjs-2";

const PieChart = ({chartData, category, timeFrame}) => {


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Budget Summary</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Spending summary for ${category} over the ${timeFrame}.`
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart;
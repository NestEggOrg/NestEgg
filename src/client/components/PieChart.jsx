import React from 'react';
import { Pie } from "react-chartjs-2";

const PieChart = ({chartData, category, timeFrame}) => {


  return (
    <div>
      <h1 className='flex justify-center font-bold text-xl'>Budget Summary</h1>
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
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
import React from 'react';
import { Pie } from "react-chartjs-2";

const PieChart = ({chartData}) => {


  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Budget Summary</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart;
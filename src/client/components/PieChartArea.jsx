import React from 'react';
import PieChart from './PieChart';

const PieChartArea = ({chartData}) => {


  return (
    <div className="border-2 border-black w-1/2 ml-5 mr-5">
      <PieChart  chartData={chartData}></PieChart>
    </div>
  )
}

export default PieChartArea;
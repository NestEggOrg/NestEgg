import React from 'react';
import PieChart from './PieChart';
import LegendItem from './LegendItem';



const PieChartArea = ({chartData, category, timeFrame, totalSpend, budget, categories}) => {

  const legendItems = [];
  console.log(budget)
  console.log(totalSpend)
  console.log(categories)
  console.log(chartData.datasets[0].backgroundColor)

  totalSpend.forEach((cat, index) => {
    
    legendItems.push(
      <LegendItem
        id={index}
        color={chartData.datasets[0].backgroundColor[index *2]}
        category={categories[index]}
        spend={cat}
        budget={budget[index]}
      ></LegendItem>
    )
  })

  return (
    <div className=" w-1/3 mt-10 ml-5 mr-5">
      <PieChart  chartData={chartData} category={category}
        timeFrame={timeFrame}></PieChart>
        <div>
          {legendItems}
        </div>
    </div>
  )
}

export default PieChartArea;
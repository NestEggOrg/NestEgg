import React from 'react';
import PieChart from './PieChart';
import LegendItem from './LegendItem';



const PieChartArea = ({chartData, category, timeFrame, totalSpend, budget, categories}) => {

  const spent = totalSpend.reduce((acc, curr) => acc + curr, 0)
  const totalBudget = budget.reduce((acc, curr) => acc +curr, 0)

  const legendItems = [];
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
        <div className={`flex justify-between bg-slate-300 shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-3 ml-1 mr-1`}>
            <div>Total</div>
            <div>{spent}/{totalBudget}</div>
        </div>
        <div>
          {legendItems}
        </div>
    </div>
  )
}

export default PieChartArea;
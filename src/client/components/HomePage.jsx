import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Expenses from './Expenses';
import PieChartArea from './PieChartArea';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";


const TestData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];

const testExpenses = [
  { title: 'TestTitle', category: 'home', cost: 150, date: '04/01/2024' },
  { title: 'TestTitle2', category: 'home', cost: 250, date: '04/02/2024' },
];

const testBudget = [450, 50, 100, 100, 100, 50, 50, 50];
const testSpend = [440, 40, 90, 90, 90, 40, 50, 60];

const categories = ['Housing', 'Utilities', 'Food', 'Shopping', 'Transport', 'Debt', 'Entertainment', 'Misc']

const HomePage = () => {
  const [expenses, setExpenses] = useState(testExpenses);
  const [budget, setBudget] = useState(testBudget);
  const [totalSpend, setTotalSpend] = useState(testSpend);
  const [category, setCategory] =useState("all expenses");
  const [timeFrame, setTimeFrame] =useState("current month");
  const [chartData, setChartData] = useState({
    labels: TestData.map((data) => data.year), 
    datasets: [
      {
        label: "spend",
        data: TestData.map((data) => data.userGain),
        backgroundColor: [
          // "rgba(75,192,192,1)",
          // &quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#50AF95",
          "#f3ba2f",
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


  return (
    <div className='min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-200-500 to-white-500'>
      HomePage
      {/* Header Bar */}
      {/* <HeaderBar></HeaderBar> */}
      <div className='flex'>
        <Expenses expenses={expenses} />
        <PieChartArea chartData={chartData}
        totalSpend={totalSpend}
        budget={budget}
        category={category}
        timeFrame={timeFrame}
        categories={categories}
        ></PieChartArea>
      </div>
      {/* TopBar */}
      {/*  */}
      {/* Pie Chart */}
    </div>
  );
};

export default HomePage;

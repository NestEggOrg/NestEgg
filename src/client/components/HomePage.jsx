import React, { useState, useEffect } from 'react';
import HeaderBar from './HeaderBar';
import Expenses from './Expenses';
import PieChartArea from './PieChartArea';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import TopBar from './TopBar';
import UserModal from './UserModal';
import ExpenseModal from './ExpenseModal';

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
  const [isUserModal, setIsUserModal] = useState(false)
  const [isExpenseModal, setIsExpenseModal] = useState(false)


  const [expenses, setExpenses] = useState(testExpenses);
  const [budget, setBudget] = useState(testBudget);
  const [totalSpend, setTotalSpend] = useState(testSpend);
  const [category, setCategory] =useState("all expenses");
  const [timeFrame, setTimeFrame] =useState("current month");
  const [pieSlices, setPieSlices] =useState([])
  const [chartData, setChartData] = useState({
    labels: TestData.map((data) => data.year), 
    datasets: [
      {
        label: "spend",
        data: TestData.map((data) => data.userGain),
        backgroundColor: [
          "rgb(190 18 60)",
          "rgb(253 164 175)",
          "rgb(55 48 163)",
          "rgb(165 180 252)",
          "rgb(8 145 178)",
          "rgb(103 232 249)",
          "rgb(21 128 61)",
          "rgb(134 239 172)",
          "rgb(133 77 14)",
          "rgb(254 240 138)",
          "rgb(162 28 175)",
          "rgb(240 171 252)",
          "rgb(67 56 202)",
          "rgb(165 180 252)",
          "rgb(2 132 199)",
          "rgb(125 211 252)",
        ],
        borderColor: "black",
        borderWidth: 1
      }
    ]
  });

  useEffect(()=> {
    const newState = [];
    totalSpend.forEach((exp, index) => {
      newState.push(exp);
      newState.push(budget[index])
    });
    setPieSlices(newState)
    console.log(pieSlices)
  }, [totalSpend, budget])

  // Handles User Modal 
  const handleUserOpen = () => {
    setIsUserModal(true)
  }
  const handleUserClose = () => {
    setIsUserModal(false)
  }

// Handles Expense Modal
  const handleExpenseOpen = () => {
    setIsExpenseModal(true)
  }
  const handleExpenseClose = () => {
    setIsExpenseModal(false)
  }

  return (
    
    <div className='min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-200-500 to-white-500'>
      <HeaderBar handleUserOpen={handleUserOpen}/>
        <UserModal isOpen={isUserModal} onClose = {handleUserClose}/>
      <TopBar handleExpenseOpen={handleExpenseOpen}/>
      <ExpenseModal isOpen={isExpenseModal} onClose={handleExpenseClose}/>
      
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

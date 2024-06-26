import React, { useState, useEffect } from 'react';
import HeaderBar from './HeaderBar';
import Expenses from './Expenses';
import PieChartArea from './PieChartArea';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import TopBar from './TopBar';
import UserModal from './UserModal';
import ExpenseModal from './ExpenseModal';

const testExpenses = [
  {
    title: 'TestTitle',
    category: 'home',
    cost: 150,
    date: '04/01/2024',
    expense_id: 1,
  },
  {
    title: 'TestTitle2',
    category: 'home',
    cost: 250,
    date: '04/02/2024',
    expense_id: 2,
  },
];

const testBudget = [450, 50, 100, 100, 100, 50, 50, 50];
const testSpend = [440, 40, 90, 90, 90, 40, 50, 60];

const categories = [
  'Housing',
  'Utilities',
  'Food',
  'Shopping',
  'Transport',
  'Debt',
  'Entertainment',
  'Misc',
];
const pieChartLabels = [
  'Housing Spent',
  'Housing Remaining',
  'Utilities Spent',
  'Utilities Remaining',
  'Food Spent',
  'Food Remaining',
  'Shopping Spent',
  'Shopping Remaining',
  'Transport Spent',
  'Transport Remaining',
  'Debt Spent',
  'Debt Remaining',
  'Entertainment Spent',
  'Entertainment Remaining',
  'Misc Spent',
  'Misc Remaining',
];

const HomePage = () => {
  const [isUserModal, setIsUserModal] = useState(false);
  const [isExpenseModal, setIsExpenseModal] = useState(false);
  const [userID, setUserID] = useState('1');
  const [username, setUsername] = useState('test');
  const [expenses, setExpenses] = useState(testExpenses);
  const [budget, setBudget] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [income, setIncome] = useState(0);
  const [totalSpend, setTotalSpend] = useState(testSpend);
  const [category, setCategory] = useState('all expenses');
  const [timeFrame, setTimeFrame] = useState('current month');
  const [pieSlices, setPieSlices] = useState([0, 0]);
  const [chartData, setChartData] = useState({
    labels: pieChartLabels,
    datasets: [
      {
        label: 'spend',
        data: pieSlices,
        backgroundColor: [
          'rgb(190 18 60)',
          'rgb(253 164 175)',
          'rgb(55 48 163)',
          'rgb(165 180 252)',
          'rgb(8 145 178)',
          'rgb(103 232 249)',
          'rgb(21 128 61)',
          'rgb(134 239 172)',
          'rgb(133 77 14)',
          'rgb(254 240 138)',
          'rgb(162 28 175)',
          'rgb(240 171 252)',
          'rgb(67 56 202)',
          'rgb(165 180 252)',
          'rgb(2 132 199)',
          'rgb(125 211 252)',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });

  //grab userID from cookie and Set User ID to state
  useEffect(() => {
    // fetch username & income
    getExpenses();
    getBudget();
    // fetch budget
  }, []);

  useEffect(() => {
    const newState = [];
    totalSpend.forEach((exp, index) => {
      newState.push(exp);
      newState.push(budget[index] - exp > 0 ? budget[index] - exp : 0);
    });
    setPieSlices(newState);
  }, [totalSpend, budget]);

  useEffect(() => {
    setChartData({
      labels: pieChartLabels,
      datasets: [
        {
          label: 'Amount',
          data: pieSlices,
          backgroundColor: [
            'rgb(190 18 60)',
            'rgb(253 164 175)',
            'rgb(55 48 163)',
            'rgb(165 180 252)',
            'rgb(8 145 178)',
            'rgb(103 232 249)',
            'rgb(21 128 61)',
            'rgb(134 239 172)',
            'rgb(133 77 14)',
            'rgb(254 240 138)',
            'rgb(162 28 175)',
            'rgb(240 171 252)',
            'rgb(67 56 202)',
            'rgb(165 180 252)',
            'rgb(2 132 199)',
            'rgb(125 211 252)',
          ],
          borderColor: 'black',
          borderWidth: 1,
        },
      ],
    });
  }, [pieSlices]);

  // Handles User Modal
  const handleUserOpen = () => {
    setIsUserModal(true);
  };
  const handleUserClose = () => {
    setIsUserModal(false);
  };

  // Handles Expense Modal
  const handleExpenseOpen = () => {
    setIsExpenseModal(true);
  };
  const handleExpenseClose = () => {
    setIsExpenseModal(false);
  };

  //Handles Delete Button on Expense
  const handleDelete = async expense_id => {
    const reqBody = { expense_id };
    try {
      const response = await fetch('api/expense', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody),
      });
      getExpenses();
    } catch (error) {
      console.log('error in getting expenses: ', error);
    }
  };

  //get all expenses
  const getExpenses = async () => {
    try {
      const response = await fetch(`api/expense`);
      const expenses = await response.json();
      console.log('expense', expenses);
      setExpenses(expenses);
      const totalExp = [0,0,0,0,0,0,0,0];
      expenses.forEach((el) => {
        
        if(el['_category_id'] === 1) totalExp[0] += parseInt(el['amount']);
        if(el['_category_id'] === 2) totalExp[1] += parseInt(el['amount']);
        if(el['_category_id'] === 8) totalExp[2] += parseInt(el['amount']);
        if(el['_category_id'] === 5) totalExp[3] += parseInt(el['amount']);
        if(el['_category_id'] === 3) totalExp[4] += parseInt(el['amount']);
        if(el['_category_id'] === 4) totalExp[5] += parseInt(el['amount']);
        if(el['_category_id'] === 6) totalExp[6] += parseInt(el['amount']);
        if(el['_category_id'] === 7) totalExp[7] += parseInt(el['amount']);
      })
      console.log("totalspend", totalExp)
      setTotalSpend(totalExp)
      
    } catch (error) {
      console.log('error in getting expenses: ', error);
    }
  };

  const getBudget = async () => {
    try {
      const response = await fetch(`api/budget`);
      const budget = await response.json();
      console.log('budget', budget);

      const budgetArr = [
        budget[0].housing,
        budget[0].utilities,
        budget[0].food,
        budget[0].shopping,
        budget[0].transport,
        budget[0].debt,
        budget[0].entertainment,
        budget[0].misc,
      ];
      console.log('budgetarr', budgetArr);
      setBudget(budgetArr);
      setIncome(budget[0].income);
      setUsername(budget[0].username);
    } catch (error) {
      console.log('error in getting expenses: ', error);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-200-500 to-white-500'>
      <HeaderBar
        handleUserOpen={handleUserOpen}
        username={username}
        budget={budget}
      />
      <UserModal
        isOpen={isUserModal}
        onClose={handleUserClose}
        budget={budget}
        savedIncome={income}
        userID={userID}
        getExpenses={getExpenses}
      />
      <TopBar handleExpenseOpen={handleExpenseOpen} />
      <ExpenseModal
        isOpen={isExpenseModal}
        onClose={handleExpenseClose}
        getExpenses={getExpenses}
        userID={userID}
      />

      {/* Header Bar */}
      {/* <HeaderBar></HeaderBar> */}
      <div className='flex'>
        <Expenses handleDelete={handleDelete} expenses={expenses} />
        <PieChartArea
          chartData={chartData}
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

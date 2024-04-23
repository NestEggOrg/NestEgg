import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import Expenses from './Expenses';

const testExpenses = [
  { title: 'TestTitle', category: 'home', cost: 150, date: '04/01/2024' },
  { title: 'TestTitle2', category: 'home', cost: 250, date: '04/02/2024' },
];

const HomePage = () => {
  const [expenses, setExpenses] = useState(testExpenses);

  return (
    <div className='min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-200-500 to-white-500'>
      HomePage
      {/* Header Bar */}
      {/* <HeaderBar></HeaderBar> */}
      <div>
        <Expenses expenses={expenses} />
      </div>
      {/* TopBar */}
      {/*  */}
      {/* Pie Chart */}
    </div>
  );
};

export default HomePage;

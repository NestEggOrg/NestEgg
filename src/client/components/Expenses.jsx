import React, { useState } from 'react';
import Expense from './Expense';

const Expenses = ({ expenses }) => {
  const expenseList = [];

    expenses.forEach(ex => {
    expenseList.push(
    <Expense
      title={ex.title}
      category={ex.category}
      cost={ex.cost}
      date={ex.date}
    />
    )})



  return (
  <div className="border-2 border-black w-1/2 ml-5">
    <div className="border"><Expense
      title="Title"
      category="Category"
      cost="Cost"
      date="Date"
      >
    </Expense></div>
    
   {expenseList}
  </div>
  )
};

export default Expenses;

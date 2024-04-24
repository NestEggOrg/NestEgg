import React, { useState } from 'react';
import Expense from './Expense';

const categories = {
  1: 'Housing', 
  2: 'Utilities', 
  3: 'Transport',
  4: 'Debt', 
  5: 'Shopping', 
  6: 'Entertainment', 
  7: 'Miscellaneous',
  8: 'Food'
}

const Expenses = ({ expenses, handleDelete }) => {
  const expenseList = [];

    expenses.forEach(ex => {
    expenseList.unshift(
    <Expense
      id={ex.expense_id}
      title={ex.title}
      category={categories[ex._category_id]}
      cost={ex.amount}
      date={ex.date.toString().slice(0,10)}
      handleDelete={handleDelete}
    />
    )})



  return (
  <div className=" w-2/3 mt-10 ml-5">
    <div className=" grid grid-cols-4 bg-slate-300 shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-1 ml-1 mr-1" >
   <div>Title</div>
   <div>Category</div>
   <div>Cost</div>
   <div>Date</div>
  </div>
    
   {expenseList}
  </div>
  )
};

export default Expenses;

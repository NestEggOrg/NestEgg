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
  <div className=" w-2/3 mt-10 ml-5">
    <div className="grid grid-cols-4 bg-slate-300 shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-1 ml-1 mr-1" >
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

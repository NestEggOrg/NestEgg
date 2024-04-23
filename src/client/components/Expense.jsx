import React, { useState } from 'react';

const Expense = ({ title, category, cost, date }) => {
  
  return (
  <div className="grid grid-cols-4 bg-white shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-1 ml-1 mr-1" >
   <div>{title}</div>
   <div>{category}</div>
   <div>{cost}</div>
   <div>{date}</div>
  </div>
  )
};

export default Expense;

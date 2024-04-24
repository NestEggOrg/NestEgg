import React, { useState } from 'react';

const Expense = ({ title, category, cost, date, handleDelete, id}) => {
  
  return (
  <div className="grid grid-cols-4 bg-white shadow-md rounded px-8 pt-2 pb-2 mb-1 mt-1 ml-1 mr-1" >
   <div>{title}</div>
   <div>{category}</div>
   <div>${cost}</div>
   <div className='flex justify-between'>{date}<button onClick={()=>handleDelete(id)} className="bg-slate-300 hover:bg-red-500 text-black font-bold py-1 px-4 w-3 h-5 rounded-full flex justify-self-end"><div className='-mt-3 -ml-1'>_</div></button></div>
   
  </div>
  )
};

export default Expense;

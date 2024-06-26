import React, { useState } from 'react';

const TopBar = ({ handleExpenseOpen }) => {
  return (
    <div className='flex border-b-0 border-neutral-950'>
      <button
        onClick={handleExpenseOpen}
        className='border-2 border-neutral-950 rounded-xl bg-gray-300 p-2 m-2 '
      >
        Add New Expense
      </button>
      {/* <button className='border-2 border-neutral-950 rounded-xl bg-gray-300 p-2 m-2 '>
        Expenses
      </button> */}
    </div>
  );
};

export default TopBar;

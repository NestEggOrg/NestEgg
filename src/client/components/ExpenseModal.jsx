import React from 'react';

const ExpenseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;



  return (
    <div

      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          height: 500,
          width: 400,
          margin: 'auto',
          padding: '2%',
          border: '2px solid #000',
          borderRadius: '10px',
          boxShadow: '2px solid black',
        }}
      >
        <button onClick = {onClose}>X</button>

        <div>
          <h1 className='pl-6 text-4xl'>Add New Expense</h1>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 px-4 py-5"> {/* Adds spacing between elements and padding to the form */}
          <div>
            <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name:</label>
            <input type='text' id='name' name='name' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>

          <div>
            <label htmlFor='description' className="block text-sm font-medium text-gray-700">Description:</label>
            <input type='text' id='description' name='description' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          
          <div>
            <label htmlFor='amount' className="block text-sm font-medium text-gray-700">Amount:</label>
            <input type='number' id='amount' name='amount' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          
          <div>
            <label htmlFor='date' className="block text-sm font-medium text-gray-700">Date:</label>
            <input type='date' id='date' name='date' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          
          <div className="flex justify-end"> 
            <input
              type='submit'
              value='Submit'
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseModal;

import React from 'react';

const UserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  const handleBudgetCalculation = () => {
    console.log()
  }

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
          height: 700,
          width: 400,
          margin: 'auto',
          padding: '2%',
          border: '2px solid #000',
          borderRadius: '10px',
          boxShadow: '2px solid black',
        }}
      >
        <button onClick = {onClose}>X</button>

        <form onSubmit={() => {} }>
          <h1 className='text-2xl'>Income</h1>

          <div>
              <label htmlFor='income' className="block text-sm font-medium text-gray-700">Monthly Income:</label>
              <input type='number' id='income' name='income' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>

          <br/>

          <h1 className='text-2xl'>Budget Goal</h1>

          <div className="flex flex-wrap gap-x-2 ">
            <div>
                <label htmlFor='housing' className="block text-sm font-medium text-gray-700">Housing:</label>
                <input type='number' id='housing' name='housing' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='utilities' className="block text-sm font-medium text-gray-700">Utilities:</label>
                <input type='number' id='utilities' name='utilities' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='food' className="block text-sm font-medium text-gray-700">Food:</label>
                <input type='number' id='food' name='food' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='shopping' className="block text-sm font-medium text-gray-700">Shopping:</label>
                <input type='number' id='shopping' name='shopping' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='Transport' className="block text-sm font-medium text-gray-700">Transport:</label>
                <input type='number' id='Transport' name='Transport' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='Debt' className="block text-sm font-medium text-gray-700">Debt:</label>
                <input type='number' id='Debt' name='Debt' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='Entertainment' className="block text-sm font-medium text-gray-700">Entertainment:</label>
                <input type='number' id='Entertainment' name='Entertainment' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div>
                <label htmlFor='misc' className="block text-sm font-medium text-gray-700">Misc:</label>
                <input type='number' id='misc' name='misc' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>

            <div className='m-1'>
              <h1>Total Income Remaining: </h1>
              <h2></h2>
            </div>

          </div>

        </form>
      </div>
    </div>
  );
};

export default UserModal;

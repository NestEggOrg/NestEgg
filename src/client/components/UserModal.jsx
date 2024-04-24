import React, { useEffect } from 'react';
import { useState } from 'react';
const UserModal = ({
  isOpen,
  onClose,
  budget,
  savedIncome,
  getExpenses,
  userID,
}) => {
  if (!isOpen) return null;

  const [income, setIncome] = useState(savedIncome);

  const [housing, setHousing] = useState(budget[0]);
  const [utilities, setUtilities] = useState(budget[1]);
  const [food, setFood] = useState(budget[2]);
  const [shopping, setShopping] = useState(budget[3]);
  const [transport, setTransport] = useState(budget[4]);
  const [debt, setDebt] = useState(budget[5]);
  const [entertainment, setEntertainment] = useState(budget[6]);
  const [misc, setMisc] = useState(budget[7]);

  const [leftover, setLeftover] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    const reqBody = {
      income,
      housing,
      utilities,
      food,
      shopping,
      transport,
      debt,
      entertainment,
      misc,
    };
    console.log(reqBody);
    try {
      const response = await fetch('/api/budget', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody),
      });
      getExpenses();
    } catch (error) {
      console.log('error in updating budget: ', error);
    }
  };

  const handleIncome = e => {
    setIncome(e.target.value);
  };

  const handleHousing = e => {
    setHousing(e.target.value);
  };

  const handleUtilities = e => {
    setUtilities(e.target.value);
  };

  const handleFood = e => {
    setFood(e.target.value);
  };

  const handleShopping = e => {
    setShopping(e.target.value);
  };

  const handleTransport = e => {
    setTransport(e.target.value);
  };

  const handleDebt = e => {
    setDebt(e.target.value);
  };

  const handleEntertainment = e => {
    setEntertainment(e.target.value);
  };

  const handleMisc = e => {
    setMisc(e.target.value);
  };

  useEffect(() => {
    setLeftover(
      income -
        housing -
        utilities -
        food -
        shopping -
        transport -
        debt -
        entertainment -
        misc,
    );
  }, [
    income,
    housing,
    utilities,
    food,
    shopping,
    transport,
    debt,
    entertainment,
    misc,
  ]);

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
          height: 620,
          width: 480,
          margin: 'auto',
          padding: '2%',
          border: '2px solid #000',
          borderRadius: '10px',
          boxShadow: '2px solid black',
        }}
      >
        <button onClick={onClose}>X</button>

        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <h1 className='text-2xl'>Income</h1>

          <div>
            <label
              htmlFor='income'
              className='block text-sm font-medium text-gray-700'
            >
              Monthly Income:
            </label>
            <input
              value={income}
              onChange={e => handleIncome(e)}
              type='number'
              id='income'
              name='income'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>

          <br />

          <h1 className='text-2xl'>Budget Goal</h1>

          <div className='flex flex-wrap gap-x-2 '>
            <div>
              <label
                htmlFor='housing'
                className='block text-sm font-medium text-gray-700'
              >
                Housing:
              </label>
              <input
                value={housing}
                onChange={e => handleHousing(e)}
                type='number'
                id='housing'
                name='housing'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='utilities'
                className='block text-sm font-medium text-gray-700'
              >
                Utilities:
              </label>
              <input
                value={utilities}
                onChange={e => handleUtilities(e)}
                type='number'
                id='utilities'
                name='utilities'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='food'
                className='block text-sm font-medium text-gray-700'
              >
                Food:
              </label>
              <input
                value={food}
                onChange={e => handleFood(e)}
                type='number'
                id='food'
                name='food'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='shopping'
                className='block text-sm font-medium text-gray-700'
              >
                Shopping:
              </label>
              <input
                value={shopping}
                onChange={e => handleShopping(e)}
                type='number'
                id='shopping'
                name='shopping'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='Transport'
                className='block text-sm font-medium text-gray-700'
              >
                Transport:
              </label>
              <input
                value={transport}
                onChange={e => handleTransport(e)}
                type='number'
                id='Transport'
                name='Transport'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='Debt'
                className='block text-sm font-medium text-gray-700'
              >
                Debt:
              </label>
              <input
                value={debt}
                onChange={e => handleDebt(e)}
                type='number'
                id='Debt'
                name='Debt'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='Entertainment'
                className='block text-sm font-medium text-gray-700'
              >
                Entertainment:
              </label>
              <input
                value={entertainment}
                onChange={e => handleEntertainment(e)}
                type='number'
                id='Entertainment'
                name='Entertainment'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div>
              <label
                htmlFor='misc'
                className='block text-sm font-medium text-gray-700'
              >
                Misc:
              </label>
              <input
                value={misc}
                onChange={e => handleMisc(e)}
                type='number'
                id='misc'
                name='misc'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='m-1'>
              <h1>Total Income Remaining: </h1>
              <h2>{leftover}</h2>
            </div>
          </div>

          <div className='flex justify-end'>
            <input
              type='submit'
              value='Submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

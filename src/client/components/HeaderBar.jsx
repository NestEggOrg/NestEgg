import React, { useEffect, useState } from 'react';

const HeaderBar = ({ handleUserOpen, username, budget }) => {
  useEffect(() => {
    if (!budget[0]) {
      handleUserOpen();
    }
  }, []);

  const logout = () => {
    window.location.href = ('http://localhost:8080/')
  };

  return (
    <div className='flex justify-between border-b-2 border-neutral-950 '>
      <div className='flex m-5'>
        <svg
          className='w-10 h-10'
          fill='#ffffff'
          viewBox='0 0 32 32'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M16,32C9.319,32,3.883,26.564,3.883,19.884C3.883,13.252,9.122,0,16,0c6.878,0,12.117,13.252,12.117,19.884
          C28.115,26.564,22.68,32,16,32z M16,1.988c-5.336,0-10.129,12.155-10.129,17.896c0,5.585,4.544,10.128,10.129,10.128
          s10.129-4.543,10.129-10.128C26.129,14.143,21.336,1.988,16,1.988z'
          />
        </svg>
        <h1 className='text-4xl'>NestEgg</h1>
      </div>

      <div className='flex'>
        <div className='flex flex-col justify-center '>
          <h1 className='p-3 m-2 text-2xl'>Hello, {username}</h1>
        </div>
        <div className='flex flex-col justify-center '>
          <button
            onClick={handleUserOpen}
            className='p-3 m-2 rounded-xl border-2 border-neutral-950'
          >
            Edit Budget
          </button>
        </div>
        <div className='flex flex-col justify-center '>
          <button
            onClick={logout}
            className='p-3 m-2 rounded-xl border-2 border-neutral-950'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;

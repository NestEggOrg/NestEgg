import React, { useState } from 'react';
import logo from './img/nestEggLogo.png' 
const HeaderBar = () => {

  return (
  <div className='flex justify-between border-2 border-neutral-950 bg-yellow-500'>
    <div className='flex m-5'>
      <img className='w-10' src={logo}/>
      <h1 className='text-4xl'>NestEgg</h1>
    </div>

    <div className='flex flex-col justify-center '>
      <button className='p-3 m-2 rounded-xl border-2 border-neutral-950'>
        Username
      </button>
    </div>
  </div>
  )
};

export default HeaderBar;

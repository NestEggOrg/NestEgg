import { Result } from 'postcss';
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    if (!username || !password) {
      return alert('username and password feilds must be not be empty')
    }
    else {
      e.preventDefault();
    fetch('/auth/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    })
    .then(res =>  res.json())
    .then((res) => {
      if (res[0] === false){
        alert(res[1]); 
      }
      else{
        navigate('/home')
      }
      }
    )
    .catch((err)=>{
      console.log(err)
    })
    }
    
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-200 to-white-500'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign in
          </button>
          <Link to='/signup'><button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Sign up
          </button> 
          </Link>
        </div>
        <div className='flex items-center justify-center text-sm mt-4'>
          <a
            href='#'
            className='font-medium text-purple-600 hover:text-purple-500'
          >
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

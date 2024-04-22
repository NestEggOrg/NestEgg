import React from 'react';

import NavBar from './Containers/NavBar';
import LogIn from './Containers/LogIn';
import Home from './Containers/Home';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div id='app'>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

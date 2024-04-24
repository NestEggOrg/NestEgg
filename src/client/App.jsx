import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp'; 

const isAuthenticated = () => {
  // Check if user is authenticated
  return true;
};

const ProtectedRoute = () => {
  // Add Protected Route for login
};

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

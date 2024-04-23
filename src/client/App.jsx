import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import TestComp from './components/TestComp';

const isAuthenticated = () => {
  // Check if user is authenticated
  return true;
};

const ProtectedRoute = () => {
  // Add Protected Route for login
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/test' element={<TestComp />} />
        {/* <ProtectedRoute></ProtectedRoute> */}
      </Routes>
    </Router>
  );
};

export default App;

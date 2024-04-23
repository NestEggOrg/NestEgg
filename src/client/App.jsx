import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';

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
        <Route path='/l' element={<Login />} />
        {/* <ProtectedRoute></ProtectedRoute> */}
      </Routes>
    </Router>
  );
};

export default App;

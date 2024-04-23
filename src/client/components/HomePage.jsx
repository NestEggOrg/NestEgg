import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import TopBar from './TopBar';
import UserModal from './UserModal';
import ExpenseModal from './ExpenseModal';


const HomePage = () => {
  const [isUserModal, setIsUserModal] = useState(false)
  const [isExpenseModal, setIsExpenseModal] = useState(false)

  // Handles User Modal 
    const handleUserOpen = () => {
      setIsUserModal(true)
    }
    const handleUserClose = () => {
      setIsUserModal(false)
    }

  // Handles Expense Modal
    const handleExpenseOpen = () => {
      setIsExpenseModal(true)
    }
    const handleExpenseClose = () => {
      setIsExpenseModal(false)
    }

  return (
    <div>
      {/* Header Bar */}
      <HeaderBar handleUserOpen={handleUserOpen}/>
        <UserModal isOpen={isUserModal} onClose = {handleUserClose}/>
      <TopBar handleExpenseOpen={handleExpenseOpen}/>
        <ExpenseModal isOpen={isExpenseModal} onClose={handleExpenseClose}/>
      {/* Pie Chart */}


    </div>
  );
};

export default HomePage;

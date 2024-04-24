const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const budgetController = require('../controllers/budgetController')

//retrieves all expenses from a database from a given user ID
router.get('/expense', expenseController.getAllExpenses, (req, res) => {
  return res.status(200).json(res.locals.expenses);
})

//adds a new expense to the database
router.post('/expense', expenseController.createExpense, (req, res) => {
  return res.sendStatus(200);
})

//deletes an expense by ID
router.delete('/expense', expenseController.deleteExpense, (req, res) => {
  return res.sendStatus(200);
})

//gets all budgets by user ID
router.get('/budget', budgetController.getAllBudgets, (req, res) => {
  return res.status(200).json(res.locals.budgets);
})

//creates a budget tied to user ID, no return value
router.get('/budget', budgetController.createBudget, (req, res) => {
  return res.status(200);
})

//updates an existing budget by ID, no return value
router.put('/budget', budgetController.updateBudget, (req, res) => {
  return res.status(200);
})
module.exports = router;
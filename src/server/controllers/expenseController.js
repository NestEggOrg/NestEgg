const db = require('../models/dbModels');


const expenseController = {
  getAllExpenses(req, res, next){
    
    const query = 'SELECT * FROM '
    db.query(query)
  },
  createExpense(req, res, next){

  },
  updateExpense(req, res, next){

  },
  deleteExpense(req, res, next){

  }
}
module.exports = expenseController;
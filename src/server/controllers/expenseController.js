const db = require('../models/dbModels');


const expenseController = {
  getAllExpenses(req, res, next){
    const { user_id } = req.body;
    const query = `SELECT * FROM expenses WHERE _user_id = ${user_id}`
    db.query(query)
      .then(data => {
        res.locals.expenses = data.rows; //not able to test this yet, verify that data.rows is corect when you use it
        return next()
      })
      .catch(err => {
        next({
          log: `Error in expenseController.getAllExpenses : ${err}`,
          message: `An error occurred while fetching expenses: ${err}`
        })
      })
  },
  createExpense(req, res, next){
    const { user_id } = req.body;
    const query = 'INSERT INTO expenses'
  },
  updateExpense(req, res, next){

  },
  deleteExpense(req, res, next){

  }
}
module.exports = expenseController;
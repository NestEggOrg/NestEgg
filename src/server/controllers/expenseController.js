const db = require('../models/dbModels');

const expenseController = {
  getAllExpenses(req, res, next) {
    const { user_id } = req.params;
    const query = `SELECT * FROM expenses WHERE _user_id = ${user_id}`;
    db.query(query)
      .then(data => {
        res.locals.expenses = data.rows; //not able to test this yet, verify that data.rows is corect when you use it
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in expenseController.getAllExpenses : ${err}`,
          message: `An error occurred while fetching expenses: ${err}`,
        });
      });
  },
  createExpense(req, res, next) {
    const { _user_id, _category_id, amount, title, description, date } =
      req.body;
    const query = `INSERT INTO expenses (_user_id, _category_id, amount, title, description, date) VALUES (${_user_id}, ${_category_id}, ${amount}, ${title}, ${description}, ${date}) RETURNING expense_id`;
    db.query(query)
      .then(data => {
        console.log('Expense created with id: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in expenseController.createExpense: ${err}`,
          message: `An error occured while posting expense: ${err}`,
        });
      });
  },
  updateExpense(req, res, next) {
    //leaving blank for now, stretch feature to update expenses
  },
  deleteExpense(req, res, next) {
    const { expense_id } = req.body;
    const query = `DELETE FROM expenses WHERE expense_id = ${expense_id} RETURNING expense_id`;
    db.query(query)
      .then(data => {
        console.log(`Expense deleted with id: ${data}`);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in expenseController.deleteExpense: ${err}`,
          message: `An error occurred while deleting expense: ${err}`,
        });
      });
  },
};
module.exports = expenseController;

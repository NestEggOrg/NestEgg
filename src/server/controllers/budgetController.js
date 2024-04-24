const db = require('../models/dbModels');

const budgetController = {
  getAllBudgets(req, res, next) {
    const { user_id } = req.body;
    const query = `SELECT * FROM budgets
    LEFT JOIN categories ON budgets._category_id = categories.category_id
    WHERE budgets._user_id = ${user_id}`;
    db.query(query)
      .then(data => {
        res.locals.budgets = data.rows; 
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in budgetController.getAllBudgets : ${err}`,
          message: `An error occurred while fetching budgets: ${err}`,
        });
      });
  },
  createBudget(req, res, next) {
    const { _user_id } = req.body;
    const query = `INSERT INTO budgets (_user_id, _category_id, amount) VALUES (${_user_id}, 1, 0) RETURNING budget_id`;
    db.query(query)
      .then(data => {
        console.log('Budget created with id: ', data);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in budgetController.createBudget: ${err}`,
          message: `An error occured while creating budget: ${err}`,
        });
      });
  },
  updateBudget(req, res, next) {
    const { budget_id } = req.body;
    const query = `UPDATE budgets SET  WHERE budget_id = ${budget_id} RETURNING budget_id`; 
    db.query(query)
      .then(data => {
        console.log(`Budget updated with id: ${data}`);
        return next();
      })
      .catch(err => {
        return next({
          log: `Error in budgetController.updateBudget: ${err}`,
          message: `An error occurred while updating budget: ${err}`,
        });
      });
  },
};
module.exports = budgetController;

const db = require('../models/dbModels');

const budgetController = {
  getAllBudgets(req, res, next) {
    const user_id = req.cookies.sessionCookie;
    const query = `SELECT * FROM users
    WHERE user_id = ${user_id}`;
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
  updateBudget(req, res, next) {
    const {
      income,
      housing,
      utilities,
      transport,
      debt,
      shopping,
      entertainment,
      food,
      misc,
    } = req.body;
    const user_id = req.cookies.sessionCookie;
    const query = `UPDATE users SET income = ${income}, housing = ${housing}, utilities = ${utilities}, transport = ${transport}, debt = ${debt}, shopping = ${shopping}, entertainment = ${entertainment}, food = ${food}, misc = ${misc} WHERE user_id = ${user_id}`;
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

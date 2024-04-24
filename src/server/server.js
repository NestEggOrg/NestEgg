const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const path = require('path');
const PORT = 3000;
const expenseController = require('./controllers/expenseController')

// import auth router 
const authRouter = require('./routers/authRouter')

const db = require('./models/dbModels');
const exp = require('constants');

//parse incoming JSON and form data
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded());


// Routes
// app.get('/example', async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM categories');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });
app.use('/auth', authRouter); 


// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Routes

app.get('/example', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

//retrieves all expenses from a database from a given user ID
app.get('/expense', expenseController.getAllExpenses, (req, res) => {
  return res.status(200).json(res.locals.expenses);
})

//adds a new expense to the database
app.post('/expense', expenseController.createExpense, (req, res) => {
  return res.sendStatus(200);
})

//deletes an expense by ID
app.delete('/expense', expenseController.deleteExpense, (req, res) => {
  return res.sendStatus(200);
})

//catch all before 404 to serve login page
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

//404 catch for unknown routes
app.use((req, res) => {
  return res.sendStatus(404);
});

// Global error handlernpm
app.use((err, req, res, next) => {
  // define defaultErr
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  // Object.assign to overwrite defaultErr with properties from err
  const errorObj = Object.assign(defaultErr, err);
  console.log('We are in the global error handler: ', errorObj.log);
  // respond using errObj status
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

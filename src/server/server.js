const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const userController = require('./controllers/userController');


const db = require('./models/dbModels');

//parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded());

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


// adding route for /signup that directs to userController and sessionController
app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.signUpMessage); 

})

// adding route for /signin that directs to userController and sessionController
app.post('/signin', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.signInMessage); 

})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
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

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
}

module.exports = app;

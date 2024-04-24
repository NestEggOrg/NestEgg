const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const path = require('path');
const PORT = 3000;
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController')



const db = require('./models/dbModels');

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


// adding route for /signup that directs to userController and sessionController
app.post('/signup', userController.createUser, sessionController.startSession, (req, res) => {
  res.status(200).json(res.locals.signUpMessage); 

})

// adding route for /signin that directs to userController and sessionController
app.post('/signin', userController.verifyUser, sessionController.startSession, (req, res) => {
  console.log('cookie', req.cookie)
  res.status(200).json(res.locals.signInMessage); 

})


// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));
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
  console.log('We are in the global error handler: ',err, errorObj.log);
  // respond using errObj status
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

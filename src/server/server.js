const express = require('express');
const app = express();
const path = require('path');
const userController = require('./controllers/userController');
const PORT = 3000;

// console.log(path.join(path.join(__dirname, '../../dist', 'index.html')));

// console.log(path.join(path.join(__dirname, '../../dist', 'index.html')));

//parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.static(path.join(__dirname, '../../dist')));

// Routes
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../../../dist/index.html'));
});

// adding route for /signup that directs to userController and sessionController
app.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.message); 

})

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

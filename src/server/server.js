const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const PORT = 3000;
const userController = require('./controllers/userController');
const authRouter = require('./routers/authRouter');
const apiRouter = require('./routers/apiRouter');
const testRouter = require('./routers/testRouter');

const db = require('./models/dbModels');

//parse incoming JSON and form data
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../../dist')));

// Routes
// Test Router
app.use('/test', testRouter);

// Auth Router
app.use('/auth', authRouter);

//route all /api routes to apiRouter
app.use('/api', apiRouter);

//catch all before 404 to serve login page
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

//404 catch for unknown routes
app.use((req, res) => {
  return res.sendStatus(404);
});

// Global error handler
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

// importing express and creating our router
const express = require('express'); 
const router = express.Router(); 

// import relevant controller 
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController')

// adding route for /signup that directs to userController and sessionController
router.post('/signup', userController.createUser, sessionController.startSession, (req, res) => {
    res.status(200).json(res.locals.signUpMessage);
  })
  
// adding route for /signin that directs to userController and sessionController
router.post('/signin', userController.verifyUser, sessionController.startSession, (req, res) => {
    return res.status(200).json([res.locals.verified, res.locals.signInMessage]);

})



module.exports = router; 
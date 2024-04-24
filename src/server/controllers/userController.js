// imposting database 
const db = require('../models/dbModels'); 

// importing bcrypt 
const bcrypt = require('bcrypt'); 
// defining SALT as global variable
const SALT = 10; 

const userController = { 
/*
create user - when user signs up with a unique username and valid password, obtain username and password from request body, check that username does not exist, 
then add into the database username and hashed password
add user id into res.locals to use in next controller
*/
createUser: async (req, res, next) =>{
    try {
        // deconstruct username and password from req.body 
        const {username, password} = req.body; 
        // check if username already exists and if it does, send 'username already exists' to front-end
        const paramsOne = [username]
        const usernameQuery = "SELECT * from users WHERE username = $1"
        const result = await db.query(usernameQuery, paramsOne)
        if (result.rows.length > 0) {
            res.locals.signUpMessage = 'username already exists'
            res.locals.verified = false; 
        } // if username does not exist the proceed to add the user to the database 
        else {
            // hash the password using bcrypt 
            const hash = await bcrypt.hash(password, SALT); 
            const paramsTwo = [username, hash]
            // add both username and hashed password to the data base 
            const addNewUserQuery = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *"
            const added = await db.query(addNewUserQuery, paramsTwo)
            // save user id in res.locals for use in next controller 
            res.locals.signUpMessage = 'Sign up successful!'
            res.locals.userId = added.rows[0]['user_id'];
            res.locals.verified = true;    
        }
        return next();
    } catch (err) {
        return next({
            log: `Express error handler caught error in createUser middleware: ${err}`,
            status: 500, 
            message: { err: 'An error occured in userController.createUser'} 
        }); 
    }; 
}, 

/*
verify user - obtain username and password from the request body, compare password to hashed and check if username and password combination exists in DB
add user id into res.locals to use in next controller
*/

verifyUser: async(req, res, next) => {
    try {
        // get username and password from req.body
        const {username, password} = req.body; 
        // get matching username and hashed password from database
        const paramsOne = [username]
        const usernameQuery = "SELECT * from users WHERE username = $1"
        const result = await db.query(usernameQuery, paramsOne)
        // if username does not exist return error message 
        if (result.rows.length === 0) {
            res.locals.signInMessage = 'Username and password combination is not recognized'; 
            res.locals.verified =false; 
        }
        else {
            // compare hashed password
            const match = await bcrypt.compare(password, result.rows[0]['password'])
            if (!match){
                res.locals.signInMessage= 'Username and password combination is not recognized'; 
            }
            else{
                res.locals.userId = result.rows[0]['user_id']
                res.locals.signInMessage = 'Sign in successful';
                res.locals.verified = true; 
            }
        }
        return next()
    } 
    catch(err) {
        return next({
            log: `Express error handler caught error in verifyUser middleware: ${err}`,
            status: 500, 
            message: { err: 'An error occured in userController.verifyUser'} 
        }); 

    }
}

};

module.exports = userController; 
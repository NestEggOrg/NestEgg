// importing bcrypt 
const bcrypt = require('bcrypt'); 
// defining SALT as global variable
const SALT = 10; 




const userController = { 
/*
create user - when user signs up with a unique username and valid password
*/
createUser: async (req, res, next) =>{
    try {
        // deconstruct username and password from req.body 
        const {username, password} = req.body; 
        // check if username already exists and if it does, send 'username already exists' to front-end
        const paramsOne = [username]
        const usernameQuery = "SELECT * from users WHERE username = $1"
        const result = await db.query(usernameQuery, paramsOne)
        if (result) {
            res.locals.message = 'username already exists'
        } // if username does not exist the proceed to add the user to the database 
        else {
            // hash the password using bcrypt 
            const hash = await bcrypt.hash(password, SALT); 
            const paramsTwo = [username, hash]
            // add both username and hashed password to the data base 
            const addNewUserQuery = "INSERT INTO users (username, password) VALUES ($1, $2)"
            const added = await db.query(addNewUserQuery, paramsTwo)
            // save user id in res.locals for use in next controller 
            /*NEED TO CONFIRM THIS WITH DB table*/
            res.locals.message = 'Sign up successful!'
            res.locals.userId = added.__id 
            return next(); 
        }
    } catch (err) {
        return next({
            log: `Express error handler caught error in createUser middleware: ${err}`,
            status: 500, 
            message: { err: 'An error occured in userController.createUser'} 
        }); 
    }; 
}

};

module.exports = userController; 
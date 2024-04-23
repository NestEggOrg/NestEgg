
const userController = {}; 

/*
create user - when user signs up with a unique username and valid password
*/
userController.createUser = async (req, res, next) =>{
    // deconstruct username and password from req.body 
    const {username, password} = req.body; 
    // check if username already exists and if it does, send 'username already exists' to front-end
    const params = [username]
    const usernameQuery = "SELECT * from users WHERE username = $1"
    const result = await db.query(usernameQuery, params)



}

module.exports = userController; 
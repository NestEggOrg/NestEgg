// imposting database 
const db = require('../models/dbModels'); 

// define maximum age of a cookie in milliseconds 
const AGE = 30 * 60000 

const sessionController = {
/* when user signs up or logs in successfully create cookie corresponding to user and save it in DB
Other controllers will check if this cookie is valid to verify user is logged in 
cookie will have a life of 30 min 
*/ 
  startSession: async (req, res, next)=> {
    try{
      // get user id from previous controller
    const userId = res.locals.userId; 
    // create cookie to store userId 
    res.cookie('sessionCookie', `${userId}`, {
      httpOnly: true, 
      secure: true,
      SameSite: "None",
      maxAge: AGE,
    })

    // store cookie in database 
    const params = [userId]
    const cookieQuery = `UPDATE users SET session_id = $1, session_expires = now() + INTERVAL '30 minutes' WHERE user_id = $1 RETURNING *`
    const result = await db.query(cookieQuery, params)
    return next()
  } 
  catch(err) {
    return next({
      log: `Express error handler caught error in startSession middleware: ${err}`,
      status: 500, 
      message: { err: 'An error occured in sessionController.startSession'} 
  }); 

  }

}
   
};

module.exports = sessionController;
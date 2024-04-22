const authController = {
  verifyCredentials(req, res, next) {
    const { user, pass } = req.body;
    if (user === 'admin' && pass === 'admin') {
      return next();
    } else {
      return res.status(401).send('unsuccessful login attempt');
    }
  },
  setCookie(req, res, next) {
    res.cookie('token', 'admin', { maxAge: 60000 });
    return next();
  },
  verifyCookie(req, res, next) {
    if (req.cookies.token === 'admin') {
      return next();
    }else{
      res.status(400).json('You must be signed in to view this page');
    }
  },
};

module.exports = authController;


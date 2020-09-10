// const passport = require('passport');
const createError = require('http-errors');
const passport = require('../services/passport')

module.exports = (req, res, next) => {
  try {
    passport.authenticate('local', function(err, user, info) {

      if (err) { return next(err); }
      
      if (!user) {
        res.status(400).send({"error": "Invalid Email or Password"}); 
      }

      req.logIn(user, function(err) {
        if (err) { return next(err); }
        res.status(200).send({"token": "abc@123"});
      });
    })(req, res, next);
  }
  catch (e) {
    res.status(400).send({"error": "Invalid Email or Password"}); 
  }  
}
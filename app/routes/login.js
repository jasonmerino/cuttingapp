var express 			= require('express');
var User 					= require('../models/login');
var router 				= express.Router();
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.route('/login')
	.post(function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      req.flash('error', info.message);
      console.log("no user");
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      console.log("what?");
    });
  })(req, res, next);
});

module.exports = router;
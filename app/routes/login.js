var express 			= require('express');
var router 				= express.Router();
var User          = require('../models/login');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.route('/loggedin')
	.get(function(req, res){
    res.send(req.isAuthenticated() ? req.user : '0');
  });

router.route('/login')
  .post(passport.authenticate('local'), function(req, res) {
    res.send(req.user);
  });

router.route('/logout')
  .post(function(req, res) {
    req.logOut();
    res.send(200);
  });

module.exports = router;
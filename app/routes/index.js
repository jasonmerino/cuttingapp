var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	// res.render('index');
  res.sendfile('./public/index.html');
});

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

module.exports = router;

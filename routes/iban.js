var express = require('express');
var router = express.Router();
var messager = require('../public/javascripts/checker');
var db = require('../db')



router.get('/', function(req, res, next) {
  res.render('iban',{result: ''});
});

router.post('/submit', function(req, res, next) {
  var number = req.body.number;
  var test = new messager(number);
  var result = "";
  if(test.check()) {result = "VALID"} else {result = "INVALID"};

  res.redirect("/iban/display/?valid=" + result)
});

router.get('/display', function(req, res, next) {
    res.render('display',{result:req.query.valid});
  });

module.exports = router;

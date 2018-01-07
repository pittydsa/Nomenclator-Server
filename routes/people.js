var express = require('express');
var router = express.Router();

var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('people', {
    people: db.people
  });
});

router.post('/', function (req, res, next) {
  res.send(JSON.stringify(req.body));
});

module.exports = router;

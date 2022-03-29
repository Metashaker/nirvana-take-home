var express = require('express');
var router = express.Router();
const therapists = require('../dataStore/therapistsStore')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(therapists);
});

module.exports = router;

var express = require('express');
var router = express.Router();
const therapists = require('../dataStore/therapistsSeed')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(therapists);
});

//should add post method to post therapists, but isn't a requirement, so not focusing on that

module.exports = router;

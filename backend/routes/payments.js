var express = require('express');
var router = express.Router();

/* GET payments listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a payment');
});

router.post('/', function(req, res, next) {
  res.send('respond with a successful payment created');
});

module.exports = router;
var express = require('express');
var router = express.Router();
const payments = require('../dataStore/paymentsStore')
/* GET payments listing. */
router.get('/', function(req, res, next) {
  res.send(payments);
});

router.post('/', function(req, res, next) {
  res.send('respond with a successful payment created');
});

module.exports = router;
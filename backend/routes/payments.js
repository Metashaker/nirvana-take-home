var express = require('express');
var router = express.Router();
const payments = require('../dataStore/paymentsSeed')
const save = require('../utils/save')
/* GET payments listing. */
router.get('/', function(req, res, next) {
  res.send(payments);
});

router.post('/', function(req, res, next) {
  const { therapistSessionId, patientName, date, totalAmount, status } = req.body
  if (!therapistSessionId || !patientName || !date || !totalAmount || !status) {
    res.status(422)
    return new Error('Missing parameters')
    
  }
  const list = save({ therapistSessionId, patientName, date, totalAmount, status },
    payments, 
    __dirname + '/../dataStore/paymentsStore.json')

  res.send(list);
  res.status(200)
});

module.exports = router;
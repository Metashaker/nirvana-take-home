var express = require('express');
var router = express.Router();
const payments = require('../dataStore/paymentsSeed')
const save = require('../utils/save')
const uuid = require('uuid')
/* GET payments listing. */
router.get('/', function(req, res, next) {
  res.send(payments);
});

router.post('/', async function(req, res, next) {
  try {
    const {therapistSessionId, patientName, date, totalAmount, status } = req.body
    const paymentId = uuid.v4()
    if (!therapistSessionId || !patientName || !date || !totalAmount || !status) {
      res.status(422)
      return new Error('Missing parameters')
      
    }
    const list = save({ therapistSessionId, paymentId, patientName, date, totalAmount, status },
      payments, 
      __dirname + '/../dataStore/paymentsStore.json')
  
    res.send(list);
    res.status(200)
  } catch(e){
    console.error(e)
    //logging would happen here
  }
});

module.exports = router;
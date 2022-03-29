var express = require('express');
var router = express.Router();
const payments = require('../dataStore/paymentsSeed')
const save = require('../utils/save')
const uuid = require('uuid')
/* GET payments listing. */
router.get('/', function(req, res, next) {
  //todo: get from file system
  res.send(payments);
});

router.post('/', async function(req, res, next) {
  try {
    const {therapistSessionId, patientName, date, totalAmount, cardNumber, expirationDate: cardExpirationDate, cvv: cardCVV } = req.body
    const paymentId = uuid.v4()
    const paymentData = {cardNumber, cardExpirationDate, cardCVV }

    if (!therapistSessionId || !patientName || !date || !totalAmount || !cardNumber || !cardExpirationDate || !cardCVV) {
      res.status(422)
      return new Error('Missing parameters')
      
    }

    const list = save({ therapistSessionId, paymentId, patientName, date, totalAmount, paymentData},
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
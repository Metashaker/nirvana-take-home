const express = require('express');
const uuid = require('uuid')
const fs = require('fs')

const router = express.Router();
const payments = require('../dataStore/paymentsSeed')
const save = require('../utils/save')
/* GET payments listing. */
const dataStorePath = __dirname + '/../dataStore/paymentsStore.json'
router.get('/', function(req, res, next) {
  const data = fs.readFileSync(dataStorePath); 
  //todo: memoize the data and add request scoping
  res.send(data);
});

router.post('/', async function(req, res, next) {
  try {
    const {therapistSessionId, patientName, totalAmount, cardNumber, expirationDate: cardExpirationDate, cvv: cardCVV } = req.body
    const paymentId = uuid.v4()
    const date = new Date().toISOString()
    const status = 'pending' //call to stripe would go here to charge on an event-driven manner with correct error handling
    const paymentData = {cardNumber, cardExpirationDate, cardCVV }

    if (!therapistSessionId || !patientName || !totalAmount || !cardNumber || !cardExpirationDate || !cardCVV) {
      res.status(422)
      return new Error('Missing parameters')
      
    }

    const list = save({ therapistSessionId, paymentId, patientName, date, totalAmount, paymentData, status},
      payments, 
      dataStorePath)
  
    res.send(list);
    res.status(200)
  } catch(e){
    console.error(e)
    //logging would happen here
  }
});

module.exports = router;
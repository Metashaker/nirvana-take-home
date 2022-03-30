var express = require('express');
const uuid = require('uuid')
const fs = require('fs')
const jsonParser = require('body-parser').json()
const router = express.Router();
const save = require('../utils/save')
const therapistSessions= require('../dataStore/therapistsSessionsSeed');
const dataStorePath = __dirname + '/../dataStore/therapistsSessionsStore.json'
/* GET therapistSessions listing. */
router.get('/', async function(req, res, next) {
  //maybe memoize and add scoped requests for the memoized data
  await fs.promises.readFile(dataStorePath, 'utf-8', async (err, data) => {
    if (err) {
      throw err
    }
    return data
  }).then(data => {
    res.send(data)
    res.status(200)
  })
});


router.post('/', jsonParser, function(req, res, next) {
  try {
    const {patientName, date, fee } = req.body
    const therapistSessionId = uuid.v4()
    const status = 'pending'
    const therapistId = 1
    //in an ideal world therapistId would be added for multi-tenancy
    //if I had more time, the totalAmount would be based off the sum of the payments that match the therapistSessionId
    if (!patientName || !date || !fee) {
      res.status(422)
      return new Error('Missing parameters')
    }
    if (fee <= 0) {
      res.status(500)
      return new Error('Enter a fee greater than 0')
    }
    const list = save({therapistId, therapistSessionId , patientName, date, status, fee },
      therapistSessions, 
      dataStorePath)
  
    res.send(list);
    res.status(200)
  } catch(e){
    console.error(e)
    //logging would happen here
  }
});

module.exports = router;

var express = require('express');
const uuid = require('uuid')
const fs = require('fs')

const router = express.Router();
const save = require('../utils/save')
const therapistSessions= require('../dataStore/therapistsSessionsSeed');
const dataStorePath = __dirname + '/../dataStore/therapistsSessionsStore.json'
/* GET therapistSessions listing. */
router.get('/', async function(req, res, next) {
  //maybe memoize and add scoped requests for the memoized data
  const data = fs.readFileSync(dataStorePath); 
  res.send(data);
});


router.post('/', function(req, res, next) {
  try {
    const {therapistId, patientName, totalAmount, status, date } = req.body
    const therapistSessionId = uuid.v4()
    //if I had more time, the totalAmount would be based off the sum of the payments that match the therapistSessionId
    if (!therapistId || !patientName || !totalAmount || !status || !date) {
      res.status(422)
      return new Error('Missing parameters')
      
    }
    const list = save({therapistId, therapistSessionId , patientName, date, totalAmount, status },
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

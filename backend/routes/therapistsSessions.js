var express = require('express');
const uuid = require('uuid')
const router = express.Router();
const save = require('../utils/save')
const therapistSessions= require('../dataStore/therapistsSessionsSeed');

/* GET therapistSessions listing. */
router.get('/', async function(req, res, next) {
  //maybe memoize and add scoped requests for the memoized data
  //todo: get from file system
  res.send(therapistSessions);
});


router.post('/', function(req, res, next) {
  try {
    const {therapistId, patientName, date, totalAmount, status } = req.body
    const therapistSessionId = uuid.v4()
    if (!therapistId || !patientName || !date || !totalAmount || !status) {
      res.status(422)
      return new Error('Missing parameters')
      
    }
    const list = save({therapistId, therapistSessionId, paymentId, patientName, date, totalAmount, status },
      therapistSessions, 
      __dirname + '/../dataStore/therapistsSessionsStore.json')
  
    res.send(list);
    res.status(200)
  } catch(e){
    console.error(e)
    //logging would happen here
  }

  const list = save({},therapistSessions , __dirname + '/../dataStore/therapistsSessionsStore.json')
  res.send(list);
});

module.exports = router;

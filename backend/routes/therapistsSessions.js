var express = require('express');
const router = express.Router();
const therapistSessions= require('../dataStore/therapistsSessionsStore');

/* GET therapistSessions listing. */
router.get('/', async function(req, res, next) {
  therapistSessions.push({})
  //maybe memoize and add scoped requests for the memoized data
  res.send(therapistSessions);
});

router.post('/', function(req, res, next) {
  res.send('respond with a created therapist session');
});

module.exports = router;
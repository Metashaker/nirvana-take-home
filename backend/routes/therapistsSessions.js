var express = require('express');
const router = express.Router();
const save = require('../utils/save')
const therapistSessions= require('../dataStore/therapistsSessionsSeed');

/* GET therapistSessions listing. */
router.get('/', async function(req, res, next) {
  //maybe memoize and add scoped requests for the memoized data
  res.send(therapistSessions);
});


router.post('/', function(req, res, next) {
  const list = save({},therapistSessions , __dirname + '/../dataStore/therapistsSessionsStore.json')
  res.send(list);
});

module.exports = router;

var express = require('express');
const router = express.Router();

/* GET therapistSessions listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a therapist sessions');
});

router.post('/', function(req, res, next) {
  res.send('respond with a created therapist session');
});

module.exports = router;
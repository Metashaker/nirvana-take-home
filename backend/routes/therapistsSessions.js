var express = require('express');
var router = express.Router();

/* GET therapistSessions listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a therapist sessions');
});

module.exports = router;
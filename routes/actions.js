var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('action');
});

router.get('/reading', function(req, res, next) {
  res.send('set reading to x');
});

module.exports = router;

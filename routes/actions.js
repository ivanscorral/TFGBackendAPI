var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('action');
});
router.get('/reading', function(req, res, next) {
  res.send('');
});


/**
 * Endpoint = /reading/{reading}
 * POST
 * Parameters:
 * - token: Sensor token id
 * - reading (in URI) - Temperature reading5
 */
router.post('/reading/:reading', function(req, res, next) {
  let reading = req.params.reading;
  let token = req.query.token;
  res.send('set reading to ' + reading);
});

module.exports = router;

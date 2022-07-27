var express = require('express');
var router = express.Router();
let uuid = require('uuid');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('action');
});
/**
 * Endpoint = /reading/get/:installation_id
 * POST
 * Parameters:
 * - installation_id (in URI) - Installation id
 * Returns: Last recorded value, position, and id of every sensor in that installation
 */
router.get('/reading/get/:installation_id', function(req, res, next) {
  let installation_id = req.params.installation_id;
  res.send('{"installation_id" : + '+ installation_id + ', sensors : [{"sensor_id" : "1", "temp" : "22","posX" : "23", "posY" : "243"}, {"sensor_id" : "2", "temp" : "21","posX" : "234", "posY" : "311"}]}');
});
/**
 * Endpoint = /reading/get/:installation_id
 * POST
 * Parameters:
 * - User token in Authentification
 * Returns: 
 * - installation uuid.
 */
 router.get('/installation/new', function(req, res, next) {
  //TODO Implement auth
  res.send(uuid.v4);
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

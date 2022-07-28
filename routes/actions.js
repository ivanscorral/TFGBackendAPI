var express = require('express');
var router = express.Router();
let uuid = require('uuid');

/// ENDPOINTS

///GET

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('action');
});

/**
 * Endpoint = /reading/get/{installation_id}
 * GET
 * Parameters:
 * - installation_id (in URI) - Installation id
 * Returns: Last recorded value, position, and id of every sensor in that installation
 */

router.get('/reading/get/:installation_id', function(req, res, next) {
  let installation_id = req.params.installation_id;
  res.send('{"installation_id" : + '+ installation_id + ', sensors : [{"sensor_id" : "1", "temp" : "22","posX" : "23", "posY" : "243"}, {"sensor_id" : "2", "temp" : "21","posX" : "234", "posY" : "311"}]}');
});

/**
 * Endpoint = /reading/get/mock
 * GET
 * Parameters:
 * - none
 * Returns: Last recorded value, position, and id of mock sensors in a mock installation
 */

 router.get('/reading/get/mock', function(req, res, next) {
  res.send('{"installation_id" : + '+ uuid.v4() + ', sensors : [{"sensor_id" : "1", "temp" : "22","posX" : "23", "posY" : "243"}, {"sensor_id" : "2", "temp" : "21","posX" : "234", "posY" : "311"}, {"sensor_id" : "3", "temp" : "24","posX" : "34", "posY" : "11"}, {"sensor_id" : "4", "temp" : "24","posX" : "534", "posY" : "111"}]}');
});
/**
 * Endpoint = /installation/get/mock
 * GET
 * Parameters:
 * - User token in Authentification
 * Returns: 
 * - installation uuid.
 */

 router.get('/installation/get/mock', function(req, res, next) {
  //TODO Implement auth
  res.send(uuid.v4);
});

/**
 * Endpoint = /installation/new
 * POST
 * Parameters:
 * - User token in Authentification
 * Returns: 
 * - installation uuid.
 */

 router.post('/installation/new', function(req, res, next) {
  //TODO Implement auth
  res.send(uuid.v4);
});



///POST

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

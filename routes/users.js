var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/**
 * Endpoint = /register
 * POST
 * Parameters:
 * - email
 * - password
 * Returns: 
 * - user uuid.
 */
router.post('/register', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.pwd;

  //TODO Store these three in DB
  
  res.send('{"user" : "' + uuid.v4() + '"}');
});
/**
 * Endpoint = /link
 * POST
 * Parameters:
 * - sensor_id
 * - user_uuid
 * - installation_id
 * Returns: 
 * - operation result
 */
router.post('/link', function(req, res, next) {
  var user_uuid = req.body.user_id;
  var sensor_id = req.body.sensor_id;
  var installation_id = req.body.installation_id;

  //TODO Store these three in DB
  
  res.send('{"successfully linked}');
});


module.exports = router;

var express = require('express');
var uuid = require('uuid');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('auth');
});
/**
 * Endpoint = /auth/register
 * POST
 * Parameters:
 * - user_id: user id
 * - installation_id - installation id
 * - pos_x = x position of sensor
 * - pos_y = y position of sensor
 * Returns:
 * - user id
 * - sensor uuid
 */
router.post('/register', function(req, res, next) {
  var user_id = req.body.user_id;
  var installation_id = req.body.installation_id;
  var pos_x = req.body.pos_x;
  var pos_y = req.body.pos_x;
  let uuidv4 = uuid.v4();

  //TODO Store these three in DB
  
  res.send('{user_id:' + user_id + '\, sensor_id: ' + uuidv4 + '}');
});

module.exports = router;

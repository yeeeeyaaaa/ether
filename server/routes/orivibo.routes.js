const router = require('express').Router();
const helpers = require('../service/orvibo.service');

router.get('/device', function(req, res) {
  helpers.getDevices(function(device) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(device));
  });
});

router.get('/devices', function(req, res) {
  helpers.getDevices(function(devices) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(devices));
  });
});

router.get('/switch', function(req, res) {
  var params = url.parse(req.url, true).query;
  helpers.changeState(params, function() {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('device ' + params.state));
  });
});

module.exports = router;

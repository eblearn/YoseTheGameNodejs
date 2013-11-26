var express = require('express');
var server = express();

server.get('/ping', function(req, res) {
	require('../challenges/Ping/ping.endpoint')(req, res);
});

module.exports = server;
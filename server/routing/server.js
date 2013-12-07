var express = require('express');
var path = require('path');
var server = express();

server.get('/ping', function(req, res) {
	require('../challenges/Ping/ping.endpoint')(req, res);
});

server.get('/', function(req, res) {
	var aPath = path.resolve (__dirname, '../challenges/Ping/landing_page.html');
	res.sendfile(aPath);
});

module.exports = server;
var http = require('http');
var url = require('url');
var Number = require('./src/Number');

var pingResponse = function(req, res) {
	var number = req.query.number;
	res.setHeader('Content-Type', 'application/json');
    res.send(new Number(number));
 };

module.exports = pingResponse;
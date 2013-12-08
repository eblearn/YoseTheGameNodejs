var http = require('http');
var url = require('url');
var Number = require('./src/Number');

var pingResponse = function(req, res) {
	var numbers = [].concat(req.query.number);
	var decomposedNumbers = []
	
	for (i=0; i < numbers.length; i++) {
		decomposedNumbers.push(new Number(numbers[i]))
	}
	
	res.setHeader('Content-Type', 'application/json');
	
	if (numbers.length > 1) {
		res.send(decomposedNumbers);
	} else {
		res.send(decomposedNumbers[0]);
	}
    
 };

module.exports = pingResponse;
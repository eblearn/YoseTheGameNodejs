var express = require('express');
var path = require("path"); 
var fs = require('fs');
var querystring = require('querystring');
var Number = require('./Number.js');

var app = express();
 
app.get('/ping', function(req, res) {
	
	res.setHeader('Content-Type', 'application/json');
	res.send({alive : true});
	
});

app.get('/primeFactors', function(req, res) {

	var numbersToDecompose = [].concat(req.query.number);
	var decomposedNumbers = [];
		
	for (var i = 0; i < numbersToDecompose.length; i++) {
		decomposedNumbers.push(new Number(numbersToDecompose[i]))
	}
	
	res.setHeader('Content-Type', 'application/json');
	
	if (numbersToDecompose.length == 1) {
		
		res.send(
			decomposedNumbers[0]
		);
				
	} else {
		
		res.send(decomposedNumbers);
		
	}
	
	res.end();
});

app.get('/', function(req, res) {
	
	serveRootFile(res);
	
});

app.get('/primeFactors/ui', function(req, res) {
	
	servePrimeFactors(res);
	
});

app.get('/minesweeper', function(req, res) {
	
	serveMinesweeper(res);
	
});

function serveRootFile(res) {
		
	res.writeHeader(200, {"Content-Type": "text/html"});	
	res.write(fs.readFileSync(__dirname + "\\sharePingChallenge.html" ));
	res.end();
	
}

function serveMinesweeper(res) {
	
	res.writeHeader(200, {"Content-Type": "text/html"});	
	res.write(fs.readFileSync(__dirname + "\\minesweeper.html" ));
	res.end();
	
}

function servePrimeFactors(res) {
	
	res.writeHeader(200, {"Content-Type": "text/html"});	
	res.write(fs.readFileSync(__dirname + "\\primeFactors.html" ));
	res.end();
	
}

app.listen(3000);
console.log('Listening on port 3000...');
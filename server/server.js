//My web server's external ip address 184.145.205.202:3000

var express = require('express');
var path = require("path"); 
var fs = require('fs');
var querystring = require('querystring');
 
var app = express();
app.use('public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));

app.get('/', function(req, res) {
	
	serveRootFile(res);
	
});
 
app.get('/ping', function(req, res) {
	
	res.setHeader('Content-Type', 'application/json');
	res.send({alive : true});
	
});

app.get('/primeFactors', function(req, res) {
	
	var numbersToDecompose = [].concat(req.query.number);
	res.setHeader('Content-Type', 'application/json');
		
	if (numbersToDecompose.length == 1) {
					
		if (isAValidNumber(numbersToDecompose[0])) {
			var decomposition = decomposeNumberWithPrimeFactors(numbersToDecompose[0]);
			res.send(
				{
					number : numbersToDecompose[0],
					decomposition : decomposition
				}
				
			);
		} else {
			var errorType = getErrorType(numbersToDecompose[0])
			res.send(
				{
					number : numbersToDecompose[0],
					error : errorType
				}
			);
		}
		
		res.end();
		
	} else if (numbersToDecompose.length > 1) {
		
		var decomposedNumbers = [];
		
		for (var i = 0; i < numbersToDecompose.length; i++) {
			
			if (isAValidNumber(numbersToDecompose[i])) {
				var decomposition = decomposeNumberWithPrimeFactors(numbersToDecompose[i]);
				decomposedNumbers.push(
					{
						number : numbersToDecompose[i],
						decomposition : decomposition
					}
					
				);
			} else {
				var errorType = getErrorType(numbersToDecompose[i])
				decomposedNumbers.push(
					{
						number : numbersToDecompose[i],
						error : errorType
					}
				);
			}
		}
		
		res.send(decomposedNumbers);
		res.end();
	}
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

function decomposeNumberWithPrimeFactors(numberToDecompose) {
	
	var decomposition = [];
	var factor = 2;
		
	while (factor <= numberToDecompose) {
		while (numberToDecompose % factor == 0) {
			decomposition.push(factor);
			numberToDecompose = numberToDecompose / factor;
		}
		factor++;
	}
		
	return decomposition;
	
}

function isAValidNumber(checkNumber) {
	return isANumber(checkNumber) && !isABigNumber(checkNumber);
}

function isANumber(checkNumber) {
	return !isNaN(parseFloat(checkNumber)) && isFinite(checkNumber);
}

function isABigNumber(checkNumber) {
	return checkNumber > 1000000;
}

function  getErrorType(numberToDecompose) {
	var errorType = "";
	
	if (!isANumber(numberToDecompose)) {
		errorType = "not a number";
	} else if (isABigNumber(numberToDecompose)) {
		errorType = "too big number (>1e6)";
	}
	
	return errorType;
}

app.listen(3000);
console.log('Listening on port 3000...');
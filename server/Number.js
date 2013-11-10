module.exports = function Number(aNumber) {
	this.number = aNumber;
		
	if (isAValidNumber(aNumber)) {
		this.decomposition = decomposeNumberWithPrimeFactors(aNumber);
	} else {
		this.error = getErrorType(aNumber);
	}
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

function  getErrorType(invalidNumber) {
	var errorType = "";
	
	if (!isANumber(invalidNumber)) {
		errorType = "not a number";
	} else if (isABigNumber(invalidNumber)) {
		errorType = "too big number (>1e6)";
	}
	
	return errorType;
}
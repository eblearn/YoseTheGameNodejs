module.exports = function Number(aNumber) {
	this.number = aNumber;
	
	if (isValidNumber(aNumber)) {
		this.decomposition = decomposeNumberWithPrimeFactors(aNumber);
	} else {
		this.error = getErrorMessage(aNumber);
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

function isValidNumber(numberToValidate) {
	if (isNaN(numberToValidate)) {
		return false;
	} else if (numberToValidate > 1000000) {
		return false;
	} else {
		return true;
	}
}

function getErrorMessage(invalidNumber) {
	if (isNaN(invalidNumber)) {
		return "not a number";
	} else if (invalidNumber > 1000000) {
		return "too big number (>1e6)";
	} else {
		return true;
	}
}
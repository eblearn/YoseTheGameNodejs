module.exports = function Number(aNumber) {
	this.number = aNumber;
	
	if (isValidNumber(aNumber)) {
		this.decomposition = decomposeNumberWithPrimeFactors(aNumber);
	} else {
		this.error = "not a number"
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
	} else {
		return true;
	}
}

module.exports = function Number(aNumber) {
	this.number = aNumber;
	this.decomposition = decomposeNumberWithPrimeFactors(aNumber);
}

function decomposeNumberWithPrimeFactors(numberToDecompose) {
	
	var decomposition = [];
	var factor = 2;
		
	while (numberToDecompose % factor == 0) {
		decomposition.push(factor);
		numberToDecompose = numberToDecompose / factor;
	}
		
	return decomposition;
}

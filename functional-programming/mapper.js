function doubleAll(numbers){
	var fun = numbers.map(function(thing){
		return thing * 2;
	})
	return fun
}

module.exports = doubleAll;
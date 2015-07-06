var q = require('q')
var def = q.defer()

function attachTitle(appendTo){
	var y = "DR. " + appendTo
	return y
}

def.promise
	.then(attachTitle)
	.then(console.log)

def.resolve("MANHATTAN")
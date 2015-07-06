var q = require('q')
var json = process.argv[2]

function parsePromised(){
	var def = q.defer()
	try{
		JSON.parse()	
	}
	return def.promise
}
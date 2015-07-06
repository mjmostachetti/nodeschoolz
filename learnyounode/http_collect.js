var http = require('http');
var concat = require('concat-stream')
var writable = concat(function(data){
	console.log(data.length)
	console.log(data.toString())
})

http.get(process.argv[2],function(res){
	res.pipe(writable)
})
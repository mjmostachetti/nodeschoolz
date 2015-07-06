var module = require('./module.js')

module(process.argv[2],process.argv[3],function(err,data){
	if(err) throw err;
	data.forEach(function(x){
		console.log(x)
	})
})
var fs = require('fs')

fs.rename('test.txt','fucker.txt', function(err){
	if(err) throw err;
});
var fs = require('fs')
var callback = function(){
	console.log('done')
}

fs.rename('fun.txt','hell.txt', callback)
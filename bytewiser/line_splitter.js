var fs = require('fs')
var start = 0;
var file = fs.readFile(process.argv[2], function(error, data){
for(var x = 0; x < data.length;x++){
		if(data[x] === 10){
			console.log(data.slice(start,x))
			var start = x + 1
		} else if(x === data.length - 1) {
			console.log(data.slice(start))
		}
}

})


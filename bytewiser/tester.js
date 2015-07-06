var fs = require('fs')
var start = 0;
/*
fs.readFile('fake.txt',function(error,data){
	for(var x = 0; x < data.length; x++){
		console.log(data[x])
		if(data[x] === 10){
			var end = x - 1;
			console.log(data.slice(start,end))
			console.log(data.slice(start,end).toString())
			var start = x + 3
		} else if(x === data.length - 1) {
			console.log(data.slice(start))
			console.log(data.slice(start).toString())
		}
	}
})
*/

var data = fs.readFileSync('fake.txt')
for(var x = 0; x < data.length;x++){
		if(data[x] === 10){
			console.log(data.slice(start,x))
			console.log(data.slice(start,x).toString())
			var start = x + 1
		} else if(x === data.length - 1) {
			console.log(data.slice(start))
			console.log(data.slice(start).toString())
		}
}

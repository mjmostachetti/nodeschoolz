var conCat = require('concat-stream')

process.stdin.pipe(conCat(function (src){
	var s = src.toString().split('').reverse().join('');
	console.log(s);
}))
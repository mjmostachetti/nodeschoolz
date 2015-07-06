var Readable = require('stream').Readable;

var rs = new Readable;
//rs.setEncoding('hex');
rs.push('beep ');
rs.push('boop\nyes');
rs.push('boop\nyes');
rs.push(null)

//console.log(rs)
//rs.pipe(process.stdout);
/*
rs.on('data', function(chunk){
	console.log(chunk)
})
*/
rs.on('data',function(chunk){
	console.log(chunk)
	rs.pause();
	console.log("Paused for 2 seconds.")
	setTimeout(function(){
		console.log("Runnging again!");
		rs.resume();
	},2000);
})

rs.on('end', function(){
	console.log('there is no more data')
})
rs.on('close',function(){
	console.log('stream closed!')
})

rs.on('error',function(){
	console.log('you got an error')
})

console.log(rs)

//rs.pipe(process.stdout);
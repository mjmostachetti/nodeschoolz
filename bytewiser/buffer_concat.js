var x = []

process.stdin.on('data', function(chunk){
	x.push(chunk)
})

process.stdin.on('end',function(){
	console.log(Buffer.concat(x))
})


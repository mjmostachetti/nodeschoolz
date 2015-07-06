process.stdin.on('data',function(chunk){
	var x = new Uint8Array(chunk)
	console.log(JSON.stringify(x))
})

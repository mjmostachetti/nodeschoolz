var http = require("http")

var server = http.createServer(function (req,res){
	//console.log(req)
	//console.log(res)
})

server.on('connection',function(socket){
	console.log(socket)
	console.log('this just ran' + Date.now())
})

server.on('connection',function(socket){
	console.log('adding more event listeners')
})

server.on('close',function(){
	console.log('we just closed the server')
})

server.listen(8000);
console.log(server)
//server.close()
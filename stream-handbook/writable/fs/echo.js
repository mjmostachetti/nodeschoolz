var net = require('net');
var client = net.connect({port:8124},
	function(){
		console.log('connected to server!');
		client.write('world!\r\n');
	});
client.on('data',function(data){
	console.log(data.toString());
})
client.on('end', function(){
	console.log('diconnected from server');
})
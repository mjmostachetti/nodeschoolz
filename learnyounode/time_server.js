var net = require('net')

var server = net.createServer(function(socket){
	var datez = new Date();
	var day,month,hour;
	if(datez.getDate() < 10 ? day = '0' + datez.getDate() : day = datez.getDate()) 
  if(datez.getMonth() < 10 ? month = '0' + (datez.getMonth()+1) : month = (datez.getMonth()+1))
  if(datez.getHours() < 10 ? hour = '0' + (datez.getHours()) : hour = (datez.getHours()))
	var data = datez.getFullYear() +
		"-" + month + "-" + day +
		" " + hour + ":" + datez.getMinutes() + '\n'
	
	socket.end(data)
})
server.listen(process.argv[2]);
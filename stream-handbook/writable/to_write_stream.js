var fs = require('fs');
var ws = fs.createWriteStream('message.txt');
ws.cork()
ws.write('beep \n');
ws.write('beep \n');
ws.write('boop\n');
console.log(ws)
ws.uncork()
setTimeout(function(){
console.log(ws)
}, 2000);
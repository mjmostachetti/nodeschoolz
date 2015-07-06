var through = require("through2")
var stream = through(function write(buffer,encoding,next){
	var caps = buffer.toString().toUpperCase()
	this.push(caps);
	next();
}, function end(done){
	done();
})

process.stdin.pipe(stream).pipe(process.stdout)
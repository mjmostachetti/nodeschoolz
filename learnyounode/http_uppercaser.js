var http = require('http')
var map = require('through2-map')

var truncate = map(function(chunk){
	return chunk.toString().toUpperCase()
})

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(truncate).pipe(res)
})

server.listen(Number(process.argv[2]))
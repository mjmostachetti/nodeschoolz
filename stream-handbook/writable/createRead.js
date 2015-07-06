var fs = require('fs')

var reader = fs.createReadStream('message.txt', {
	encoding: 'utf8'
})
//var writer = fs.createWriteStream('writer.txt')
reader.pipe(process.stdout)

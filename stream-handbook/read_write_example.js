var fs = require('fs')
var Readable = require('stream').Readable
var z = require('zlib')

var writable = fs.createWriteStream('./file.txt')

var rs = new Readable
rs.push('new to text')
rs.push(null)

rs.pipe(writable)
var crypto = require('crypto')
var stream = crypto.createDecipher('aes256',process.argv[2])
var fs = require('fs')

process.stdin.pipe(stream).pipe(process.stdout)

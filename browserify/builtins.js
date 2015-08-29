var url = require('url')
var querystring = require('querystring')

var URLZ = url.parse(prompt())
var pathRel = url.resolve(URLZ.pathname,querystring.parse(URLZ.query)['file'])
var file = URLZ.protocol + "//" + URLZ.host + pathRel

console.log(file)
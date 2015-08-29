var through = require('through2');
var split = require('split')
var quote = require('quote-stream')
var fs = require('fs')
var Combine = require('stream-combiner')
var sprintf = require('sprintf')


module.exports = function (file) {
    if (!/\.txt$/.test(file)) return through();
    var num = 0;
    var liner = through(function write (buf, enc, next) {
        var line = buf.toString('utf8') + '\n';
        if (num % 5 === 0) {
            this.push(sprintf('%3d %s', num, line));
        }
        else this.push('    ' + line);
        num ++;
        next();
    });
    var prefix = through();
    prefix.push('module.exports=');
    return combine([ split(), liner, quote(), prefix ]);
};
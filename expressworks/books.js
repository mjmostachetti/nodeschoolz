var express = require('express')
var fs = require('fs')
var app = express();
app.get('/books', function(req,res){
  fs.readFile(process.argv[3], function(e,data){
    var body = JSON.parse(data) 
    res.json(body)
  })
})
app.listen(process.argv[2])
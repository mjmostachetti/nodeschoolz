var fs = require('fs')
var path = require('path')

module.exports = function(dirName,fileExt,callback){
	fs.readdir(dirName, function(err,files){
		if(err)
			return callback(err);

		var list = files.filter(function(x){
			if(path.extname(x) === '.' + fileExt){
				return x
			}
		})
		callback(null,list)
	}
)
}
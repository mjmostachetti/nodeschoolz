var http = require('http')
var urlArray = [process.argv[2],process.argv[3],process.argv[4]]
var bl = require('bl')

http.get(urlArray[0],function(response){
	response.pipe(bl(function(err,data){
		if(err) return console.error(err);
		console.log(data.toString())
		http.get(urlArray[1],function(response){
			response.pipe(bl(function(err,data){
				if(err) return console.error(err);
				console.log(data.toString())
				http.get(urlArray[2],function(response){
					response.pipe(bl(function(err,data){
						if(err) return console.error(err);
						console.log(data.toString())
					}))
				})		
			}))
		})
	}))
})
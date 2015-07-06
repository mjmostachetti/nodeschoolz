setInterval(function(){
	console.log('fun')
}, 10000
)
console.log('ok')
setTimeout(function(){
	clearInterval();
}, 30000)
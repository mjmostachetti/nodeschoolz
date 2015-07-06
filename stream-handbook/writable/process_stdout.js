var x = process.stdout
x.write('fun', encoding={'hex'}, callback(){
	console.log('done writing')
})
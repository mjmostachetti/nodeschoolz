var x = new Uint32Array(1)
x[0] = process.argv[2]
var y = new Uint16Array(x.buffer)
console.log(JSON.stringify(y))
var q = require('q')
var defered = q.defer()

defered.promise.then(console.log)

defered.resolve('SECOND')

console.log("FIRST")
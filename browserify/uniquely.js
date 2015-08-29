var uniq = require('uniq')

module.exports = function(str){
  var better = str.split(',')
  return uniq(better)
}
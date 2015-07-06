function terrible(){
  console.log(arguments)
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

var ojb = {
	quack : 'yes'
}

terrible({quack : 'yes'},{quack : 'no'});

console.log(terrible({quack : 'yes'},{quack : 'no'}))

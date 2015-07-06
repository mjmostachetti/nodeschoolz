var x = 5;
var foo = function(x) {
  var bar = function(x) {
    return 8;
  };
  return bar(x);
};
console.log(foo(x));
var greet = (function() {
  var greeting = "Hello, ";

  return function(personName) {
    console.log(greeting + personName);
  };
})();

greet('Andrew');
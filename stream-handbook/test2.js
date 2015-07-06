var array = ["hello", "world"];
var callbacks = [];

var printer = function(i){
    console.log(array[i]);
};

for (var i = 0; i < array.length; i++) {
	printer(i);
}



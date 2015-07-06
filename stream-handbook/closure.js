/*


var x = 0;
var sequence = function(){
	x += 1;
	return x
}

sequence()
sequence()
sequence()
console.log(x)


-----------------------------

*/
/*

var x = 0;

var counter = function(){
	var x = 0;
	return {
		sequence:function(){
			x += 1;
			console.log(x)
			return x;			
		}
	}
}

var sequence1 = counter()
var sequence2 = counter()
sequence1.sequence();
sequence2.sequence();
sequence2.sequence(); 
sequence2.sequence();  //=> 0
console.log(x)
*/

/*

var x = 0

var counter = function(x){
	console.log(x + "before")
	var sequence = function(x){
		x += 1
		console.log(x + "within sequence")
		return x
	}
	console.log(x + "after")
	return sequence(x);
}

counter(7)


*/



var counter = function(x){
	var num = x;
	return {
		sequence:function(){
			if(num === undefined){
				num = 0;
				console.log(num)
			}else{
				num ++;
				console.log(num)	
			}
		},
		reset: function(x){
			num = x;
		}
	}
}


var sequence2 = counter(10)

sequence2.sequence();
sequence2.sequence(); 
sequence2.sequence();
sequence2.reset();
sequence2.sequence();
sequence2.sequence();




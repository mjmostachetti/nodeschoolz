var newArray = process.argv.slice(2);
for(var i = 0, sum = 0; i < newArray.length; i++){
	sum = sum + Number(newArray[i])
}
console.log(sum)
var sum = 0;
for(var num = 2; num < process.argv.length; num++){
	sum += Number(process.argv[num]);
}
console.log(sum);
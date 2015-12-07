//GANESH 
var readline = require('readline');
var output = process.stdout;

var printHorizontalLines = function(yAxis){
	for(var i = 17; i <= 127; i++){
		readline.cursorTo(output,i,yAxis);
		process.stdin.write("-")
	};
};

var printverticalLines = function(xAxis){
	for(var i = 8; i <= 12; i++){
		readline.cursorTo(output,xAxis,i);
		process.stdin.write("-");
	};
};
																											
exports.printElements = function(allElements){
	printHorizontalLines(8);
	printHorizontalLines(12);

	for(var i = 17; i<=127; i = i+10){
		printverticalLines(i);
	};

	for (var i = 22, j = 0; i <=122; i = i+10, j++){
		readline.cursorTo(output,i,10);
		process.stdout.write(allElements[j]);
	};
};


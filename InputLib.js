//ABHISHEK GUPTA
var lib={};
exports.lib=lib;

var printElements  = require('./showRoad.js').printElements;//GANESH'S FILE

lib.moveCursortoRoad=function(readline) {
	readline.cursorTo(process.stdin,20,5);
};
lib.moveCursortoEnd=function(readline) {
	readline.cursorTo(process.stdin,120,120);
}
lib.clearScreen=function(readline) {
	readline.cursorTo(process.stdin,0,0); 
	readline.clearScreenDown(process.stdin);
}

lib.display=function(readline,road){
	lib.clearScreen(readline);
	readline.cursorTo(process.stdin,65,4);
	console.log('TRAFFIC GAME');
	lib.moveCursortoRoad(readline);
	printElements(road);
	console.log('\n');
}
//DO NOT CHANGE WITHOUT SAYING ME
//Rahul Nandi 

var lib={};
exports.lib=lib;
lib.b=require('./libTraffic.js').module;

lib.getEmptyPosition=function(road){
	return road.indexOf('');
};

lib.swapPosition=function(road,validMoves,userMove){
	validMoves=lib.b.checkValidOption(road);
	if(validMoves.indexOf(userMove)==-1)	return "err";
	var emptyPosition=road.indexOf('');
	var userMovePosition=road.indexOf(userMove);
	road[emptyPosition]=userMove;
	road[userMovePosition]='';
	return road;
};
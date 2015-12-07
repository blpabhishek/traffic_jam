//DO NOT CHANGE WITHOUT SAYING ME
//Rahul Nandi

var m=require("./traficLib.js").lib;
var assert=require("assert");
var test={};
exports.test=test;

test["swapPosition gives an array after swaping the position of user request if user gives valid moves"]=function(){
	var road=['A5','A4','A3','A2','A1','','B1','B2','B3','B4','B5'];
	var validMoves=['A2','A1','B1','B2'];
	var userMove='B1';
	var expected=['A5','A4','A3','A2','A1','B1','','B2','B3','B4','B5'];
	assert.deepEqual(expected,m.swapPosition(road,validMoves,userMove));
}
test["swapPosition gives an array after swaping the position of user request if user gives invalid moves"]=function(){
	var road=['A5','A4','A3','A2','A1','','B1','B2','B3','B4','B5'];
	var validMoves=['A2','A1','B1','B2'];
	var userMove='A5';
	var expected='err';
	assert.deepEqual(expected,m.swapPosition(road,validMoves,userMove));
}
test["swapPosition gives an array aft swaping the position of user request if user gives invalid moves"]=function(){
	var road=['A5','A4','A3','A2','A1','','B1','B2','B3','B4','B5'];
	var validMoves=['A2','A1','B1','B2'];
	var userMove='A2';
	var expected=['A5','A4','A3','','A1','A2','B1','B2','B3','B4','B5'];
	assert.deepEqual(expected,m.swapPosition(road,validMoves,userMove));
}
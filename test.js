var lib = require('./libTraffic.js').module;
var assert = require('assert');
var equal = assert.deepEqual;
var test = {};
exports.test = test;

test["checkValidOption: it gives the valid options at frist"] = function(){
	var givenPosition = ['A4','A3','A2','A1','','B1','B2','B3','B4'];
	var validOption = ['A2','A1','B1','B2'];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["checkValidOption: it gives middle of the game where options are A1,B2"] = function(){
	var givenPosition = ['A4','A3','A2','B1','','A1','B2','B3','B4'];
	var validOption = ['A2','B2'];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["checkValidOption: it gives middle of the  where valid options are not there"] = function(){
	var givenPosition = ['A4','A3','A2','B1','A2','A1','B2','B3','B4',''];
	var validOption = [];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["isTerminate: it gives middle of the  where options are A1,B2"] = function(){
	var givenPosition = ['B1','B2','B3','','A3','A2','A1'];
	equal(true,lib.isTerminate(givenPosition,3));
};

test["checkValidOption: it gives the valid options edge case"] = function(){
	var givenPosition = ['A4','','B1','A2','A1','A3','B2','B3','B4'];
	var validOption = ['A4','B1'];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["checkValidOption: it gives the valid options edge case 2"] = function(){
	var givenPosition = ['A4','A2','B1','A2','A1','A3','B2','','B4'];
	var validOption = ['A3','B4'];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["checkValidOption: it gives the valid options edge case 3"] = function(){
	var givenPosition = ['','B1','B2','A4','A3','A2','A1','B2','B3','B4'];
	var validOption = ['B1','B2'];
	equal(validOption,lib.checkValidOption(givenPosition));
};

test["checkValidOption: it gives the valid options edge case 4"] = function(){
	var givenPosition = ['B1','B2','A4','A3',,'B3','B4','A2','A1',''];
	var validOption = ['A2','A1'];
	equal(validOption,lib.checkValidOption(givenPosition));
};
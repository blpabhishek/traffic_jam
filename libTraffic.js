//Author :Brindaban
var module = {};
exports.module = module;
module.checkValidOption = function(currentRoad){
	var emptyPosition = currentRoad.indexOf('');
	var leftsideThing = emptyPosition>1&&currentRoad.slice(emptyPosition-2,emptyPosition)
						|| currentRoad.slice(0,emptyPosition);
	var leftSideOption=leftsideThing.filter(function(element){ 
		return element[0]=='A';
	});
	var rightSideOption=currentRoad.slice(emptyPosition+1,emptyPosition+3).filter(function(element){ 
		return element[0]=='B';
	});
	var validOptions=leftSideOption.concat(rightSideOption);
	return validOptions;
};
module.isTerminate = function(currentRoad,emptyPosition){
	return currentRoad.slice(emptyPosition+1).join('').search('B') == -1 
		   &&emptyPosition==(currentRoad.length-1)/2;
};
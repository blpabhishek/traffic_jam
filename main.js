//ABHISHEK GUPTA
var readline = require('readline');
var lib={};
lib.b=require('./libTraffic.js').module;
lib.a=require('./InputLib.js').lib;
lib.r=require('./traficLib.js').lib;
var playerName=process.argv[2] && process.argv[2].toUpperCase();

var road=['A5','A4','A3','A2','A1','','B1','B2','B3','B4','B5'];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true  
});

var printMoves=function(validMoves) {
	console.log("\n\n\nValid Moves are "+validMoves.join(',')," Enter your Moves...");
	console.log("\n\n\nWhom do you want to move...");
};

var GameOver=function(status){
	var state=lib.b.isTerminate(road,lib.r.getEmptyPosition(road));
	var message=playerName|| 'Dear';
	if(status=='early')
		message+=", TRY AGAIN!!!";
	else if(state==true)
		message+=', CONGRATULATION FINALLY YOUR BRAIN STARTED WORKING !!!!';
	else
		message+=", DON'T YOU HAVE A BRAIN..?? IT'S A TRAFFIC JAM";
	console.log('\n\n\n',message);
	rl.close();
	process.exit(0);
};

var startGame=function(validMove){
	 if(validMove.length==0)
 		GameOver();
	printMoves(validMove);

rl.on('line',function(userMove) {
	userMove=userMove.toUpperCase();
	if(userMove=='ENDGAME')
		GameOver('early');
	var move=lib.r.swapPosition(road,validMove,userMove);
	if(move!='err'){
		road=move;
		lib.a.display(readline,road);
		var validMoves=lib.b.checkValidOption(road);
		if(validMoves.length==0)
			GameOver();
		printMoves(validMoves);
	}
	else
		console.log('!!!!Invalid Move...');
});
};

lib.a.display(readline,road);					
var validMoves=lib.b.checkValidOption(road);
startGame(validMoves);
//confirm js and html are correctly linked by console.log("linked")
console.log("linked");

//when the page loads console.log("loaded!") and call function makeReady()
window.onload = function() {
	console.log("loaded!");
	makeReady();
};

//add click functions to "play" and "reset" buttons
//when clicked, buttons call functions ready() and wipeGameBoard() and wipeGameTimer
function makeReady() {
	console.log("play ready!");
	document.getElementById("play").onclick = function() {
		//"play" button disabled while game is in play
		document.getElementById("play").disabled = true;
		//delays the function that re-enables play button until game timer = 0
		setTimeout(enablePlay, 14000);
		ready();
	};
	// console.log("reset ready!");
	// document.getElementById("reset").onclick = function() {
	// 	wipeGameTimer();
	// 	wipeGameBoard();
	// };
	makeGameboard();
}

//re-enables "play" button 
function enablePlay() {
	document.getElementById("play").disabled = false;
}

//makes gameboard and all child divs - mole holes where moles could pop up
function makeGameboard() {
	var gameboardGrid = document.createElement("div");
	gameboardGrid.id = "ggId";
	document.getElementById("gameboard-div").appendChild(gameboardGrid);
	document.getElementById("ggId").classList.add("ggClass");
	console.log("gg created");

	//create a loop
	//create div element
	//assign an id "" + i+1
	//appendchild
	//add class
	for(var i=0; i<9; i++) {
		var moleHoleNth = document.createElement("div");
		moleHoleNth.id = "mH" + (i+1);
		document.getElementById("ggId").appendChild(moleHoleNth);
		moleHoleNth.classList.add("mh");
		console.log("for loop worked!");
	}
}

//wipeGameTimer resets timer = 10
function wipeGameTimer() {
	console.log("wipe game works");
	document.getElementById("timer").innerHTML = "TIMER";
	timeLeft = 10;
}

//wipeGameBoard() resets game to pre-play state and clears player scores
function wipeGameBoard() {
	document.getElementById("p-1-score").innerHTML = 0;
	document.getElementById("p-2-score").innerHTML = 0;
	document.getElementById("declaration").innerHTML = "Player 1 Turn";
}

//timer reads "ready..." and calls countdownThree
function ready() {
	setTimeout(countdownThree, 1000);
	document.getElementById("timer").innerHTML = "READY..";
	console.log("ready.....");
}

//timer reads "three..." and calls countdownTwo
function countdownThree() {
	setTimeout(countdownTwo, 1000);
	document.getElementById("timer").innerHTML = "THREE..";
	console.log("Three.....");
}

//timer reads "two..." and calls countdownOne
function countdownTwo() {
	setTimeout(countdownOne, 1000);
	document.getElementById("timer").innerHTML = "TWO..";
	console.log("Two.....");
}

//timer reads "one..." and calls setInterval and gameTimer
function countdownOne() {
	setTimeout(mySetInterval, 1000);
	document.getElementById("timer").innerHTML = "ONE..";
	console.log("One.....");
	setTimeout(startGameTimer, 1000);
	setTimeout(myClearInterval, 11000);
}

//startGameTimer counts down to 0 from 10
var timeLeft = 10;
function startGameTimer () {
	timeLeft = 10;
	var gameTimer = setInterval(function(){
		document.getElementById("timer").innerHTML = timeLeft -= 1;
  		if(timeLeft === 0) {
	    	clearInterval(gameTimer);
	    	document.getElementById("mH1").classList.remove("mole");
			document.getElementById("mH2").classList.remove("mole");
			document.getElementById("mH3").classList.remove("mole");
			document.getElementById("mH4").classList.remove("mole");
			document.getElementById("mH5").classList.remove("mole");
			document.getElementById("mH6").classList.remove("mole");
			document.getElementById("mH7").classList.remove("mole");
			document.getElementById("mH8").classList.remove("mole");
			document.getElementById("mH9").classList.remove("mole");
			document.getElementById("mH1").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH2").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH3").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH4").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH5").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH6").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH7").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH8").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH9").removeEventListener("click", giveMePoints, true);
			document.getElementById("mH1").removeEventListener("click", whacked, true);
			document.getElementById("mH2").removeEventListener("click", whacked, true);
			document.getElementById("mH3").removeEventListener("click", whacked, true);
			document.getElementById("mH4").removeEventListener("click", whacked, true);
			document.getElementById("mH5").removeEventListener("click", whacked, true);
			document.getElementById("mH6").removeEventListener("click", whacked, true);
			document.getElementById("mH7").removeEventListener("click", whacked, true);
			document.getElementById("mH8").removeEventListener("click", whacked, true);
			document.getElementById("mH9").removeEventListener("click", whacked, true);
			//this if-else statement controls which player is up and where points are allocated
			if (player === player1) {
				player = player2;
				points = 0;
				document.getElementById("declaration").innerHTML = "Player 2 Turn";
			} else if (player === player2) {
				//if player 1 and 2 have gone, announce winner
				player = player1;
				points = 0;
				announceWinner();
			}
	    }
	},1000);
}

var points = 0;
var player = player1;
function giveMePoints() {
	//if player 1 is playing, they get points. if player 2 is playing, they get points.
	if (timeLeft > 0 && player === player1) {
	document.getElementById("p-1-score").innerHTML = points += 1;
	console.log("p1 points plus 1");
	} else if (timeLeft > 0 && player === player2) {
	document.getElementById("p-2-score").innerHTML = points += 1;
	console.log("p2 points plus 1");
	}
}

var myIntervalVariable;

//timer reads "go!" and moles activateMoles is called every half second
function mySetInterval() {
	document.getElementById("timer").innerHTML = "GO!";
	myIntervalVariable = setInterval(activateMoles, 500);
}

//stops moles being generated
function myClearInterval() {
	clearInterval(myIntervalVariable);
}

//calls moles at random, every half second due to setInterval, until clearInterval is called
function activateMoles() {
	//math.random function used for calling individual cells
	function whichMoleHole(min, max) {
		min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//uses random number generated above to toggle class on whichever cell was called
	var whichMoleHole = whichMoleHole(1,9);
	document.getElementById("mH"+ whichMoleHole).classList.toggle("mole");
	//add and remove click event listener to "mole" class
	if (document.getElementById("mH"+ whichMoleHole).className === "mh mole") {
		document.getElementById("mH"+ whichMoleHole).addEventListener("click", giveMePoints, true);
		document.getElementById("mH"+ whichMoleHole).addEventListener("click", whacked, true);
	 } else {
		document.getElementById("mH"+ whichMoleHole).removeEventListener("click", giveMePoints, true);
		document.getElementById("mH"+ whichMoleHole).removeEventListener("click", whacked, true);
		console.log("no clicky no more");	
	}
}

//provide user feedback visually indicating moles were whacked and calls function to return to standby
function whacked() {
	if (timeLeft > 0) {
		this.classList.remove("mole");
		this.removeEventListener("click", giveMePoints, true);
		this.classList.add("whacked");
		setTimeout(resetWhacked, 250);
	}
}

//after displaying whacked, this sets div back to empty mole hole or standby
function resetWhacked() {
	document.getElementsByClassName("whacked")[0].classList.remove("whacked");
}

//assuming both players have played, this function compares player scores and declares winner or tie
function announceWinner() {
	if (document.getElementById("p-1-score").innerHTML > document.getElementById("p-2-score").innerHTML) {
		document.getElementById("declaration").innerHTML = "Player 1 Wins!";
		//alert("Player 1 Wins!");
	} else if (document.getElementById("p-2-score").innerHTML > document.getElementById("p-1-score").innerHTML) {
		document.getElementById("declaration").innerHTML = "Player 2 Wins!";
		//alert("Player 2 Wins!");
	} else if (document.getElementById("p-1-score").innerHTML === document.getElementById("p-2-score").innerHTML) {
		document.getElementById("declaration").innerHTML = "It's A Tie!";
	}
	setTimeout(resetPlayer1Turn, 1000);
}

function resetPlayer1Turn() {
	document.getElementById("p-1-score").innerHTML = 0;
	document.getElementById("p-2-score").innerHTML = 0;
	document.getElementById("timer").innerHTML = "TIMER";
	document.getElementById("declaration").innerHTML = "Player 1 Turn";
}



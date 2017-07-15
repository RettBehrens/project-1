//confirm js and html are correctly linked by console.log("linked")
console.log("linked");

//when the page loads console.log("loaded!") and call function makeReady()
window.onload = function() {
	console.log("loaded!");
	makeReady();
};

//add click functions to "play" and "reset" buttons
//when clicked, buttons call functions startGame() and wipeGame()
function makeReady() {
	console.log("play ready!");
	document.getElementById("play").onclick = function() {
		ready();
	};
	console.log("reset ready!");
	document.getElementById("reset").onclick = function() {
		wipeGameTimer();
		wipeGameBoard();
	};
	makeGameboard();
}

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

//wipeGame() resets gameboard to pre-play state and clears player scores
function wipeGameTimer() {
	console.log("wipe game works");
	document.getElementById("timer").innerHTML = "TIMER";
	timeLeft = 10;
	//document.getElementById("p-1-score").innerHTML = "0";
	//document.getElementById("p-2-score").innerHTML = "0";
}

function wipeGameBoard() {
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
}

function ready() {
	setTimeout(countdownThree, 1000);
	document.getElementById("timer").innerHTML = "READY..";
	console.log("ready.....");
}

function countdownThree() {
	setTimeout(countdownTwo, 1000);
	document.getElementById("timer").innerHTML = "THREE..";
	console.log("Three.....");
}

function countdownTwo() {
	setTimeout(countdownOne, 1000);
	document.getElementById("timer").innerHTML = "TWO..";
	console.log("Two.....");
}

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
  			//clearInterval(activateMole);
	    	clearInterval(gameTimer);
	    }
	},1000);
}

var points = 0;
function giveMePoints() {
	//needs an if-else statement dictating who gets points
	if (timeLeft > 0) {
	document.getElementById("p-1-score").innerHTML = points += 1;
	console.log("points plus 1");
	} else {
		document.getElementById("p-1-score").innerHTML = points;
	}
	//document.getElementById("p-2-score").innerHTML = points += 1;
}

var myIntervalVariable;

function mySetInterval() {
	document.getElementById("timer").innerHTML = "GO!";
	myIntervalVariable = setInterval(activateMoles, 500);
}

function myClearInterval() {
	clearInterval(myIntervalVariable);
}

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

function whacked() {
	if (timeLeft > 0) {
		this.classList.remove("mole");
		this.classList.add("whacked");
		setTimeout(resetWhacked, 500);
	}

	function resetWhacked() {
		this.classList.remove("whacked");
	}

}




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
		wipeGame();
	};
}

function ready() {
	setTimeout(countdownThree, 1000);
	document.getElementById("timer").innerHTML = "READY...";
	console.log("ready.....");
}

function countdownThree() {
	setTimeout(countdownTwo, 1000);
	document.getElementById("timer").innerHTML = "THREE...";
	console.log("Three.....");
}

function countdownTwo() {
	setTimeout(countdownOne, 1000);
	document.getElementById("timer").innerHTML = "TWO...";
	console.log("Two.....");
}

function countdownOne() {
	setTimeout(startGame, 1000);
	document.getElementById("timer").innerHTML = "ONE...";
	console.log("One.....");
}

//startGame() creates gameboard divs with id and class
function startGame() {
	console.log("start game works");
	document.getElementById("timer").innerHTML = "GO!";
	
	var gameboardGrid = document.createElement("div");
	gameboardGrid.id = "ggId";
	document.getElementById("gameboard-div").appendChild(gameboardGrid);
	document.getElementById("ggId").classList.add("ggClass");
	console.log("gg created");

	var timeLeft = 10;
	var gameTimer = setInterval(function(){
		document.getElementById("timer").innerHTML = timeLeft -= 1;
  		if(timeLeft <= 0)
    	clearInterval(gameTimer);
	},1000);

	//create a loop
	//creat div element
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

	//defining outside of random number generator/repeater due to removeEventListener issue
	var points = 0;
	function doesThisWork() {
		console.log("click detected");
		//needs an if-else statement dictating who gets points
		document.getElementById("p-1-score").innerHTML = points += 1;
		//document.getElementById("p-2-score").innerHTML = points += 1;
	}

	repeatMole();

	//begins repeating a random number assigned to each mole hole
	function repeatMole() {
		function activateMole() {
			function whichMoleHole(min, max) {
				min = Math.ceil(min);
	  			max = Math.floor(max);
	  			return Math.floor(Math.random() * (max - min + 1)) + min;
			}

			//when random number = mole hole id, mole appears
			var whichMoleHole = whichMoleHole(1,9);
			document.getElementById("mH"+ whichMoleHole).classList.toggle("mole");
			//add and remove click event listener to "mole" class
			if (document.getElementById("mH"+ whichMoleHole).className === "mh mole") {
				document.getElementById("mH"+ whichMoleHole).addEventListener("click", doesThisWork, true);
			} else {
				document.getElementById("mH"+ whichMoleHole).removeEventListener("click", doesThisWork, true);
				console.log("no clicky no more");	
			} 
		}
		//function runs every quarter second, unless game timer has hit 10 seconds
		setInterval(activateMole, 250);
	}
}

//wipeGame() resets gameboard to pre-play state and clears player scores
function wipeGame() {
	console.log("wipe game works");
	var gameboardGrid = document.getElementById("ggId");
	ggId.parentNode.removeChild(ggId);
	document.getElementById("p-1-score").innerHTML = "0";
	document.getElementById("p-2-score").innerHTML = "0";
}



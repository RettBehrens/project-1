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
		startGame();
	};
	console.log("reset ready!");
	document.getElementById("reset").onclick = function() {
		wipeGame();
	};
}

//startGame() creates gameboard divs with id and class
function startGame() {
	console.log("start game works");
	var gameboardGrid = document.createElement("div");
	gameboardGrid.id = "ggId";
	document.getElementById("gameboard-div").appendChild(gameboardGrid);
	document.getElementById("ggId").classList.add("ggClass");
	console.log("gg created");

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
	function doesThisWork() {
		console.log("listener added");
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
				console.log("listener removed");	
			}
		}
		//function runs every quarter second
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



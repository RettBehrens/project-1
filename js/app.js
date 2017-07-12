//confirm js and html are correctly linked by console.log("linked")
console.log("linked");

//when the page loads console.log("loaded!") and call function makeReady()
window.onload = function() {
	console.log("loaded!");
	makeReady();
};

//add click listeners to "play" and "reset" buttons
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

//startGame() creates gameboard divs with attributes, then..
//begins repeating a random number assigned to each mole hole..
//when random number = mole hole id, mole appears..
function startGame() {
	console.log("start game works");
	var mH1 = document.createElement("div");
	mH1.id = "m-h-1";
	document.getElementById("gameboard-div").appendChild(mH1);
	document.getElementById("m-h-1").classList.add("mh");
	repeatMole();
	function repeatMole() {
		function activateMole() {
			function whichMoleHole(min, max) {
				min = Math.ceil(min);
	  			max = Math.floor(max);
	  			return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			var whichMoleHole = whichMoleHole(0,1);
			if (whichMoleHole === 1) {
				console.log("a mole! whack it!");
				whichMoleHole = "";
			} else if (whichMoleHole === 0) {
				console.log("no mole...");
				whichMoleHole = "";
			}
		}
		setInterval(activateMole, 500);
	}
}

//wipeGame() resets gameboard to pre-play state and clears player scores
function wipeGame() {
	console.log("wipe game works");
	var mH1 = document.getElementById("m-h-1");
	mH1.parentNode.removeChild(mH1);
	document.getElementById("p-1-score").innerHTML = "0";
	document.getElementById("p-2-score").innerHTML = "0";
}

//var gameboard = document.getElementById("gameboard-div");

//var mH1 = document.createElement("div");

//var play = document.getElementById("play");

//var reset = document.getElementById("reset");
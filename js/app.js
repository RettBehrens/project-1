console.log("linked");

window.onload = function() {
	console.log("loaded!");
	makeReady();
};

function makeReady() {
	console.log("play ready!");
	document.getElementById("play").onclick = function() {
		startGame();
	};
	console.log("reset ready!");
	document.getElementById("reset").onclick = function() {
		wipeGame();
	};
};

function startGame() {
	console.log("start game works");
	document.getElementById("gameboard-div");
};

function wipeGame() {
	console.log("wipe game works");
	document.getElementById("p-1-score").innerHTML = "";
	document.getElementById("p-2-score").innerHTML = "";
};

var gameboard = document.getElementById("gameboard-div");

var play = document.getElementById("play");

var reset = document.getElementById("reset");
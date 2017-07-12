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
	var mH1 = document.createElement("div");
	mH1.id = "m-h-1";
	document.getElementById("gameboard-div").appendChild(mH1);
	document.getElementById("m-h-1").classList.add("mh");
	//document.getElementById("gameboard-div");
};

function whichMoleHole(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min;
};

whichMoleHole(0,1);

function wipeGame() {
	console.log("wipe game works");
	var mH1 = document.getElementById("m-h-1");
	mH1.parentNode.removeChild(mH1);
	document.getElementById("p-1-score").innerHTML = "0";
	document.getElementById("p-2-score").innerHTML = "0";
};

//var gameboard = document.getElementById("gameboard-div");

var mH1 = document.createElement("div");

var play = document.getElementById("play");

var reset = document.getElementById("reset");
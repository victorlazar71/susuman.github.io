document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.1";

var x = Math.floor(Math.random() *600);
var y = Math.floor(Math.random() *600);

function desenare(x, y)
{
	var canvas = document.getElementById("canvas");
	var desen = canvas.getContext("2d");
	desen.save();
	desen.clearRect(0, 0, 600, 600);
	desen.fillStyle = "pink";
	desen.fillRect(x, y, 100, 100);
	desen.restore();
	x+=5;
	var loopTimer = setTimeout("desenare("+x+", "+y+")", 20);
	}
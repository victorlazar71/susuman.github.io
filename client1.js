document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.2";

svg.addEventListener("touchstart", on_touch);

var svg_rect = svg.getBoundingClientRect();

function on_touch(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
	var canvas = document.getElementById("canvas");
	var desen = canvas.getContext("2d");
	desen.save();
	desen.clearRect(0, 0, 600, 600);
	desen.fillStyle = "pink";
	desen.fillRect(x, 20, 100, 100);
	desen.restore()
	x+=5
	var loopTimer = setTimeout("on_touch("+e+")", 20);
}
}
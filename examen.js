document.getElementById("id_logic_version").innerHTML = "Logic version: 2000.00.00.1";

var canvas = document.getElementById("canvas");

canvas.addEventListener("touchstart", on_touch);
//canvas.addEventListener("touchmove", on_touch_move);
//canvas.addEventListener("touchend", on_touch_end);

function on_touch(e)
{
	c = canvas.getContext("2d");
	x=0, y=0, width=10, height=10;

c.fillRect(x, y, width, height);

}
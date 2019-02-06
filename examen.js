document.getElementById("id_logic_version").innerHTML = "Logic version: 2000.00.00.4";

var canvas = document.getElementById("canvas");

canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("mousedown", on_touch);

//canvas.addEventListener("touchmove", on_touch_move);
//canvas.addEventListener("touchend", on_touch_end);

var rect = canvas.getBoundingClientRect();

function on_touch(e)
{
	e.preventDefault();
	
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var context = canvas.getContext("2d");

			x, y, width=30, height=30;

c.fillRect(x, y, width, height);

}
}
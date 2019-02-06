document.getElementById("id_logic_version").innerHTML = " Logic version 2019.05.02.4";

var canvas, context, dragging = false, dragStartLocation;

//canvas.addEventListener("touchstart", on_touch);
//canvas.addEventListener("touchmove", on_touch_move);
//canvas.addEventListener("touchend", on_touch_end);

function getCanvasCoordinates(e)
{
	var x = e.clientX - canvas.getBoundingClientRect().left,
		y = e.clientY - canvas.getBoundingClientRect().top;
		
		return {x: x, y: y};
}

function drawLine(position)
{
	context.beginPath();
	context.moveTo(dragStartLocation.x, dragStartLocation.y);
	context.lineTo(position.x, position.y);
	context.stroke();
}

function dragStart(e)
{
	dragging = true;
	dragStartLocation = getCanvasCoordinates(e);
}

function drag(e)
{
	var position;
	if(dragging == true)
	{
		position = getCanvasCoordinates(e);
		drawLine(position);
	}
}

function dragStop(e)
{
	dragging = false;
	var position = getCanvasCoordinates(e);
	drawLine(position);
}

function init()
{
	canvas = document.getElementById("id_canvas");
	context = canvas.getContext("2D");
	context.stokeStyle = "green";
	context.lineWidth = 6;
	context.lineCap = "round";
	
	canvas.addEventListener("on_touch", dragStart, false);
	canvas.addEventListener("on_touch_move", drag, false);
	canvas.addEventListener("on_touch_stop", dragStop, false);
	
	//window.addEventListener("load", init, false);
}
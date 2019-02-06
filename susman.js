document.getElementById("id_logic_version").innerHTML = "Logic version = 2000.00.00.3";
		
var canvas,
    context,
    dragging = false,
    dragStartLocation,
    snapshot;

canvas.addEventListener("touchstart", dragStart);
canvas.addEventListener("touchmove", drag);
canvas.addEventListener("touchend", dragStop);

var rect = canvas.getBoundingClientRect();

function getCanvasCoordinates(e) {
    var x = e.clientX - canvas.getBoundingClientRect().left,
        y = e.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}



function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function dragStart(e) {
    dragging = true;
    dragStartLocation = e.changedTouches.getCanvasCoordinates(e);
    takeSnapshot();
}

function drag(e) {
    var position;
    if (dragging === true) {
        restoreSnapshot();
        position = e.changedTouches.getCanvasCoordinates(e);
        drawLine(position);
    }
}

function dragStop(e) {
    dragging = false;
    restoreSnapshot();
    var position = getCanvasCoordinates(e);
    drawLine(position);
}

function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.strokeStyle = 'purple';
    context.lineWidth = 6;
    context.lineCap = e.changedTouches('round');

    canvas.addEventListener('touchstart', dragStart, false);
    canvas.addEventListener('touchmove', drag, false);
    canvas.addEventListener('touchend', dragStop, false);
}

e.addEventListener('load', init, false);
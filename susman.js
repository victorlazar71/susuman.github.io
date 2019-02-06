document.getElementById("id_logic_version").innerHTML = " Logic version 2019.05.02.2";

const canvas = document.getElementById('my-house');
const ctx = canvas.getContext('2d');

canvas.addEventListener("touchstart", on_touch);
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchend", on_touch_end);

function on_touch(e)
{
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
}
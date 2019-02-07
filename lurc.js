document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.0";
var svg = document.getElementById("id_svg");
var cerca = document.getElementById("id_circlea");
var cercb = document.getElementById("id_circleb");
var cercc = document.getElementById("id_circlec");

cerca.addEventListener("touchstart", on_touch);
cercb.addEventListener("touchstart", on_touch);
cercc.addEventListener("touchstart", on_touch);

var svg_rect = svg.getBoundingClientRect();
var sound = document.getElementById("audio");

function on_touch(e)
{
	var x = "#00ff00";
	e.preventDefault();
	//cerc.setAttribute("cx", e.changedTouches[0].pageX);
	//cerc.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
	cerc.setAttribute("fill", x);
	sound.play();
}
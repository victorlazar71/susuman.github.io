document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.2";
var svg = document.getElementById("id_svg");
var cerca = document.getElementById("id_circlea");
var cercb = document.getElementById("id_circleb");
var cercc = document.getElementById("id_circlec");

cerca.addEventListener("touchstart", on_touch);
cercb.addEventListener("touchstart", on_touch);
cercc.addEventListener("touchstart", on_touch);

var svg_rect = svg.getBoundingClientRect();
var sound_a = document.getElementById("audio_a");
var sound_b = document.getElementById("audio_b");
var sound_c = document.getElementById("audio_c");

function on_touch(e)
{
	e.preventDefault();
	var x = "#00ff00";
	var z = "#0f0f00";
	var c = "#00f0f0";
	cerca.setAttribute("fill", x);
	cercb.setAttribute("fill", z);
	cercc.setAttribute("fill", c);
	sound_a.play();
	sound_b.play();
	sound_c.play();

}

document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.2";
var svg = document.getElementById("id_svg");
var cerca = document.getElementById("id_circlea");
var cercb = document.getElementById("id_circleb");
var cercc = document.getElementById("id_circlec");

cerca.addEventListener("touchstart", on_touch_one);
cercb.addEventListener("touchstart", on_touch_two);
cercc.addEventListener("touchstart", on_touch_tree);

var svg_rect = svg.getBoundingClientRect();
var sound_a = document.getElementById("audio_a");
var sound_b = document.getElementById("audio_b");
var sound_c = document.getElementById("audio_c");

function on_touch_one(e)
{
	e.preventDefault();
	var x = "#00ff00";
	cerca.setAttribute("fill", x);
	sound_a.play();

}

function on_touch_two(e)
{
	e.preventDefault();
	var z = "#0f0f00";
	cercb.setAttribute("fill", z);
	sound_b.play();

}

function on_touch_tree(e)
{
	e.preventDefault();
	var c = "#00f0f0";
	cercc.setAttribute("fill", c);
	sound_c.play();

}

document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.3";

var svg = document.getElementById("id_svg");
var site_html = document.getElementById("id_html");
var site_java = document.getElementById("id_java");
var DBS = document.getElementById("id_DBS");

site_html.addEventListener("touchstart", on_touch_one);
site_java.addEventListener("touchstart", on_touch_two);
DBS.addEventListener("touchstart", on_touch_tree);

var svg_rect = svg.getBoundingClientRect();

function on_touch_one(e)
{
	e.preventDefault();
window.open("https://www.w3schools.com");

}

function on_touch_two(e)
{
	e.preventDefault();

	sound_b.play();

}

function on_touch_tree(e)
{
	e.preventDefault();
	sound_c.play();

}
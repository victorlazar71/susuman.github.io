document.getElementById("id_logic_version").innerHTML = "Logic: 2019.01.08.3";
var svg = document.getElementById("id_svg");
var patrat = document.getElementById("id_patrat");

patrat.addEventListener("touchmove", on_touch_move);
var svg_rect = svg.getBoundingClientRect();

function on_touch_move(e)
{
	e.preventDefault();
	patrat.setAttribute("x", e.changedTouches[0].pageX);
	patrat.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
}

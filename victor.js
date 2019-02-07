document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.0";
var svg = document.getElementById("id_svg");
var patrat = document.getElementById("id_patrat");

pat.addEventListener("touchmove", on_touch_move);
var svg_rect = svg.getBoundingClientRect();

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_move(e)
{
	var a = genereaza_culoare();
	e.preventDefault();
	patrat.setAttribute("x", e.changedTouches[0].pageX);
	patrat.setAttribute("y", e.changedTouches[0].pageY - svg_rect.top);
	patrat.setAttribute("fill", a);
}

// gta remove prb make gd again

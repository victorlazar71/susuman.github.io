document.getElementById("id_logic_version").innerHTML = "Logic Version 2019.02.11.1";

var svg = document.getElementById("id_svg");

var svg_rect = svg.getBoundingClientRect();

svg.addEventListener("touchstart", on_touch_svg);

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_svg()
{
	e.preventDefault();
	var x = genereaza_culoare();
	svg.setAttribute("fill", x);
	console.log("atinge");
}
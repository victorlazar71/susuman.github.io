document.getElementById("id_logic_version").innerHTML = "Logic Version 2019.02.11.3";

var svg = document.getElementById("id_svg");
var cerc1 = document.getElementById("id_cerc1");
var cerc2 = document.getElementById("id_cerc2");
var cerc3 = document.getElementById("id_cerc3");


var svg_rect = svg.getBoundingClientRect();

cerc1.addEventListener("touchstart", on_touch);
cerc2.addEventListener("touchstart", on_touch);
cerc3.addEventListener("touchstart", on_touch);

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch()
{
	e.preventDefault();
	var x = genereaza_culoare();
	cerc1.setAttribute("cx", e.changedTouches[0].pageX);
	cerc1.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
	cerc1.setAttribute("fill", x);
	console.log("atinge");
}
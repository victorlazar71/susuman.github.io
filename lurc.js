document.getElementById("id_logic_version").innerHTML = "Logic Version 2019.02.11.1";

var svg = document.getElementById("id_svg");
var cerc = document.getElementById("id_cerc");

cerc.addEventListener("touchmove", on_touch_move);
var svg_rect = svg.getBoundingClientRect();

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_move()
{
		//var x = genereaza_culoare();
		e.preventDefault();
		cerc.setAttribute("cx", e.changedTouches[0].pageX);
		cerc.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
		//cerc1.setAttribute("fill", x);

}
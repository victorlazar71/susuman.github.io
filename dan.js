document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.11.0";

var svg = document.getElementById("id_svg");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);
svg.addEventListener("touchmove", on_touch_svg);

var svg_rect = svg.getBoundingClientRect();

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

function on_touch_svg(e)
{
	e.preventDefault();
	var color = genereaza_culoare();
	
	for (var i = 0; i < e.changedTouches.length; i++)
	{		
		
		var sarpe = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");	
		sarpe.setAttribute("cx", e.changedTouches[i].pageX);  
		sarpe.setAttribute("cy", e.changedTouches[i].pageY - svg_rect.top);
		sarpe.setAttribute("rx", 120);
		sarpe.setAttribute("ry", 60);
		sarpe.setAttribute("fill", color);
		svg.appendChild(sarpe);

	}

}
	
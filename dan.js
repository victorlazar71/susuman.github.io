document.getElementById("id_logic_version").innerHTML = "Logic version: 2019.02.11.0";

var svg = document.getElementById("id_svg");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);
svg.addEventListener("touchend", on_touch_end);

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
		
		var marcare = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");	
		marcare.setAttribute("cx", e.changedTouches[i].pageX);  
		marcare.setAttribute("cy", e.changedTouches[i].pageY - svg_rect.top);
		marcare.setAttribute("rx", 120);
		marcare.setAttribute("ry", 60);
		marcare.setAttribute("fill", color);

	}

}	
document.getElementById("id_logic_version").innerHTML = " Logic version 2019.05.02.2";

var svg = document.getElementById("id_svg");
//var stea = document.getElementById("id_circle");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_mouse_svg);

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var stea = document.createElementNS("http://www.w3.org/2000/svg", "polygon"); //creare element cerc in cazul nostru
		cerc.setAttribute("cx", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		cerc.setAttribute("cy", e.changedTouches[i].pageY - svg_rect.top);
		cerc.setAttribute("r", 20);
		svg.appendChild(cerc);  // adaugare in svg ca si "copil" (subelement)

}
}
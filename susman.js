document.getElementById("id_logic_version").innerHTML = " Logic version 2019.05.02.0";

var svg = document.getElementById("id_svg");
//var stea = document.getElementById("id_circle");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var stea = document.createElementNS("http://www.w3.org/2000/svg", "polygon"); //creare element cerc in cazul nostru
		stea.setAttribute("points", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		stea.setAttribute("points", e.changedTouches[i].pageY - svg_rect.top);
		//stea.setAttribute("points", 20);
		svg.appendChild(stea);  // adaugare in svg ca si "copil" (subelement)

}
}
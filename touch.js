document.getElementById("id_logic_version").innerHTML = "Logic: 2019.01.08.0";
var svg = document.getElementById("id_svg");

svg.addEventListener("mousedown", on_touch_svg);

function on_touch_svg(e)
{
	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var cerc = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //creare element cerc in cazul nostru
		cerc.setAttribute("cx", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
cerc.setAttribute("cy", e.changedTouches[i].pageY);
cerc.setAttribute("r", 20);
svg.appendChild(cerc);  // adaugare in svg ca si "copil" (subelement)

}
}
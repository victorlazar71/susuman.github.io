document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.3";
var svg = document.getElementById("id_svg");
var cerc = document.getElementById("id_circle");

cerc.addEventListener("touchstart", on_touch);
var svg_rect = svg.getBoundingClientRect();
<audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autoplay="false" ></audio>
var sound = document.getElementById("audio");

function on_touch(e)
{
	var x = "#00ff00";
	e.preventDefault();
	//cerc.setAttribute("cx", e.changedTouches[0].pageX);
	//cerc.setAttribute("cy", e.changedTouches[0].pageY - svg_rect.top);
	cerc.setAttribute("fill", x);
	sound.play();
}

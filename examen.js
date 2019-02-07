document.getElementById("id_logic_version").innerHTML = "Logic version: 2000.00.00.2";

var svg = document.getElementById("id_svg");
var zxc = document.getElementById("anime");
var sound = document.getElementById("audio");
var sound_c = document.getElementById("audio_c");

svg.addEventListener("touchstart", on_touch_svg);
svg.addEventListener("mousedown", on_touch_svg);
svg.addEventListener("touchend", on_touch_end);

var svg_rect = svg.getBoundingClientRect();
var nr = 0;


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
	
	for (var i = 0; i < e.changedTouches.length; i++)
	{		
		var color = genereaza_culoare();
		var cub = document.createElementNS("http://www.w3.org/2000/svg", "rect");	
		cub.setAttribute("x", e.changedTouches[i].pageX);  //atributele cercului cu valorile din paranteze
		cub.setAttribute("y", e.changedTouches[i].pageY - svg_rect.top);
		cub.setAttribute("width", 120);
		cub.setAttribute("height", 50);
		cub.setAttribute("fill", color);
		svg.appendChild(cub);  // adaugare in svg ca si "copil" (subelement)
	  document.getElementById("anime") = cub;
	  sound.play();
	  if(color == "#0f0f00")
	  {
		  
		  nr++;
	  }
	  
}
if(nr == 10)
{
	alert("ai gasit 10 euro");
	sound_c.play();
}
}

function on_touch_end() {
  var elem = zxc;
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == width) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'width'; 
      elem.style.left = pos + 'width'; 
    }
  }
}
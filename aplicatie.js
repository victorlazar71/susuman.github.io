document.getElementById("id_logic_version").innerHTML = "Logic Version: 2000.00.00.0");

function init()
{
	picture = document.getElementById("stea");
	spaceW = screen.height - picture.height;
	spaceH = screen.width - picture.width;
	setInterval(moveIt, 500);
	
}

function misca()
{
	picture.style.top = Math.round(Math.random() * spaceW) + "px";
	picture.style.left = Math.round(Math.random() * spaceH) + "px";
}
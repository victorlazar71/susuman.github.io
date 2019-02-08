document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.0";

var svg = document.getElementById("id_svg");
var site_html = document.getElementById("id_html");
var site_java = document.getElementById("id_java");
var DBS = document.getElementById("id_DBS");

site_html.addEventListener("touchstart", on_touch_one);
site_java.addEventListener("touchstart", on_touch_two);
DBS.addEventListener("touchstart", on_touch_tree);

var svg_rect = svg.getBoundingClientRect();

function on_touch_one(e)
{
	if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
	}
	else
	{
		alert("ai apasat anulare");
	}
		
window.open("https://www.w3schools.com");
alert("ai accesat pagina html5");
}

function on_touch_two(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://www.java.com/en/");
alert("ai accesat pagina javascript");
}

function on_touch_tree(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://screenrant.com/tag/dragonball/");
alert("ai accesat pagina dragon ball");
}
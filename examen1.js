document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.0";

var svg = document.getElementById("id_svg");
var site_html = document.getElementById("id_html");
var site_java = document.getElementById("id_java");
var monitorizare_gps= document.getElementById("id_NIXE");
var service_auto = document.getElementById("id_NIXE");
var verificare_alimentare = document.getElementById("id_NIXE");

site_html.addEventListener("touchstart", on_touch_one);
site_java.addEventListener("touchstart", on_touch_two);
monitorizare_gps.addEventListener("touchstart", on_touch_tree);
service_auto.addEventListener("touchstart", on_touch_tree);
verificare_alimentare.addEventListener("touchstart", on_touch_tree);

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
	
window.open("https://fise.i-track.ro/_layouts/login.aspx?ReturnUrl=%2f");
alert("ai accesat pagina de monitorizare prin GPS a vehiculelor auto");
}

function on_touch_four(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://www.fleet1.ro/");
alert("ai accesat pagina de programare la service auto sau pentru a comanda pise de schimb");
}

function on_touch_five(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://fleet.omv.com/FleetServicesProduction/Login.jsp");
alert("ai accesat pagina de monitorizare a carburantului incarcat in masini");
}
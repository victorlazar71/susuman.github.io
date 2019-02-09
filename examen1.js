document.getElementById("id_logic_version").innerHTML = "Logic: 2019.02.11.2";

var svg = document.getElementById("id_svg");
var site_html = document.getElementById("id_html");
var site_java = document.getElementById("id_java");
var monitorizare_gps= document.getElementById("id_NIXE");
var service_auto = document.getElementById("id_calamajor");
var verificare_alimentare = document.getElementById("id_Valdemosa");

site_html.addEventListener("touchstart", on_touch_one);
site_java.addEventListener("touchstart", on_touch_two);
monitorizare_gps.addEventListener("touchstart", on_touch_tree);
service_auto.addEventListener("touchstart", on_touch_four);
verificare_alimentare.addEventListener("touchstart", on_touch_five);

var svg_rect = svg.getBoundingClientRect();

function on_touch_one(e)
{
	if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
		alert("ai accesat pagina html5");
	}
	else
	{
		alert("ai apasat anulare");
	}
		
window.open("https://www.w3schools.com");
}

function on_touch_two(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
		alert("ai accesat pagina javascript");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://www.java.com/en/");
}

function on_touch_tree(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
		alert("ai accesat pagina de monitorizare prin GPS a vehiculelor auto");
	}
	else
	{
		alert("ai apasat anulare");
	}
window.open("https://fise.i-track.ro/_layouts/login.aspx?ReturnUrl=%2f");
}

function on_touch_four(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
		alert("ai accesat pagina de programare la service auto sau pentru a comanda pise de schimb");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://www.fleet1.ro/");

}

function on_touch_five(e)
{
		if(confirm("esti sigur ca vrei sa accesezi aceasta pagina??"))
	{
		alert("ai apasat OK");
		alert("ai accesat pagina de monitorizare a carburantului incarcat in masini");
	}
	else
	{
		alert("ai apasat anulare");
	}
	
window.open("https://fleet.omv.com/FleetServicesProduction/Login.jsp");
}
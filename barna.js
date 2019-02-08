document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.1";

function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}

var c2 = document.getElementById("canvas");

    var c2_context = c2.getContext("2d");
    function blue_square() 
	{ //Blue color square
	var a = genereaza_culoare();
      c2_context.fillStyle = a;
      c2_context.fillRect(100, 100, 100, 100);
   }

   
   function red_stroke() 
   { //Red color edges
   var z = genereaza_culoare();
      c2_context.strokeStyle = z;
      c2_context.strokeRect(95, 95, 110, 110);
   }
   
   function clear_rect() 
   { //Clear all
      c2_context.clearRect(90, 90, 120, 120);
   }
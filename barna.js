document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.3";

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
	{ 
	var a = genereaza_culoare();
      c2_context.fillStyle = a;
      c2_context.fillRect(100, 100, 100, 100);
   }

   
   function red_stroke() 
   { 
   var z = genereaza_culoare();
   c2_context.lineWidht = 100;
      c2_context.strokeStyle = z;
      c2_context.strokeRect(95, 95, 110, 110);
	  c2_context.stroke();
	  
   }
   
   function clear_rect() 
   { 
      c2_context.clearRect(90, 90, 120, 120);
   }
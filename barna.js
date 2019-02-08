document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.5";

	var c2 = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
	
function genereaza_culoare()
{
	var sir = "#";
	var litere = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		sir += litere[Math.ceil(Math.random() * 16)];
	return sir;
}
	
    function blue_square() 
	{ 
	  var a = genereaza_culoare();
      ctx.fillStyle = a;
      ctx.fillRect(100, 100, 100, 100);
	  ctx.stroke();
   }

   
   function red_stroke() 
   { 
	  var z = genereaza_culoare();
	  ctx.lineWidht = 100;
      ctx.strokeStyle = z;
      ctx.strokeRect(95, 95, 110, 110);
	  ctx.stroke();
	  
   }
   
   function clear_rect() 
   { 
      ctx.clearRect(90, 90, 120, 120);
   }
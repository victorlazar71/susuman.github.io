document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.4";

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
      ctx.fillRect(112.5, 112.5, 200, 200);
   }

   
   function red_stroke() 
   { 
	  var z = genereaza_culoare();
	  ctx.lineWidth = 12;
      ctx.strokeStyle = z;
      ctx.strokeRect(100, 100, 225, 225);
	  
   }
   
      
   function cerc() 
	{ 
	  var a = genereaza_culoare();
      ctx.fillStyle = a;
      ctx.arc(112.5, 112.5, 20, 0, 2 * Math.PI);
   }
   
   function stroke() 
	{ 
	  var a = genereaza_culoare();
      ctx.fillStyle = a;
      ctx.fillCircle(112.5, 112.5, 200, 200);
   }
   
   function clear_rect() 
   { 
      ctx.clearRect(90, 90, 250, 250);
	  alert("ai sters desenul");
   }
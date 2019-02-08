document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.1";

var c2 = document.getElementById("canvas");

    var c2_context = c2.getContext("2d");
    function blue_square() 
	{ //Blue color square
      c2_context.fillStyle = "#00f";
      c2_context.fillRect(100, 100, 100, 100);
   }
   function blue_square() 
   { //Blue color square
	  c2_context.fillStyle = "#f00";
      c2_context.fillRect(100, 100, 100, 100);
   }
   function blue_square() 
   { //Blue color square
	  c2_context.fillStyle = "#0f0";
      c2_context.fillRect(100, 100, 100, 100);

   }
   
   function red_stroke() { //Red color edges
      c2_context.strokeStyle = "#f00";
      c2_context.strokeRect(95, 95, 110, 110);
   }
   
   function clear_rect() { //Clear all
      c2_context.clearRect(90, 90, 120, 120);
   }
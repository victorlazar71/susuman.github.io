document.getElementById("id_logic_version").innerHTML = "Logic Version 2000.00.00.0";

var c2 = document.getElementById("c2");

    var c2_context = c2.getContext("2d");
    function blue_square_2() { //Blue color square
      c2_context.fillStyle = "#00f";
      c2_context.fillRect(50, 50, 100, 100);
   }
   
   function red_stroke_2() { //Red color edges
      c2_context.strokeStyle = "#f00";
      c2_context.strokeRect(45, 45, 110, 110);
   }
   
   function clear_rect_2() { //Clear all
      c2_context.clearRect(40, 40, 120, 120);
   }
document.getElementById("id_logic_version").innerHTML = "Logic version : 2018.11.06"

window.addEventListener("deviceorientaion", la_schimbare_gyro);

function la_schimbare_gyro(e)
{
  document.getElementById("id_x").innerHTML = e.beta;
  document.getElementById("id_y").innerHTML = e.gamma;
  document.getElementById("id_z").innerHTML = e.alpha;
  }

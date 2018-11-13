document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.4";

document.getElementById("id_video").addEventListener("mousedown", on_touch); //printscr la clic
document.getElementById("id_video").addEventListener("touchstart", on_touch); //printscr la atingere pe telefon


function on_OK(stream)
{
  document.getElementById("id_video").srcObject = stream; //preluare si redare video
  
}

function on_error(e)
{
  //console.log("eroare camera");
  alert("eroare camera");



}

function start()
{
  var p = {audio:true, video:true};
  navigator.mediaDevices.getUserMedia(p).then(on_OK).catch(on_error);

}

function on_touch(e)
{
  var canvas = document.getElementById("id_canvas"); //pentru luarea imagini
  var context = canvas.getContext("2d"); //afisarea ei in plan 2d
  
  var video = document.getElementById("id_video"); //preluarea imagini din video
  context.drawImage(video, 0, 0); //afisarea ei in plan 2d
  
}

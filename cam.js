document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.2";

document.getElementById("id_video").addEventListener("mousedown", on_touch);
document.getElementById("id_video").addEventListener("touchstart", on_touch);


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
  var canvas = document.getElementById("id_canvas");
  var context = document.getContext("2d");
  
  var video = document.getElementById("id_video");
  context.drowImage(video, 0, 0);
}

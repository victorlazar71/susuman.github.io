document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.0";


function on_OK(e)
{
  document.getElementById("id_video").srcObject = e;
  
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

document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.11.13.0";


function on_OK(e)
{
  document.getElementById("id_video")
  
}

function on_error(e)
{




}

function start()
{
  navigator.mediaDevices.getUserMedia().then(on_OK).catch(on_error);

}

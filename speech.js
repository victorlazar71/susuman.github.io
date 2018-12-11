document.getElementById("id_logic_version").innerHTML = "Logic version: 2018.12.11.1";

var speech = new webkitSpeechRecognition();
speech.onresult = on_result;
speech.onspeechend = on_speech_end;
speech.lang = "en-US";

function speack()
{
  speech.start();
}

function on_speech_end()
{
  speech.stop();
}

function on_result()
{
  document.getElementById("id_text").innerHTML = e.results[0][0].transcript + "("+ e.results[0][0].confidence + ")";
  }

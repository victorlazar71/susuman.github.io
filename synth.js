document.getElementById("id_logic_version").innerHTML = "Logic version = 2018.12.04.0";

function afiseaza_voci()
{
	var synth = window.speechSunthesis;
	var lista_voci = synth.getVoices();
	
	for(var i==0; i < lista_voci.lenght; i++)
	document.getElementById("id_voci").innerHTML += lista_voci[i].lang + "  " + lista_voci[i].name + "<br>"; //+= este concatenare  /// <br> reprezinta new line dar trb pus la sfarsitul liniei actuale
	
}
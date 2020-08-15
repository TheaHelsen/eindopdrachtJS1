"use strict";


let zinTxt;
let woordTxt;
let vervangWoordTxt;
let woordLengte;
let vervangZin;

function vervangWoord(txt) {
	woordTxt = document.getElementById('woord').value;
	let locatie =  txt.indexOf(woordTxt);
	if (locatie == -1) {
		vervangWoordTxt = document.getElementById('vervangzin').innerHTML='Dit woord is niet gevonden';
	}
	else {
		woordLengte  = woordTxt.length;
		if (woordLengte == 0) {
			vervangZin = txt;
		}
		else {
			vervangWoordTxt = document.getElementById('vervangwoord').value;
			vervangZin = txt.substring(0,locatie) + vervangWoordTxt + txt.substring(locatie+woordLengte); 
		}
		vervangWoordTxt = document.getElementById('vervangzin').innerHTML=vervangZin;
	}
}


function Verzend() {
	
	zinTxt = document.getElementById('zin').value;
	if (zinTxt.length == 0) {
		alert('U heeft geen zin ingegeven');
	}
	else {
		vervangWoord(zinTxt);
	}


}
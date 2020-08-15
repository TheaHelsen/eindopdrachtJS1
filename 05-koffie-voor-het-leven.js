"use strict";

berekenHoeveelheid();

function tonen(getal1,getal2,getal3){

	let nu = new Date();
	let jaar = nu.getFullYear();
	let leeftijd = jaar - getal1;
	let tassen = (getal2 - leeftijd) * getal3 * 365;
	alert ('Je bent nu '+ leeftijd +'. Tegen ' + getal3 + ' koppen koffie per dag zal je ' + tassen + 
		' koppen koffie drinken als je ' + getal2 + ' jaar oud zal worden.');
}

function berekenHoeveelheid() {
	let gebJaar = prompt('In welk jaar ben je geboren?');
	let ouderdom = prompt('Hoe oud denk je te worden?');
	let aantalTassen = prompt('Hoeveel tassen koffie drinkt u per dag?');

	if (gebJaar == null || ouderdom == null || aantalTassen == null ||
		gebJaar.length == 0 ||  ouderdom.length == 0 || aantalTassen == 0 ||
		gebJaar.search(/^\d{4}$/) == -1 || ouderdom.search(/^\d+$/) ==-1 || aantalTassen.search(/^\d+$/) == -1) {

		alert ('u heeft niet alle gegevens correct ingevuld.');
}
else tonen(gebJaar,ouderdom,aantalTassen);
}

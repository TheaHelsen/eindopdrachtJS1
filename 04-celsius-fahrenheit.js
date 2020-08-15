"use strict";
function controle(graden) {
	let gradenOK = true;
	if (graden == null || graden.length == 0 || graden.search(/^-*\d+$/) == -1) {
		gradenOK = false;
	}
	return gradenOK;
}

function RekenCF() {
	let gradenCelsius = prompt ('Geef het aantal °C op om te zetten naar °F.');
	let gradenOK = controle(gradenCelsius);

	if (gradenOK) {
		let gradenFahrenheit = gradenCelsius*9/5 + 32;
		alert (gradenCelsius + ' °C is ' + gradenFahrenheit.toFixed(2) + ' °F');}
	else {alert('Dit was een verkeerde ingave');}

}

function RekenFC() {
	let gradenFahrenheit = prompt ('Geef het aantal °F op om te zetten naar °C.');
	let gradenOK = controle(gradenFahrenheit);

	if (gradenOK) {
		let gradenCelsius = (gradenFahrenheit-32)*5/9;
		alert (gradenFahrenheit + ' °F is ' + gradenCelsius.toFixed(2) + ' °C');}
	else {alert('Dit was een verkeerde ingave');}
	
}
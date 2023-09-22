/**
 * Alarm
Write a program that asks a user for the amount of seconds 
needed until an alarm (message) is executed alongside a 
text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
 * 
 */

//Se pregunta al usuario cuantos segundos necesita.
let segundos = prompt("¿Cuantos segundos necesitas antes de la alarma?");
//Se hace una operacion para pasar milisegundos a segundos.
let segundosBien = segundos * 1000;

//Se ocupa setTimeout y se pone el mensaje en un alert
setTimeout(() => alert(`Time for bed after ${segundosBien} seconds`), segundosBien);

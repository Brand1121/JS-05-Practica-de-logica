/**
 * Highest number
Write a program that asks for 10 numbers. Using 
logical operators and any other javascript 
functions/structures you've seen before, 
determine and output the highest of those numbers.
 * 
 */

//Se declara un array
let numeros = [];

function Number (){
    for(let i = 0; i < 10; i++){
        let ingresaNumero = prompt("Ingresa un numero");
        ingresaNumero = numeros.push(ingresaNumero);
        numeros.push(parseFloat(ingresaNumero)); // convierte los valores ingresados a numeros
    }
    const numeroGrande = Math.max(...numeros); //Encuentra el numero mas grande en en array
    console.log(`El numero mas grande es: ${numeroGrande}`);
}
Number();

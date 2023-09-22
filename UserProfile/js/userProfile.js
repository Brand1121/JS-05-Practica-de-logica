/**
 * User profile
Write a program that prompts a user for their data: username, age, and a list 
of their favorite movies. Store the information and then showcase it in the 
console. Take note that the output for the films should add a small message 
like: 'The film {film} is one of my favorites'.
 * 
 */

//Datos a ingresar por usuario.
let userName = prompt('Por favor ingresa tu "Nombre de Usuario":');
let edad = prompt('Por favor ingresa tu edad:');
let peliculas = prompt('Escribe peliculas (separadas por comas):');

//Divide las cadenas de texto en un array de subcadenas
let movieArray = peliculas.split(',');

//Muestra en consola los datos ingresados
console.log(`Tu nombres es: ${userName}`);
console.log(`Tu edad es: ${edad}`);
movieArray.forEach(film => console.log(`The film ${film} is one of my favorites`))


/**
 * 
 * Factorial
Write a program that prompts for an intenger number 
n. Where  1 <= n. Solve this using recursion.
 * 
 */

//Se le pide al usuario un numero para calcular factorial
let numeroFactorial = prompt("Ingreso numero para calcular el factorial");

//Inicia funcion para calcular factorial
function factorial (numeroFactorial){
    if(numeroFactorial === 0 || numeroFactorial === 1){ //Si el numero es 0 o 1 retornara 1
        return 1;
    }else{
        return numeroFactorial* factorial(numeroFactorial-1); // Se llama a ala funcion
    }                            // y se multiplica por la funcion factorial pero con la
                                //resta del parametro -1 y asi se logra la recursividad                           
}

let resultado = factorial(numeroFactorial);
alert(`El resultado del factorial del numero ${numeroFactorial} es: ${resultado}`);
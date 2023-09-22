/**
 * 
 * Flat array
Write a program that takes the following nested matrix and 
flattens it (makes it a 1D array). Use any type of algorithm 
you want like callbacks, recursion, etc...
 * 
 */

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function flatArray(multiDimension) {
    const arrayVacio = [];
  
    function recursivFlat(arrayD) {
        //For para recorrer los elementos de la matriz "ArrayD"
      for (const valor of arrayD) { 
        // Condicion donde verifica si "Valor" es una matriz
        if (Array.isArray(valor)) { 
            //Si si es una matriz se llama recursivamanete a la funcion
          recursivFlat(valor);
          //Si no es una matriz, se hace un push en arrayVacio
        } else {
          arrayVacio.push(valor);
        }
      }
    }
  
    recursivFlat(multiDimension);
    return arrayVacio;
  }
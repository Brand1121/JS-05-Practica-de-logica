function palindrome(word) {
    //Elimina espacios y convierte la palabra en minusculas
    const palindrom = deletSpace(word).toLowerCase(); 
    word = word.replace(/[^a-zA-z]/g, '').toLowerCase(); //Elimina los caracteres que no son letras
    if (palindrom == word) { //Compara la palabra original con la version invertida y sin espacios
        console.log('La palabra si es palindromo');
    } else {
        console.log('La palabra no es palindromo');
    }
}

function deletSpace(aux) {
    // Elimina caracteres que no sean letras
    const letters = aux.replace(/[^a-zA-z]/g, '');
    // Invierte la cadena de texto
    const investText = investString(letters);
    console.log('Palabra original: ' + aux);
    console.log('Palabra invertido: ' + investText);
     // Devuelve la cadena invertida y sin espacios
    return investText;
}

function investString(aux) {
    // Convierte la cadena en un arreglo de caracteres, invierte el orden y lo convierte de nuevo a una cadena
    return aux.split('').reverse().join('');
}
/*escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas. 
Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia".*/

let texto = "prince of persia";
let resultado = convertirPrimeraLetra(texto);
console.log(resultado); 

function convertirPrimeraLetra(tx){

    return tx.split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');

}
/* escriba una función de JavaScript que devuelva una cadena en orden alfabético.
Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'
La puntuación y los números no se pasan en la cadena.*/

let cadena = 'webmaster';
let resultado = ordenarCadena(cadena);
console.log(resultado); 


function ordenarCadena(cadena) {
    let soloLetras = cadena.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let arreglo = soloLetras.split('');
    arreglo.sort();
    return arreglo.join('');
}



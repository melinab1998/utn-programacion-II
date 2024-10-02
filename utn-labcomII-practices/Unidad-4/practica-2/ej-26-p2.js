/*escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.*/

let numero = 32443;

invertirNumero(numero);

function invertirNumero(n){

    let numeroInvertido = n.toString().split('').reverse().join('');
    return console.log(parseInt(numeroInvertido));

}

/*Escriba una función que reciba dos parámetros, una array y un índice. 
La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola.
Por ejemplo, dada la siguientearray e índice, 
la función imprimirá '6'. var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;*/

let arreglo = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let i=4;

imprimirValor(arreglo, i);

function imprimirValor(arr, i){

    return console.log(arr[i-1]);

}
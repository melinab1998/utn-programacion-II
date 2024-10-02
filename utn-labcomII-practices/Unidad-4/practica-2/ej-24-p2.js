/*Escriba una función que reciba una array y solo imprima los valores que se repiten. 
Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'. 
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; */

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

imprimirRepetidos(array);

function imprimirRepetidos(arr){

let repetidos = []; 

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] === arr[j] && !repetidos.includes(arr[i])) {
            repetidos.push(arr[i]); 
    }
}
}

console.log("Los valores que se repiten son:", repetidos.join(', '));

}
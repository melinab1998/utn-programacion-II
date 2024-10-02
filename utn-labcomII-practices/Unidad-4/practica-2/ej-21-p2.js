/* escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola.*/

numeros = [9,6,7,11,20,24,28];

numeroMasBajo(numeros);

function numeroMasBajo(numeros){

    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if(numeros[i]<menor){
            menor = numeros[i];
        }

    }

    return console.log("El número más bajo del arreglo es: ", menor);

}
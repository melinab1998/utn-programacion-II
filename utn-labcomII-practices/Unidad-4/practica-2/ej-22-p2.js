/* escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.*/

numeros = [9,6,7,11,20,32,28];

numeroMasAlto(numeros);

function numeroMasAlto(numeros){

    let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        if(numeros[i]>mayor){
            mayor = numeros[i];
        }

    }

    return console.log("El número más alto del arreglo es: ", mayor);

}
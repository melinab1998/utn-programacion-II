/* escriba una función de JavaScript que busque la palabra más larga de una frase. 
Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".*/

let frase = "Tutorial de desarrollo web";
let resultado = encontrarPalabraMasLarga(frase);
console.log(resultado); 

function encontrarPalabraMasLarga(frase) {

    let palabras = frase.split(' ');
    let palabraMasLarga = '';

    for (let palabra of palabras){
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
}
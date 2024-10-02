// Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.

let numero = parseFloat(prompt("Ingrese un número: "));
let numeroDos = parseFloat(prompt("Ingrese otro número: "));

calcularMaximo(numero, numeroDos)

function calcularMaximo(n1,n2){

    if(n1>n2){
        alert("El máximo es: " + n1)
    }else{
        alert("El máximo es: " + n2)
    }

}
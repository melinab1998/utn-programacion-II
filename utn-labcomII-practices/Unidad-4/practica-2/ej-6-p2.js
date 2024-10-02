/*Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del numero 
ingresado como parámetro elevado al cuadrado.*/

let numero = parseFloat(prompt("Ingrese un número: "));

alert("El cuadrado del número ingresado es: " + cuadrado(numero));

function cuadrado(n){
    return n**2;
}
/*Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.*/

let numero = parseFloat(prompt("Ingrese un número: "));

alert("El doble del número ingresado es: " + doble(numero));

function doble(n){
    return n*2;
}
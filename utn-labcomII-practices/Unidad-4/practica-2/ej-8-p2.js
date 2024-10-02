/*Una función que se denomine imprimirElDobleDelSiguiente que dado un número por parámetro, 
imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) : siguiente, el doble .*/

let numero = parseInt(prompt("Ingrese un número: "));
imprimirElDobleDelSiguiente(numero);

function siguiente(n){
    return n+1;
}

function doble(n){
    return n*2;
}

function imprimirElDobleDelSiguiente(n){
    alert("El doble del siguiente del número ingresado es: " + doble(siguiente(n)));
}
/*Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por parámetro, 
imprima cual es el valor siguiente al el doble. Usando las funciones definidas en los puntos 5) , 6) y 7): 
siguiente, el doble y el cuadrado*/


let numero = parseInt(prompt("Ingrese un número: "));
imprimirElDobleDelSiguienteAlCuadrado(numero);

function doble(n){
    return n*2;
}

function cuadrado(n){
    return n**2;
}

function siguiente(n){
    return n+1;
}

function imprimirElDobleDelSiguienteAlCuadrado(n){
    return alert("El doble del siguiente al cuadrado del número ingresado es: " + cuadrado(doble(siguiente(n))));
}
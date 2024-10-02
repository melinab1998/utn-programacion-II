/*Una función que se denomine imprimirValores que dado un número por parámetro, 
imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas en los 
puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.*/ 

let numero = parseInt(prompt("Ingrese un número: "));
imprimirValores(numero);

function doble(n){
    return n*2;
}

function cuadrado(n){
    return n**2;
}

function siguiente(n){
    return n+1;
}

function imprimirValores(n){
    let mensaje = 
    "El siguiente del número es: " + siguiente(n) + "\n" +
    "El doble del número es: " + doble(n) + "\n" +
    "El cuadrado del número es: " + cuadrado(n);
    alert(mensaje);
}
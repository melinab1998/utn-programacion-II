// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero = parseFloat(prompt("Ingrese un número: "));
let numero2 = parseFloat(prompt("Ingrese otro número: "));

if (numero > numero2) {
    document.write("El mayor número es: " + numero);
} else if (numero < numero2) {
    document.write("El mayor número es: " + numero2);
} else {
    document.write("Ambos números son iguales.");
}
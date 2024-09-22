/*  Realizar una página con un script que calcule el valor de la letra de un número de 
DNI (Documento Nacional de Identidad). El algoritmo para calcular la letra del dni es el siguiente : 
● El número debe ser entre 0 y 99999999 ● Debemos calcular el resto de la división entera entre el número y el número 23. 
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N,
J, Z, S, Q,V, H, L, C, K, E) ● Si lo introducido no es un número deberá indicarsecon un alert y volver a preguntar. 
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/


let dni;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

do {
    dni = prompt("Ingrese su DNI (entre 0 y 99999999):");

    if (dni !== null) {
        if (isNaN(dni)) {
            alert("Debe ingresar un número válido.");
        } 
        else if (dni < 0 || dni > 99999999) {
            alert("Debe ingresar un número entre 0 y 99999999.");
        } 
        else {
            let numeroDni = parseInt(dni);
            let resto = numeroDni % 23;
            let letraDni = letras[resto];
            alert("El DNI " + numeroDni + " tiene la letra: " + letraDni);
        }
    }

} while (dni !== null);
// Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.

let cadenas = [];
let input;

do {
    input = prompt("Ingrese una cadena de texto (o presione cancelar para salir): ");
    if (input !== null) {
        cadenas.push(input);
    }
} while (input !== null);

alert(cadenas.join("-"));
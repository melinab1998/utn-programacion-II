/*Realiza un script que pida números hasta quese pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
y seguir pidiendo.Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let numero;
let suma = 0;

do {
    numero = prompt("Ingrese un número:");

    if (numero !== null) {
        if (isNaN(numero)) {
            alert("Debe ingresar un número válido.");
        } else {
            suma += parseFloat(numero);
        }
    }

} while (numero !== null);

alert("La suma total de números es: " + suma);
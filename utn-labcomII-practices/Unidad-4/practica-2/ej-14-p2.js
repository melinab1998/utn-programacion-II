/*Una función que dado un número de mes y me devuelva la cantidad de días de ese mes (suponiendo que no es un año bisiesto).*/

let mes = parseInt(prompt("Ingrese un número de mes: (1-12)"));
diasDeUnMes(mes);

function diasDeUnMes(mes) {

    if (mes < 1 || mes > 12) {
        return alert("El número ingresado no es válido. Debe ser un número entre 1 y 12.");
    }

    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        return alert("El mes tiene 31 días.");
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        return alert("El mes tiene 30 días.");
    } else if (mes == 2) {
        return alert("El mes tiene 28 días.");
    }
    
}
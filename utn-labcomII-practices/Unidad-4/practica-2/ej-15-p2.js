/*Una función que reciba como parámetro un año y diga si ese año es bisiesto.*/

let año = parseInt(prompt("Ingrese un año: "));

esBisiesto(año);

function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        alert(año + " es un año bisiesto.");
    } else {
        alert(año + " no es un año bisiesto.");
    }
}
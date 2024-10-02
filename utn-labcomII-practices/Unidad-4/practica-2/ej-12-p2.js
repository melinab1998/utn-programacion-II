/*Una función que dado el radio de un círculo devuelva la circunferencia (perímetro del círculo).*/

let radio = parseFloat(prompt("Ingrese el radio de un círculo: "));

circunferencia(radio);

function circunferencia(r){
    return alert("El perímetro del círculo ingresado es: " + (2*Math.PI*r));
}
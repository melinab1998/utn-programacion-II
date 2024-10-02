/*Una función que dado el radio de un círculo devuelva el área del círculo.*/

let radio = parseFloat(prompt("Ingrese el radio de un círculo: "));

area(radio);

function area(r){
    return alert("El área del círculo ingresado es: " + ((r**2)*Math.PI));
}
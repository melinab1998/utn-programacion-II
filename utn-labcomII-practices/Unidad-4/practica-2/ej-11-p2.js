/*Una función que dado la longitud de un lado de un cuadrado devuelva la superficie.*/

let lado = parseFloat(prompt("Ingrese la longitud del lado de un cuadrado: "));

superficie(lado);

function superficie(l){
    return alert("La superficie del cuadrado ingresado es: " + l*l);
}
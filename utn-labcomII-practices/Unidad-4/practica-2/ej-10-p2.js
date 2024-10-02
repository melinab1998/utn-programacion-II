/*Una función que dado la longitud de un lado de un cuadrado devuelva el perímetro*/ 

let lado = parseFloat(prompt("Ingrese la longitud del lado de un cuadrado: "));

perimetro(lado);

function perimetro(l){
    return alert("El perímetro del cuadrado ingresado es: " + l*4);
}
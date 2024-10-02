/*Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, 
el siguiente mensaje: “Bienvenidos al curso Full Stack”*/

let n = parseInt(prompt("Ingrese un número: "));

mostrarMensaje(n);

function mostrarMensaje(numero) {
    for (let i = 0; i < numero; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}
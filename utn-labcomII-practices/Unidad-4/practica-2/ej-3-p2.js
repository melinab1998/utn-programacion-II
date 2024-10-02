/*Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.*/

let numero = parseFloat(prompt("Ingrese un número: "));
let numeroDos = parseFloat(prompt("Ingrese otro número: "));
let numeroTres = parseFloat(prompt("Ingrese otro número: "));

let promedio = promedio3(numero, numeroDos, numeroTres)

alert("El promedio es: " + promedio)

function promedio3(n1,n2,n3){
    return (n1+n2+n3)/3
}

/*Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente*/

let numero = parseFloat(prompt("Ingrese su nota: "));

if (numero < 0 || numero > 10) {
    alert("Nota fuera de rango. Debe estar entre 0 y 10.");
} else if (numero >= 0 && numero < 3) {
    alert("Muy deficiente");
} else if (numero >= 3 && numero < 5) {
    alert("Insuficiente");
} else if (numero >= 5 && numero < 6) {
    alert("Suficiente");
} else if (numero >= 6 && numero < 7) {
    alert("Bien");
} else if (numero >= 7 && numero < 9) {
    alert("Notable");
} else if (numero >= 9 && numero <= 10) {
    alert("Sobresaliente");
}

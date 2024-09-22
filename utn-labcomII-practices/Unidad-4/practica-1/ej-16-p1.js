//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados


let numero = parseInt(prompt("Ingrese un número: "));

let numero2 = parseInt(prompt("Ingrese otro número: "));

let divisores1 = [];
let divisores2 = [];

for (let i = 1; i <= numero; i++){

    if(numero%i==0){
        divisores1.push(i);
    }

}

for (let i = 1; i <= numero; i++){

    if(numero2%i==0){
        divisores2.push(i);
    }

}

let divisoresComunes = divisores1.filter(divisor => divisores2.includes(divisor));

if (divisoresComunes.length > 0) {
    alert("Los divisores comunes son: " + divisoresComunes.join(", "));
} else {
    alert("No hay divisores comunes.");
}
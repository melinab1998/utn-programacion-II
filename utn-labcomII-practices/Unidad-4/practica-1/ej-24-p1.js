/*Haz un script que escriba una pirámide inversade los números del 1 al número que indique el usuario de la siguiente forma: 
(suponiendo que indica 6). 666666 55555 4444 333 22 1*/ 

let numero = parseInt(prompt("Ingrese un número: "));

for (let i = numero; i >= 1; i--){
    let fila = ""; 
    for (let j = i; j >= 1; j--) {
        fila += i;  
    }
    document.write(fila + "<br>");  
}


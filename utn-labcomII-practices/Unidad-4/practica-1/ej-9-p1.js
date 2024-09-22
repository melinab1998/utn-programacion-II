// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

let frase = prompt("Ingrese una frase: ").toLowerCase();

let contador = 0;

for (let index = 0; index < frase.length; index++) {

    if(frase[index]=="a"){
        contador++;
    }   
}

document.write("La letra 'A' aparece " + contador + " veces.");
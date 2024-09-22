//Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

let frase = prompt("Ingrese una frase: ").toLowerCase();

let contador = 0;

for (let i = 0; i < frase.length; i++) {

    if ("aeiou".includes(frase[i])) {
        contador++;
    }

}

document.write("La cantidad de vocales en la frase son: " + contador);
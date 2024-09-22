//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

let frase = prompt("Ingrese una frase: ").toLowerCase();

let contadorA = 0; let contadorE = 0; let contadorI= 0; let contadorO = 0; let contadorU = 0;

for (let i = 0; i < frase.length; i++) {

    if("a".includes(frase[i])){
        contadorA++;
    }

    if("e".includes(frase[i])){
        contadorE++;
    }

    if("i".includes(frase[i])){
        contadorI++;
    }

    if("o".includes(frase[i])){
        contadorO++;
    }

    if("u".includes(frase[i])){
        contadorU++;
    }
}

document.write("La letra A aparece " + contadorA + " veces. ");
document.write("La letra E aparece " + contadorE + " veces. ");
document.write("La letra I aparece " + contadorI + " veces. ");
document.write("La letra O aparece " + contadorO + " veces. ");
document.write("La letra U aparece " + contadorU + " veces. ");
// Escribe un programa que pida una frase y escriba las vocales que aparecen.

let frase = prompt("Ingrese una frase: ").toLocaleLowerCase();

let vocales = "";

for (let i = 0; i < frase.length; i++) {
    
    let letra = frase[i];
    if ("aeiou".includes(letra)) { 
        vocales += letra + " "; 
    }
}

if (vocales.length === 0) {
    document.write("No se encontraron vocales en la frase.");
} else {
    document.write("Las vocales que aparecen en la frase son: " + vocales);
}
/*escriba una función de JavaScript simple para unir todos los elementos de la siguiente 
array en una cadena. myColor = ["Red", "Green", "White", "Black"]; 
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco", "Negro"*/

let myColor = ["Red", "Green", "White", "Black"];

unirElementos(myColor);

function unirElementos(arr){

    let cadena = arr.join(", ");

    return console.log(cadena);
}
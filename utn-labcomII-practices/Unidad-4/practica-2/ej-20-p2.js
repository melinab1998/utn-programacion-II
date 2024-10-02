/*Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares. 
Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".*/ 

let edades = [18, 20, 22, 19, 21, 23, 18, 20];

for (let i = 0; i < edades.length; i++) {
    
    if(edades[i]%2==0){
        console.log("Edad del estudiante: ", edades[i]);
    }
    
}

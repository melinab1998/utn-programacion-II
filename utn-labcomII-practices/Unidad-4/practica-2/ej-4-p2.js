/*Crear una función que lea notas hasta que ingrese-1 y devuelve el promedio de las notas leídas. 
( aunque no se suele leer valores en una función) Una función que se llame siguiente, que reciba como parámetro
un valor entero, y devuelva el siguiente del número ingresado como parámetro*/ 


let promedio = promedioNotas();
alert("El promedio de notas es: " + promedio);

let numero = parseInt(prompt("Ingrese un número: "));
siguiente(numero);


function promedioNotas(){

    let contador = 0;
    let suma = 0;
    let nota;

    do{
        
        nota = parseFloat(prompt("Ingrese una nota: "));

        if(nota!=-1){
            suma += nota;
            contador++;
        }

    }while(nota!=-1)

    return  suma / contador;

}

function siguiente(n){
    return alert("El siguiente del número ingresado es: " + (n+1));
}
//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Ingrese un número: "));

let resultados = [];
    
    if (numero % 2 == 0) {
        resultados.push("2");
    }
    if (numero % 3 == 0) {
        resultados.push("3");
    }
    if (numero % 5 == 0) {
        resultados.push("5");
    }
    if (numero % 7 == 0) {
        resultados.push("7");
    }
    
    if (resultados.length > 0) {
        document.write("El número es divisible por: " + resultados.join(", "));
    } else {
        document.write("El número NO es divisible por 2, 3, 5 o 7");
    }



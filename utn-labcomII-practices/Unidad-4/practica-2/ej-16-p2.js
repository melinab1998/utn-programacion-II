/*Una función que reciba el día, mes y año y me devuelva la cantidad de días de ese mes*/

let dia = parseInt(prompt("Ingrese el día: "));
let mes = parseInt(prompt("Ingrese el mes (1-12): "));
let año = parseInt(prompt("Ingrese el año: "));

alert(diasDelMes(mes, año));

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function diasDelMes(mes, año){
    let dias;

    switch (mes) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12:
            dias = 31;
            break;
        case 4: 
        case 6: 
        case 9: 
        case 11: 
            dias = 30;
            break;
        case 2: 
            dias = esBisiesto(año) ? 29 : 28;
            break;
        default:
            return "Mes inválido.";
    }

    return "El mes " + mes + " del año " + año + " tiene " + dias + " días.";
}


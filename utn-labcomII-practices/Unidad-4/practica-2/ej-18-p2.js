//Una función que se llame ultimoDiaDelMes que reciba día, mes y año y devuelva el último día del mes.

let dia = parseInt(prompt("Ingrese el día: "));
let mes = parseInt(prompt("Ingrese el mes (1-12): "));
let año = parseInt(prompt("Ingrese el año: "));

alert(ultimoDiaDelMes(dia, mes, año));

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function ultimoDiaDelMes(dia, mes, año) {
    let ultimoDia;

    switch (mes) {
        case 1: 
        case 3: 
        case 5:
        case 7:
        case 8: 
        case 10: 
        case 12: 
            ultimoDia = 31;
            break;
        case 4: 
        case 6: 
        case 9: 
        case 11: 
            ultimoDia = 30;
            break;
        case 2: 
            ultimoDia = esBisiesto(año) ? 29 : 28;
            break;
        default:
            return "Mes inválido.";
    }

    return "El último día del mes " + mes + " del año " + año + " es el " + ultimoDia + "/" + mes;
}
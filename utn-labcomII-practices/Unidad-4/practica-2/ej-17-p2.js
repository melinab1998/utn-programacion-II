//Una función que reciba día, mes y año y devuelva el día anterior

let dia = parseInt(prompt("Ingrese el día: "));
let mes = parseInt(prompt("Ingrese el mes (1-12): "));
let año = parseInt(prompt("Ingrese el año: "));

alert(diaAnterior(dia, mes, año));

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function diasDelMes(mes, año) {
    switch (mes) {
        case 1: 
        case 3: 
        case 5: 
        case 7: 
        case 8: 
        case 10: 
        case 12: 
            return 31;
        case 4: 
        case 6: 
        case 9: 
        case 11: 
            return 30;
        case 2: 
            return esBisiesto(año) ? 29 : 28;
        default:
            return 0;
    }
}

function diaAnterior(dia, mes, año){
    
    dia--; 

    if (dia === 0) {
        mes--; 
        if (mes === 0) {
            mes = 12; 
            año--;    
            dia = 31; 
        } else {
            dia = diasDelMes(mes, año); 
        }
    }

    return "La fecha anterior es: " + dia + "/" + mes + "/" + año;
}
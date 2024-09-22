/*Un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y 
que cada 5 líneas muestreuna línea horizontal. */

for (let i = 1; i <= 500 ; i++){
    if(i%5==0){
        document.write( i + '<hr>');
    }else if(i%4==0){
        let multCuatro = " (Múltiplo de 4)";
        document.write(i + multCuatro + '<br>');
    }else if(i%9==0){
        let multNueve = " (Múltiplo de 9)";
        document.write(i + multNueve + '<br>');
    }else{
        document.write(i + '<br>');
    }
}



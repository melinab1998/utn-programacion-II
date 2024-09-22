//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

if(num>num2&&num>num3){
    document.write("El número mayor es: " + num);
}else if(num2>num3){
    document.write("El número mayor es: " + num2);
}else{
    document.write("El número mayor es: " + num3);
}
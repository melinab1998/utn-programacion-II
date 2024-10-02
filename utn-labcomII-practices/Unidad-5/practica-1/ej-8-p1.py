#Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
#7 (sólo hay que comprobar si lo es por uno de los cuatro)

numero = int(input("Ingrese un número: "))

if numero % 2 == 0:
    print("El número es divisible por 2.")
elif numero % 3 == 0:
    print("El número es divisible por 3.")
elif numero % 5 == 0:
    print("El número es divisible por 5.")
elif numero % 7 == 0:
    print("El número es divisible por 7.")
else:
    print("El número no es divisible por 2, 3, 5 o 7.")
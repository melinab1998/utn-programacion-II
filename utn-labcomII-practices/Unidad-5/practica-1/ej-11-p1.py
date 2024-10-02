#Escribir un programa que nos diga si un número dado es primo (no es divisible
#por ninguno otro número que no sea él mismo o la unidad)

numero = int(input("Ingrese un número: "))

divisores = []

for i in range(1, numero+1):
    if numero % i == 0:
        divisores.append(i)
        

if len(divisores) == 2:
    print("El número es primo")
else:
    print("El número NO es primo")
#Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
#que decir todos por los que es divisible)

numero = int(input("Ingrese un número: "))

divisores = []

if numero % 2 == 0:
    divisores.append(2)
if numero % 3 == 0:
    divisores.append(3)
if numero % 5 == 0:
    divisores.append(5)
if numero % 7 == 0:
    divisores.append(7)
    
if divisores:
    print("El número es divisible por:", ", ".join(map(str, divisores)))
else:
    print("El número no es divisible por 2, 3, 5 o 7.")
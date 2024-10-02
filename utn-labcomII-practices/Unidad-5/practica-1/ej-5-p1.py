#Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

numero = float(input("Ingrese un número: "))
numeroDos = float(input("Ingrese otro número: "))

if numero > numeroDos:
    print("El mayor número es:", numero)
elif numero < numeroDos:
    print("El mayor número es:", numeroDos)
else:
    print("Los números son iguales.")

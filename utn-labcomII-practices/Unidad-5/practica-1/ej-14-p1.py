#) Haz un programa que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma (suponiendo que indica 6):

numero = int(input("Ingrese un número: "))

for i in range(numero, 0, -1):
    print(str(i) * i)
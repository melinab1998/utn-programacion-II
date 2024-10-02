#Escribir un programa que escriba en pantalla los divisores de un número dado

numero = int(input("Ingrese un número: "))

print(f"Los divisores de {numero} son:")

for i in range(1, numero + 1):
    if numero % i == 0:
        print(i)
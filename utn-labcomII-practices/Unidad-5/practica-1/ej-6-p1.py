#Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

numero = float(input("Ingrese un número: "))
numeroDos = float(input("Ingrese otro número: "))
numeroTres =  float(input("Ingrese otro número: "))

if(numero>numeroDos and numero>numeroTres):
    print("El mayor número es: ", numero)
elif(numeroDos>numeroTres):
    print("El mayor número es: ", numeroDos)
else:
    print("El mayor número es: ", numeroTres)
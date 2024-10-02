"""Crear un programa que escriba los números del 1 al 500, y que indique cuales
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal."""

for i in range(1,501):
    if i%4==0:
        print(i, "(Múltiplo de 4)")
    elif i%9==0:
        print(i, "(Múltiplo de 9)")
    elif i%5 ==0:
        print(i)
        print("-" * 20)
    else:
        print(i)
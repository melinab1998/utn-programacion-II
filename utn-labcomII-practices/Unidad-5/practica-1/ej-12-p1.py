"""Pide una nota (número). Muestra la calificación según la nota:
 0-3: Muy deficiente
 3-5: Insuficiente
 5-6: Suficiente
 6-7: Bien
 7-9: Notable
 9-10: Sobresaliente"""

nota = float(input("Ingrese su nota: "))

if 0 <= nota < 3:
    print("Muy deficiente")
elif 3 <= nota < 5:
    print("Insuficiente")
elif 5 <= nota < 6:
    print("Suficiente")
elif 6 <= nota < 7:
    print("Bien")
elif 7 <= nota < 9:
    print("Notable")
elif 9 <= nota <= 10:
    print("Sobresaliente")
else:
    print("Nota inválida. Ingrese un valor entre 0 y 10.")
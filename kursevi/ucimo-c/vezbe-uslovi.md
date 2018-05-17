---
title: Vežbe sa uslovima
layout: lekcija-c
permalink: /vezbe-uslovi
---

Zadaci za vežbanje uslovne logike. Rešenja su data u programskom jeziku Python.

### Nevaljali učenici

Nevaljali učenici su iščupali tastere `<` i `>` sa tastature. Potrebno je uporediti dva uneta cela pozitivna broja, A i B, i ispisati koji je veći, bez upotrebe relacija `<`, `>`, `<=` i `>=`.

{:.ulaz.resenje}
```python
a = 7
b = 11

if (a == b):
  print('Brojevi su jednaki')
else:
  x = a - b
  x /= abs(x)
  veci = 'a' if x == 1 else 'b'
  print('Broj ' + veci + ' je veci')
```

### Jel trougao?

Za date dužine A, B i C, proveriti da li to mogu biti stranice trougla. Za trougao važi da je zbir dužina svake dve strane duži od treće.

{:.ulaz.resenje}
```python
a = 7
b = 11
c = 21

def jel_trougao(a, b, c):
  return (a + b > c) and (a + c > b) and (b + c > a)

print(jel_trougao(a, b, c))
```

### Samoglasnik ili suglasnik?

Unosi se neko malo slovo sa tastature. Proveriti da li je u pitanju samoglasnik ili suglasnik.

{:.ulaz.resenje}
```python
def proveri_slovo(slovo):
    return 'Samoglasnik' if slovo in ['a', 'e', 'i', 'o', 'u'] else 'Suglasnik'

print(proveri_slovo('b'))
```

Izvor: [webnstudy.com](http://www.webnstudy.com/tema.php?id=razgranati-algoritmi-zadaci)

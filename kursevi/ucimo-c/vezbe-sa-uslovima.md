---
title: Vežbe sa uslovima
layout: lekcija-c
permalink: /vezbe-sa-uslovima
---

Zadaci za vežbanje uslovne logike. Rešenja su data u raznim programskim jezicima.

### Nevaljali učenici

Nevaljali učenici su iščupali tastere `>` i `<` sa tastature. Potrebno je uporediti dva uneta cela pozitivna broja, A i B, i ispisati koji je veći, bez upotrebe relacija `<`, `>`, `<=` i `>=`.

Rešenje C:

{:.ulaz.resenje}
```c
#include <stdio.h>
#include <stdlib.h>

int main ()
{
    int a = 7;
    int b = 11;
    char veci;
    int razlika;

    if (a == b)
        printf("Brojevi su jednaki");
    else {
        razlika = a - b;
        razlika = razlika / abs(razlika);
        veci = razlika == 1 ? 'a' : 'b';
        printf("Broj %c je veci", veci);
    }
    return 0;
}
```

Rešenje Python:

{:.ulaz.resenje}
```python
a = 7
b = 11

if (a == b):
  print('Brojevi su jednaki')
else:
  razlika = a - b
  razlika = razlika / abs(razlika)
  veci = 'a' if razlika == 1 else 'b'
  print('Broj ' + veci + ' je veci')
```

### Jel trougao?

Za date dužine A, B i C proveriti da li mogu biti stranice trougla. Kod trougla je zbir dužina svake dve strane duži od treće.

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

Proveriti da li dato malo slovo samoglasnik ili suglasnik.

{:.ulaz.resenje}
```python
def proveri_slovo(slovo):
    return 'Samoglasnik' if slovo in ['a', 'e', 'i', 'o', 'u'] else 'Suglasnik'

print(proveri_slovo('b'))
```

Izvor: [webnstudy.com](http://www.webnstudy.com/tema.php?id=razgranati-algoritmi-zadaci)

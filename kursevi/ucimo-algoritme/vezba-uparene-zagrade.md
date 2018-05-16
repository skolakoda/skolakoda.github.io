---
title: "Vežba: uparene zagrade"
layout: lekcija-algoritmi
permalink: /vezba-uparene-zagrade
---

![](http://interactivepython.org/runestone/static/pythonds/_images/simpleparcheck.png)

## Problem

Dat je niz otvorenih i zatvorenih zagrada. Potrebno je utvrditi da li su zagrade dobro raspoređene i ispisati za svaku otvorenu zagradu gde se nalazi njena zatvorena zagrada. Primer dobro raspoređenih zagrada je `(())()`, dok u primeru `())(` zagrade nisu dobro raspoređene.

## Pomoć

Primetimo da se prvo uparuju otvorene i zatvorene zagrade koje se nalaze na susednim mestima u početnom nizu. Zatim možemo izbrisati uparene zagrade i ponoviti postupak. Međutim ukoliko bi stalno prepravljali početni niz, vremenska složenost algoritma bi bila O(n<sup>2</sup>).

Pokušaćemo upotrebom steka da rešimo ovaj problem. Potrebno je primetiti da se zatvorena zagrada ispred koje ne postoji ni jedna zatvorena zagrada uparuje sa prvom zagradom ispred nje, te se te 2 zagrade mogu ukloniti iz početnog niza.

Kretaćemo se kroz početni niz od prvog karaktera ka poslednjem. Ukoliko je trenutno posmatrani karakter otvorena zagrada, na stek ćemo ubaciti poziciju zagrade. U slučaju da je trenutno posmatrani karakter zatvorena zagrada i ukoliko na steku postoji neki element, možemo upariti otvorenu zagradu koja se nalazi na vrhu steka i trenutno posmatranu zatvorenu zagradu. Ukoliko se desi da posmatrani karakter predstavlja zatvorenu zagradu i da je stek prazan, možemo zaključiti da zagrade nisu dobro raspoređene.

## Rešenje

Sledi rešenje u Python-u koje koristi strukturu stoga:

{:.ulaz}
```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def isEmpty(self):
        return self.items == []


def jelUpareno(znaci):
    stog = Stack()
    for znak in znaci:
        if znak == '(':
            stog.push(znak)
        if znak == ')':
            if stog.isEmpty(): return False
            stog.pop()
    return stog.isEmpty()

print(jelUpareno('(((a + b))(b + a)(()))'))
print(jelUpareno('())('))
```

Izvori:
- [petlja.org](https://petlja.org/BubbleBee/r/Lectures/strukture-podataka-1)
- [interactivepython.org](http://interactivepython.org/runestone/static/pythonds/BasicDS/SimpleBalancedParentheses.html)

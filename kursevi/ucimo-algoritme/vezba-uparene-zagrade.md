---
title: Algoritam za proveru uparenih zagrada
layout: lekcija-algoritmi
permalink: /vezba-uparene-zagrade
---

![](/images/koncepti/algoritmi/simpleparcheck.png)

**Algoritam koji koristi stog (*stack*) strukturu za praćenje otvorenih i zatvorenih zagrada u nizu karaktera.**

## Opis problema

Dat je niz otvorenih i zatvorenih zagrada. Potrebno je utvrditi da li su zagrade dobro raspoređene i ispisati za svaku otvorenu zagradu gde se nalazi njena zatvorena zagrada. Primer dobro raspoređenih zagrada je `(())()`, dok u primeru `())(` zagrade nisu dobro raspoređene.

## Opis rešenja

Pokušaćemo upotrebom steka da rešimo ovaj problem. 

Kretaćemo se kroz početni niz od prvog karaktera ka poslednjem. Ako je trenutni karakter otvorena zagrada, na stek dodajemo poziciju zagrade. Ako je trenutni karakter zatvorena zagrada a na steku postoji neki element, možemo upariti otvorenu zagradu koja se nalazi na vrhu steka i trenutnu zatvorenu zagradu. Ako trenutni karakter predstavlja zatvorenu zagradu a stek je prazan, zagrade nisu dobro raspoređene.

## Implementacija u Python-u

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

## Implementacija u JS-u

{:.ulaz}
```js
function jelUpareno(znaci) {
  const stog = []

  for (znak of znaci) {
    if (znak == '(')
      stog.push(znak)
    if (znak == ')') {
      if (!stog.length) return false
      stog.pop()
    }
  }
  return !stog.length
}

console.log(jelUpareno('(((a + b))(b + a)(()))'))
console.log(jelUpareno('())('))
```

## Izvori

- [petlja.org](https://petlja.org/BubbleBee/r/Lectures/strukture-podataka-1)
- [*Simple Balanced Parentheses*](https://runestone.academy/ns/books/published/pythonds/BasicDS/SimpleBalancedParentheses.html)

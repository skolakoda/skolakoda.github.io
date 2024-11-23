---
title: Iterator (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-iterator
image: /images/koncepti/podaci/strukture.png
---

![]({{page.image}})

**Iterator je obrazac koji omogućava sekvencijalni pristup elementima neke kolekcije bez otkrivanja njene unutrašnje strukture.** 

S obzirom da postoji puno različitih vrsta kolekcija (stablo, lista, niz, skup, rečnik...), iterator nam omogućava da prođemo elemente bez potreba da znamo kako je kolekcija struktuirana. Klijent koristi samo javne metode iteratora, poput `next()`, dok detalji o strukturi podataka ostaju skriveni. 

Osnovna ideja iteratora je da se izvuče ponašanje kolekcije u posebnu `Iterator` klasu. Objekat iteratora enkapsulira sve detalje prolaska kroz kolekciju, kao što su trenutna pozicija i koliko elemenata je ostalo do kraja. Stoga, više iteratora može istovremeno prolaziti kroz istu kolekciju, nezavisno jedan od drugog. 

Svi iteratori moraju implementirati isti interfejs, ali mogu koristiti različite algoritme prolaska. Ukoliko nam je potreban drugačiji način prolaska, onda kreiramo novu iterator klasu, bez potrebe da menjamo kolekciju.

Mnogi programski jezici imaju ugrađene iterator klase ili mehanizme za iteraciju kroz kolekcije podataka. 

![](/images/koncepti/oop/iteratori.png)

## Primer u JavaScript-u

Prost primer iteratora koji radi sa različitim strukturama podataka: nizovima, skupovima i mapama.

{:.ulaz}
```js
function createIterator(collection) {
  let index = 0
  let entries = []

  if (Array.isArray(collection)) {
    entries = collection
  } else if (collection instanceof Set) {
    entries = Array.from(collection)
  } else if (collection instanceof Map) {
    entries = Array.from(collection.entries())
  } else {
    throw new Error('Nepodržana struktura podataka')
  }

  return {
    next() {
      return index < entries.length
        ? { value: entries[index++], done: false }
        : { done: true }
    }
  }
}

// upotreba sa različitim strukturama
const array = [1, 2, 3]
const set = new Set([1, 2, 3])
const map = new Map([['a', 1], ['b', 2], ['c', 3]])

const arrayIterator = createIterator(array)
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())

const setIterator = createIterator(set)
console.log(setIterator.next())
console.log(setIterator.next())
console.log(setIterator.next())
console.log(setIterator.next())

const mapIterator = createIterator(map)
console.log(mapIterator.next())
console.log(mapIterator.next())
console.log(mapIterator.next())
console.log(mapIterator.next())
```

## Literatura

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.
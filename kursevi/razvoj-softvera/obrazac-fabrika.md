---
title: Fabrika (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fabrika
image: /images/koncepti/oop/fabrika.png
---

![]({{page.image}})

**Fabrički obrazac (*factory pattern*) ili fabrički metod (*factory method*) je projektni obrazac koji se koristi za kreiranje objekata, bez potrebe da se direktno poziva konstruktor klase.** Fabrički obrazac instancira odgovarajuće klase na osnovu parametara koje mu daje klijent ili na osnovu stanja aplikacije.

Tvornički obrazac je specijalizovan za delegiranje i enkapsulaciju. Tvornička metoda može znati da stvara neki proizvod, ali ne zna specifične karakteristike proizvoda koji će stvoriti. Ovo znanje je dostupno samo odgovarajućim podklasama. Stoga je odgovornost za implementaciju fabričke metode i kreiranje odgovarajućih objekata isključivo odgovornost podklase.

Ovaj obrazac nam omogućava da razdvojimo kreiranje objekta od njegove implementacije. Klijent ne mora znati ništa o tome kako je nova instanca napravljena. Takođe, tvornički obrazac omogućava centralizaciju logike stvaranja objekata i fleksibilnost promene njihovih tipova.

## Analogija iz stvarnog života

Fabrički obrazac funkcioniše po sličnom principu kao prava fabrika. U realnosti, fabrike služe za proizvodnju nekog proizvoda. Klijent koji poručuje proizvode preko prodajnog mesta ne mora da zna na koji način su ti proizvodi proizvedeni. Slično, u fabričkom obrascu se logika kreiranja objekata izmešta iz klijentskog koda.

## Primer: tvornica HTML elemenata

Dinamički kreiramo tekst, link ili sliku, koristeći fabrički obrazac.

{:.ulaz}
```js
class Text {
  constructor(url) {
    this.url = url
  }

  insert(parent) {
    const txt = document.createTextNode(this.url)
    parent.appendChild(txt)
  }
}

class Link {
  constructor(url) {
    this.url = url
  }

  insert(parent) {
    const link = document.createElement('a')
    link.href = this.url
    link.appendChild(document.createTextNode(this.url))
    parent.appendChild(link)
  }
}

class Image {
  constructor(url) {
    this.url = url
  }

  insert(parent) {
    const img = document.createElement('img')
    img.src = this.url
    parent.appendChild(img)
  }
}

const APP = {
  Text,
  Link,
  Image
}

const fabrika = (tip, url) => {
  if (APP[tip]) {
    return new APP[tip](url)
  } else {
    throw new Error(`Tip ${tip} nije podržan.`)
  }
}

const tipovi = ['Image', 'Text', 'Link']
const url = 'https://picsum.photos/200'

tipovi.forEach(tip => {
  const o = fabrika(tip, url)
  o.insert(document.querySelector('.wrapper'))
})
```

## Primer: tvornica automobila

{:.ulaz}
```js
const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)]

class Zastava {
  drive() { console.log('Ide Zastava') }
}

class Yugo {
  drive() { console.log('Ide Yugo') }
}

class Lada {
  drive() { console.log('Ide Lada') }
}

class Factory {
  static createCar(type) {
    if (type === 'Zastava') return new Zastava()
    if (type === 'Yugo') return new Yugo()
    if (type === 'Lada') return new Lada()
  }
}

const cars = ['Zastava', 'Yugo', 'Lada']
const car = Factory.createCar(randomFrom(cars))
car.drive()
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.
- [Šta je obrazac fabričkog dizajna?](https://bs.linux-console.net/?p=26915#gsc.tab=0)
---
title: Fabrika (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fabrika
image: /images/koncepti/oop/fabrika.png
---

![]({{page.image}})

**Fabrički obrazac (*factory pattern*) ili fabrički metod (*factory method*) je projektni obrazac koji se koristi za kreiranje objekata, bez potrebe da se direktno poziva konstruktor klase.** Tvornički obrazac instancira odgovarajuće klase na osnovu parametara koje mu daje klijent ili na osnovu stanja aplikacije.

Fabrički obrazac funkcioniše po sličnom principu kao prava fabrika. U realnosti, fabrike služe za proizvodnju nekog proizvoda. Klijent koji poručuje proizvode preko prodajnog mesta ne mora da zna na koji način su ti proizvodi proizvedeni. Slično, u fabričkom obrascu se logika kreiranja objekata izmešta iz klijentskog koda.

Pre svega, ovaj obrazac nam omogućava da razdvojimo kreiranje objekta od njegove implementacije. Klijent ne mora znati ništa o tome kako je nova instanca napravljena. Takođe, tvornički obrazac omogućava centralizaciju logike stvaranja objekata i fleksibilnost promene njihovih tipova.

## Primer

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

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.
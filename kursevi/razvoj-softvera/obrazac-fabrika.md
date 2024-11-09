---
title: Fabrika (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fabrika
image: /images/koncepti/oop/factory-pattern.png
---

![]({{page.image}})

**Fabrika (*factory pattern*) je tvorbeni projektni obrazac koji se koristi za kreiranje objekata, bez potrebe da se direktno poziva konstruktor klase.** Fabrički obrazac instancira odgovarajuće klase na osnovu parametara koje mu daje klijent ili na osnovu stanja aplikacije.

Fabrički obrazac omogućava centralizaciju logike stvaranja objekata i fleksibilnost promene njihovih tipova.

## Primer

Recimo da imamo tri različite klase koje implementiraju `insert` funkciju. Svi konstruktori primaju URL adresu, ali je različito koriste. Jedni pomoću nje kreiraju tekst, drugi link, a treći sliku:

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
```

Tri različita objekta možemo kreirati i dodati stranici na isti način:

```js
const url = 'https://neki.link'

const a = new APP.Image(url)
a.insert(document.body)

const b = new APP.Text(url)
b.insert(document.body)

const c = new APP.Link(url)
c.insert(document.body)
```

Zamislimo da program ne zna unapred koji tip objekta je potreban, već kreiramo nove tipove objekata klikom na dugme. Ako varijabla `tip` sadrži tip željenog objekta, možemo upotrebiti sledeću uslovnu logiku:

```js
const url = 'https://neki.link'
let o 

if (tip === 'Image') {
  o = new APP.Image(url) 
}
if (tip === 'Link') {
  o = new APP.Link(url) 
}
if (tip === 'Text') {
  o = new APP.Text(url) 
}

o.insert(document.body)
```

Ovo radi, ali sa mnogo klasa postaje predugačko i teško održivo. 

### Rešenje pomoću fabričkog obrasca

Funkcija `fabrika` kreira objekat čiji je tip dinamički određen. Prethodne uslove menjamo mnogo jednostavnijim kodom:

```js
const fabrika = (tip, url) => new APP[tip](url)
```

Naravno, u praksi bismo dodali još neke provere, da li željena klasa postoji i slično. Sada možemo dinamički da instanciramo novi objekat na sledeći način:

```js
const o = fabrika(tip, url)
o.insert(document.body)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin

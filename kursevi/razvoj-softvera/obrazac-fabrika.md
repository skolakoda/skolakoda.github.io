---
title: Fabrika (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-fabrika
image: /images/koncepti/oop/fabrika.png
---

![]({{page.image}})

**Tvornički obrazac (*factory pattern*) ili fabrički metod (*factory method*) je projektni obrazac koji služi za kreiranje objekata, bez potrebe da klijent direktno poziva konstruktor klase.** Fabrika definiše interfejs za kreiranje objekta, ali ostavlja podklasi da odluči koju klasu će instancirati. 

Fabrički obrazac instancira odgovarajuće klase na osnovu parametara koje zadaje klijent ili na osnovu stanja aplikacije. Fabrika centralizuje stvaranje i uništavanje objekata (npr. na osnovu konfiguracijskog fajla), pružajući univerzalan i siguran način za rukovanje objektima.

Tvornički obrazac nam omogućava i da razdvojimo kreiranje objekta od njegove implementacije. Klijent ne mora znati ništa o tome kako se instanca stvara, niti tvornica mora znati specifične karakteristike proizvoda koje stvara. Odgovornost za kreiranje odgovarajućih objekata je isključiva odgovornost podklase.

## Prednosti upotrebe

Fabrički obrazac promoviše fleksibilnost dizajna, gde koristimo interfejse ili apstraktne klase za kreiranje konkretnih klasa. Takođe promoviše skalabilnost kroz polimorfizam, dozvoljavajući novim klasama da implementiraju postojeći interfejs kako se aplikacija širi.

Ovaj obrazac uključuje dva važna principa dizajna: otvoreno-zatvoren princip i inverziju kontrole. Inverziju kontrole primenjuje jer prebacuje kreiranje objekata sa klijentske na fabričku klasu. 

## Analogija iz stvarnog života

Fabrički obrazac funkcioniše po sličnom principu kao prava fabrika. U realnosti, fabrike služe za proizvodnju nekog proizvoda. Klijent koji poručuje proizvode preko prodajnog mesta ne mora da zna na koji način su ti proizvodi proizvedeni. Slično, u fabričkom obrascu se logika kreiranja objekata izmešta iz klijentskog koda.

## Primena u igrama

![](/images/myth.jpg)

Igre kontinuirano stvaraju i uništavaju objekte. Na primer, strateške igre moraju da stvaraju (*spawn*-uju) na stotine vojnika za svaki nivo, na osnovu podataka iz json fajla. Sledstveno, značajan deo programa je posvećen stvaranju na zahtev i uništavanju na kraju životnog ciklusa. Kako mnogi programeri rade na istom kodu, a programi rastu, logika stvaranja-uništavanja se širi na mnoge fajlove, često uzrokujući probleme zbog neusklađenosti u protokolu. Tu kao spas dolazi tvornička klasa.

```js
function spawnEntity (typename) {
    const entity = new (factory[typename])()  // dinamicki kreira instancu
    entities.push(entity)
    return entity
}
```

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

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Mario Casciaro, Luciano Mammino, *Node.js: Projektni obrasci*, Mikro knjiga, 2019.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.
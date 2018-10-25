---
title: Tri vrste objekata u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /tri-vrste-objekata-u-javaskriptu
image: /images/koncepti/oop/objekat-kao-model.png
---

**Objekte u Javaskriptu koristimo za tri bitno različite namene:**

- kao rečnik (mapa ili asocijativni niz)
- kao model predmeta stvarnog sveta
- za predstavljanje strukture stabla

## Objekat kao rečnik

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZJ5__rBMkso" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

Rečnik (takođe mapa ili asocijativni niz) je struktura podataka koja sadrži parove ključeva i vrednosti. Možemo je, na primer, koristiti za rečnik pojmova:

{:.ulaz}
```js
const recnik = {
  "sunce": "Ono što nas greje.",
  "nebo": "Nebo je plavo.",
  "zemlja": "Planeta na kojoj živimo."
}

console.log(recnik["sunce"])
```

Ova struktura je takođe zgodna za telefonski imenik:

{:.ulaz}
```js
const imenik = {
  "Marija Stojonović": "333-444",
  "Darko Bjelić": "343 434334",
  "Ana Stanić": "090945454",
  "Marko Marić": "3453453453",
  "No Name": "xxxxxxx"
}

console.log(imenik["Darko Bjelić"])
```

U moderni Javascript je uvedena mapa ([Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)) kao zasebna struktura podataka, ali se objekat u ove svrhe i dalje redovno koristi.

## Objekat kao model

<iframe width="560" height="315" src="https://www.youtube.com/embed/wEVoMn_sX_U" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

Objekat se često koristi kao model predmeta stvarnog sveta. Od običnog rečnika se razlikuje što pored atributa ima i metode, odnosno dodeljene funkcije.

{:.ulaz}
```js
const kola = {
  brojTockova: 4,
  vlasnik: "Pera Perić",
  maxBrzina: 200,
  brzina: 0,

  kreni() {
    this.brzina = 10
  },

  ubrzaj() {
    if (this.brzina >= this.maxBrzina)
      return
    this.brzina += 5
  },

  stani() {
    this.brzina = 0
  }
}

console.log("Pocetna brzina: " + kola.brzina)
kola.kreni()
kola.ubrzaj()
console.log("Trenutna brzina: " + kola.brzina)
```

Objekti kao modeli predmeta se obično ne prave jednokratno, nego se instanciraju na osnovu klasa.

## Objekat kao stablo

<iframe width="560" height="315" src="https://www.youtube.com/embed/ppODhkAAQ3A" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

Objekat kao stablo je razgranata struktura koja ima više nivoa dubine. Može služiti za predstavljanje bilo kojih ugnježdenih struktura, npr. DOM elemenata. Pojedinačnim vrednostima se može pristupati direktno (npr. `html.head.title`), a cela struktura se iterira rekurzijom.

{:.ulaz}
```js
const html = {
  "head": {
    "title": "Naslovna stranica",
    "description": "Ovo je moj sajt"
  },
  "body": {
    "div": {
      "section": {
        "h1": "Dobrodosli ljudi",
        "p": "Bla bla bla bla bla"
      }
    }
  }
}

console.log(html.head.title) // pristupanje ugnjezdenom atributu

// rekurzivna iteracija
function iteriraj(obj) {
  for (const key in obj) {
    if (typeof obj[key] == "object") {
      iteriraj(obj[key])
    } else {
      console.log(key + ": " + obj[key])
    }
  }
}

iteriraj(html)
```

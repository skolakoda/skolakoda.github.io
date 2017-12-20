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

Objekat kao rečnik ima samo parove ključeva i vrednosti.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZJ5__rBMkso" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

```js
const recnik =
  "sunce": "Ono što nas greje.",
  "nebo": "Nebo je plavo.",
  "zemlja": "Planeta na kojoj živimo."
}
```

## Objekat kao model

Objekat kao model pored atributa ima i metode.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wEVoMn_sX_U" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

```js
const automobil = {
  brojTockova: 4,
  vlasnik: "Pera Perić",
  maxBrzina: 200,
  brzina: 0,

  kreni() {
    this.brzina = 10
  },

  dodajGas() {
    if (this.brzina >= this.maxBrzina)
      return
    this.brzina++
  },

  stani() {
    this.brzina = 0
  }
}
```

## Objekat kao stablo

Objekat kao stablo ima više nivoa dubine i iterira se rekurzijom.


<iframe width="560" height="315" src="https://www.youtube.com/embed/ppODhkAAQ3A" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

```js
const html = {
  "head": {
    "title": "Naslovna stranica",
    "description": "Ovo je moj sajt"
  }
  "body": {
    "div": {
      "section": {
        "h1": "Dobrodosli ljudi",
        "p": "Bla bla bla bla bla"
      }
    }
  }
}
```

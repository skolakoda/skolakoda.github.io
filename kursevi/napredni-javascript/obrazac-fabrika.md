---
title: "Projektni obrazac fabrika u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-obrazac-fabrika
---

Fabrika (*factory*) je još projektni obrazac kreiranja, koji se koristi za kreiranje objekata. On može da nam pomogne kada imamo slične tipove objekata i ne znamo unapred koji tip objekta da upotrebimo. Na osnovu unosa ili drugih kriterijuma, program određuje tip objekta u toku izvršenja.

## Konstruktori

Recimo da imamo tri različita konstruktora koji implementiraju sličnu funkciju. Svi objekti instance koriste URL adresu, ali pomoću nje izvršavaju različite rad­nje. Jedni kreiraju DOM čvor teksta, drugi link, a treći sliku, na sledeći način:

```js
const APP = {}

APP.Text = function(url) {
  this.url = url

  this.insert = function(parent) {
    const txt = document.createTextNode(this.url)
    parent.appendChild(txt)
  }
}

APP.Link = function(url) {
  this.url = url

  this.insert = function(parent) {
    const link = document.createElement('a')
    link.href = this.url
    link.appendChild(document.createTextNode(this.url))
    parent.appendChild(link)
  }
}

APP.Image = function(url) {
  this.url = url

  this.insert = function(parent) {
    const img = document.createElement('img')
    img.src = this.url
    parent.appendChild(img)
  }
}
```

Tri različita konstruktora isto rade - prosleđuju `url` i pozivaju metod `insert()` na sledeći način:

```js
const url = 'https://skolakoda.org'

let o = new APP.Image(url)
o.insert(document.body)

let o = new APP.Text(url)
o.insert(document.body)

let o = new APP.Link(url)
o.insert(document.body)
```

Zamislimo da program ne zna unapred koji tip objekta je potreban, već kreiramo nove tipove objekata klikom na dugme. Ako varijabla `tip` sadrži tip željenog objekta, možemo upotrebiti sledeću uslovnu logiku:

```js
const url = 'https://skolakoda.org'
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

Ovo radi, ali ako koristimo mnogo konstruktora, postaje predugačko i teško održivo. Takođe, nekad ne znamo unapred nazive svih konstruktora.

## Obrazac fabrike

Funkcija `fabrika` kreira objekat čiji je tip dinamički određen. Prethodne uslove menjamo mnogo jednostavnijim kodom:

```js
APP.fabrika = function(tip, url) {
  return new APP[tip](url)
}
```

Sada možemo dinamički da instanciramo novi objekat na sledeći način:

```js
const o = APP.fabrika(tip, url)
o.insert(document.body)
```

Naravno, za ozbiljnu implementaciju obrasca fabrike potrebne su i neke provere - na primer, da li `APP[tip]` postoji i slično.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
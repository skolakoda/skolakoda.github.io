---
title: Kretanje po DOM stablu
layout: lekcija-js
permalink: /kretanje-po-dom-stablu
---

**Možemo se kretati po DOM stablu nagore i nadole, počev od korenskog elementa, pomoću `childNodes`, `parentNode` i drugih svojstava.**

## Korenski `documentElement`

Svi XML dokumenti imaju korenski čvor koji obuhvata ostatak dokumenta. U HTML dokumentima korenski čvor je tag `<html>`. Njemu možemo prestupiti preko svojstva `documentElement` objekta `document`:

```js
document.documentElement
```

Svi čvorovi imaju svojstva `nodeName` i `tagName`, koja sadrže naziv taga:

{:.ulaz}
```js
console.log(document.documentElement.nodeName)
console.log(document.documentElement.tagName)
```

## Roditelji i deca

Da bismo saznali da li čvor ima „potomke“, možemo upotrebiti metod `hasChildNodes()`:

{:.izraz}
```js
document.documentElement.hasChildNodes()
```

HTML element ima tri „potomka“: `head`, `body` i razmak između njih (razmak se uzima u obzir u većini pregledača, ali ne u svim). Potomcima možemo pristupiti pomoću kolekcije `childNodes` na sledeći način:

```js
document.documentElement.childNodes.length
document.documentElement.childNodes[0]
document.documentElement.childNodes[1]
document.documentElement.childNodes[2]
```

Bilo koje dete može da pristupi roditelju pomoću svojstva `parentNode`:

```js
document.documentElement.childNodes[1].parentNode
```

## Prethodni i naredni čvor

`nextSibling()` i `previousSibling()` su još dva pogodna svojstva za kretanje po DOM sta­blu, nakon što izaberemo element. Na primer:

```js
const pasus = document.getElementByld('pasus')
pasus.nextSibling
pasus.previousSibling
pasus.previousSibling.previousSibling
```

Ako želimo da ignorišemo prazne čvorove, tekst bez tagova ili komentare, možemo koristiti metode `nextElementSibling()` i `previousElementSibling()`.

## Prvo i poslednje dete

Svojstva `firstChild` i `lastChild` su takođe dostupna. Možemo ih, na primer, isprobati na čvoru `body`:

```js
document.body.firstChild
document.body.lastChild
```

Svojsvo `firstChild` je isto kao svojstvo `childNodes[0]`, a `lastChild` je isto kao `childNodes[childNodes.length - 1]`.

## Rekurzija

Ukoliko želimo da prođemo sve čvorove stabla, potrebno je koristiti [rekurziju](/rekurzija). 

Naredna funkcija prima početni čvor, i rekurzivno se kreće po DOM stablu, na sledeći način:

{:.ulaz}
```js
function prodjiDOM(cvor) {
  do {
    console.log(cvor)
    if (cvor.hasChildNodes()) {
      prodjiDOM(cvor.firstChild)
    }
  } while (cvor = cvor.nextSibling)
}

prodjiDOM(document.body)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.

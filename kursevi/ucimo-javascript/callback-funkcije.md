---
title: "Funkcije povratnog poziva (<i>callback</i>)"
layout: lekcija-js
permalink: /callback-funkcije
---

**Kada jednu funkciju prosledimo drugoj, a zatim druga izvrši prvu, prvu nazivamo funkcijom povratnog poziva (*callback*). Ako ona nema naziv, onda je to anoni­mna funkcija povratnog poziva.**

Povratne funkcije su obično anonimne. Prosleđeni anonimni funkcijski izraz je poznat kao **lambda funkcija**. Uobičajeni primeri upotrebe povratnih funkcija su događaji i metodi nizova, poput `map` i `filter`.

## Klasične povratne funkcije

Na primer, metoda niza `map` prima povratnu funkciju kao parametar:

{:.ulaz}
```js
const brojevi = [1,2,3]

const mapirano = brojevi.map(function(n) {
  return n * n
})

console.log(mapirano)
```

Povratna funkcija prima trenutni član niza i vraća novu vrednost.

## Streličaste povratne funkcije

Streličasta funk­cija omogućuje pregledniju sintaksu za pisanje lambda funkcija: 

{:.ulaz}
```js
const brojevi = [1,2,3]

const mapirano = brojevi.map(n => n * n)

console.log(mapirano)
```

*Arrow* funk­cije su uvek anonimne, ali ih možemo dodeliti nekoj konstanti i koristiti na sledeći način:

{:.ulaz}
```js
const brojevi = [1,2,3]
const kvadriraj = n => n * n

const mapirano = brojevi.map(kvadriraj)

console.log(mapirano)
```

## Povratne funkcije događaja

Anonimne povratne funkcije se često prosleđuju događajima, na primer:

{:.ulaz}
```js
document.body.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'lightgray'
})
```

Anonimnu funkciju iz gornjeg primera možemo imenovati na sledeći način:

{:.ulaz}
```js
function promeniBoju() {
  document.body.style.backgroundColor = 'yellow'
}

document.body.addEventListener('dblclick', promeniBoju)
```

Ukoliko povratna funkcija prima parametre, pozivamo je u telu anonimne funkcije:

{:.ulaz}
```js
function promeniBoju(boja) {
  document.body.style.backgroundColor = boja
}

document.body.addEventListener('dblclick', function() {
  promeniBoju('black')
})
```

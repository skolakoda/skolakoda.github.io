---
title: "Povratne <i>callback</i> funkcije"
layout: lekcija-js
permalink: /callback-funkcije
---

**Povratna funkcija je obična funkcija koja se prosleđuje drugoj funkciji kao argument.**

Glavna funkcija, koja prima povratnu funkciju, je može izvršiti po potrebi.

Povratne funkcije su često anonimne.

## Prost primer

U narednom primeru imamo glavnu funkciju, koja prima drugu funkciju kao parametar, a potom je izvršava.

{:.ulaz}
```js
function glavna(callback) {
  callback()  // izvršava prosledjenu funkciju
}

function x() {
  console.log("Ja sam kolbek x")
}

function y() {
  console.log("Ja sam kolbek y")
}

// pozivamo glavnu funkciju sa različitim prosledjenim funkcijama
glavna(x)
glavna(y)
glavna(function() {
  console.log("Ja sam anonimna callback funkcija")
})
```

## Povratne funkcije sa parametrima

Ako povratna funkcija iziskuje parametre, moramo je ugnezditi u anonimnu funkciju prilikom prosleđivanja:

{:.ulaz}
```js
function glavna(callback) {
  callback()
}

function sporedna (x, y) {
  console.log("Prosledjeni su mi argumenti", x, y)
}

glavna(function() {
  sporedna("zdravo", "svete") // sporedna je unutar anonimne funkcije
})
```

Takođe, glavna funkcija može proslediti argumente povratnoj funkciji prilikom izvršenja:

{:.ulaz}
```js
function glavna(callback) {
  callback(42)
}

function sporedna(e) {
  console.log("Prosledjena mi je vrednost", e)
}

glavna(sporedna)
```

## Streličasta sintaksa

Umesto klasičnih možemo koristiti streličaste funkcije:

{:.ulaz}
```js
const glavna = callback => callback()

const sporedna = (x, y) => console.log("Prosledjeni su mi argumenti", x, y)

glavna(() => sporedna("zdravo", "svete"))
```

## Primeri upotrebe

Čest primer upotrebe *callback* funkcija su događaji, na primer:

```js
document.onkeydown = e => console.log(e.keyCode)
```

Takođe, povratne funkcije se obavezno prosleđuju `filter`, `map` i drugim metodama, na primer:

```js
[1, 4, 5, 6, 7, 8, 9, 0, 11, 2].filter(x => x > 5)
```

P.s. Ove kratke primere možete isprobati direktno u konzoli pregledača.
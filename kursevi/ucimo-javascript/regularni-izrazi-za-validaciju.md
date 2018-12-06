---
title: Regularni izrazi za validaciju
layout: lekcija-js
permalink: /regularni-izrazi-za-validaciju
---

Primeri prostih regularnih izraza za validaciju unosnih polja. Ove izraze koristimo u edukativne svrhe (naglasak je na čitljivosti), ne preporučujemo za produciju.

## Regularni izraz za email

Regularni izraz traži obrazac: `tekst@tekst.tekst`:

{:.ulaz}
```js
const emailRegex = /\w+@\w+\.\w+/
console.log(emailRegex.test("a@b.c"))
```

Regularni izraz traži obrazac: `tekst@tekst.tekst`, a svaki tekst minimalne dužine 2:

{:.ulaz}
```js
const emailRegex = /\w{2,}@\w{2,}.\w{2,}/
console.log(emailRegex.test("zdravo123@svete.org"))
```

## Regularni izraz za ime i prezime

Regularni izraz traži obrazac: `text text`:

{:.ulaz}
```js
const emailRegex = /\w+\s\w+/
console.log(emailRegex.test("Damjan Petra Pavlica"))
```

## Regularni izraz za adresu

Regularni izraz traži obrazac: `text broj`:

{:.ulaz}
```js
const emailRegex = /\w+\s\d+/
console.log(emailRegex.test("Rada Končara 12b"))
```

Napomena: ne prolaze adrese bez broja.

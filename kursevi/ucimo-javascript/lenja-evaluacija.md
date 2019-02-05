---
title: Lenja evaluacija
layout: lekcija-js
permalink: /lenja-evaluacija
---

**Lenja evaluacija je tehnika optimizacije koja odlaže evaluaciju izraza sve dok njegova vrednost nije neophodna.**

Na primer, ako imamo izraz:

{:.izraz}
```js
true || false || true || false || true || false
```

Javascript će pročitati samo prvu istinitu vrednost i oceniti da je čitav izraz istinit, jer sve što dolazi nakon veznika `ili` ne može uticati na evaluaciju. 

## Mešanje logičkih i drugih vrednosti

U Javascriptu, kad mešamo Bulove i druge vrednosti u logičkoj operaciji, rezultat je poslednja "lenjo" evaluirana vrednost. Na primer:

{:.izraz}
```js
true || "bla" || "bla"
```

{:.izraz}
```js
"bla" || true || true
```

{:.izraz}
```js
true && "bla"
```

{:.izraz}
```js
true && "bla" && true
```

## Dodela podrazumevane vrednosti

Ovo ponašanje JavaScripta se često koristi za dodelu podrazumevane vrednosti. Na primer, ako nemamo `window.input` onda je podrazumevana vrednost porta 3000:

{:.ulaz}
```js
const port = window.input || 3000

console.log(port)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.

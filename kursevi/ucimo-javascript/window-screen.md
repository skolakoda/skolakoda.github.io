---
title: "<code>screen</code> objekat"
layout: lekcija-js
permalink: /window-screen
---

**Globalni objekat `screen` sadrži informacije o okruženju izvan pregledača.**

## Kvalitet boje

Na primer, svojstvo `screen.colorDepth` prikazuje dubinu boje u bitovima, odnosno kvalitet boje ekrana:

{:.izraz}
```js
screen.colorDepth
```

## Veličina ekrana

Možemo, takođe, proveriti rezoluciju ekrana na sledeći način:

{:.izraz}
```js
screen.width
```

{:.izraz}
```js
screen.availWidth
```

{:.izraz}
```js
screen.height
```

{:.izraz}
```js
screen.availHeight
```

Razlika između `height` i `availHeight` je što `height` predstavlja ceo ekran, a `availHeight` ono što ostane kad se oduzme meni operativnog sistema (npr. Windows-ova traka zadataka).

## Gustina piksela

Još jedno srodno svojstvo globalnog `window` objekta, povezano sa ekranom, je:

{:.izraz}
```js
devicePixelRatio
```

Ovo označava odnos piksela uređaja po CSS pikselu (koliko fizičkih piksela pregledač upotrebi da nacrta jedan CSS piksel). Na primer, `devicePixelRatio` ima vrednost 2 u telefonu *iPhone*.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.

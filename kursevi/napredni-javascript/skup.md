---
title: "Skup u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-skup
---

**Skup (`Set`) je kolekcija jedinstvenih vrednosti. Za razliku od niza, skup ne dozvoljava dodavanje iste vrednosti dva puta. U skupu možemo koristiti bilo koji tip vrednosti.**

Skup je namenjen za brzu proveru članstva (nizovi su prilično spori za pro­veru članstva). Operacije skupa su slične operacijama mape:

{:.ulaz}
```js
const skup = new Set()
skup.add('Ivana')
skup.add('Ana')
skup.delete('Ana')
console.log(skup.has('Ana'))
```

Možemo da kreiramo skup pomoću niza ili bilo kog drugog iteratora:

```js
const imena = new Set(['Marko', 'Darko', 'Ivana', 'Ana'])
```

Kada u skup dodamo vrednost koja već postoji, neće se desiti ništa. Slično, ako iz skupa izbrišemo vrednost koja ne postoji, neće se desiti ništa.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.

---
title: Petlje u Javascriptu
layout: lekcija-js
permalink: /petlje-u-javascriptu
---

**Petlje služe za ponavljanje neke operacije mnogo puta i tu moć programiranja sa velikim nizovima podataka dolazi do izražaja.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/qjdBoVHmIQA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## `while` petlja

`while` petlja je osnovna petlja u većini jezika. Njena sintaksa je sledeća:

{:.ulaz}
```js
let brojac = 0

while (brojac < 5) {
  console.log(brojac)
  brojac++
}
```

Mana `while` petlje je što sami vodimo računa o uslovu izlaska iz petlje i inkrementaciji (povećanju) brojača, tako da usled nepažnje možemo završiti u beskonačnoj petlji.

## `for` petlja

`for` petlja je usavršena verzija osnovne `while` petlje, koja je dizajnirana tako da moramo zadati uslov izlaska iz petlje i inkrementaciju brojača da bi radila:

{:.ulaz}
```js
for (let brojac = 0; brojac < 5; brojac++) {
  console.log(brojac)
}
```

Pošto su samom strukturom `for` petlje propisani osnovni elementi, ona je bezbednija za korištenje i ređe završava u beskonačnom ponavljanju.

## Petlje i logika

Petlje ćemo često kominovati sa logikom, što otvara mogućnosti za masovnu obradu podataka. Počnimo od prostog primera razvrstavanja brojeva:

{:.ulaz}
```js
for (let brojac = 1; brojac <= 10; brojac++) {
  if (brojac % 2 == 0)
    console.log(brojac, 'je paran')
  else
    console.log(brojac, 'je neparan')
}
```
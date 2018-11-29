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

Petlja `while` koristi samo jedan uslov. Sve dok je on tačan, naredbe unutar vitičastih zagrada nastavljaju da se izvršavaju. Sami smo odgovorni za kreiranje logike koja će na kraju prouzrokovati da se petlja završi. 

Mana `while` petlje je što sami vodimo računa o uslovu izlaska iz petlje i inkrementaciji (povećanju) brojača, tako da usled nepažnje možemo završiti u beskonačnoj petlji.

## `for` petlja

`for` petlja je usavršena verzija osnovne `while` petlje, dizajnirana tako da moramo zadati uslov izlaska i inkrementaciju brojača da bi radila. Zaglavlje `for` petlje ima tri dela. Prvi deo je deklaracija promenljive koja prati iteraciju. Drugi deo je logički izraz, na osnovu kojeg petlja radi ili prestaje sa radom. Treći deo je naredba povećavanja (ili smanjenja) brojača, tako da se na kraju zadovolji uslov za prestanak rada petlje.

{:.ulaz}
```js
for (let brojac = 0; brojac < 5; brojac++) {
  console.log(brojac)
}
```

Pošto su samom strukturom `for` petlje propisani osnovni elementi, ona je bezbednija za upotrebu i ređe završava u beskonačnom krugu.

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